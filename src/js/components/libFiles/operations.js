import { cribHTML } from "./html.js"; // Імпорт об'єкта cribHTML з файла html.js, який містить HTML-шаблони.

export function addElement(cribElement, buttonValue) {
    // Додає HTML-код до cribElement на основі значення buttonValue.
    cribElement.insertAdjacentHTML('beforeend', cribHTML[buttonValue]);
}

export function addCode(cribItems) {
    // Створює новий елемент з HTML-шаблону і вставляє його у cribItems.
    const newItem = document.createRange().createContextualFragment(cribHTML.code);
    const contentContainer = newItem.querySelector('[data-crib-content]');
    cribItems.appendChild(newItem);

    // Ініціалізує CodeMirror для редагування коду з JavaScript режимом і темою "dracula".
    CodeMirror(contentContainer, {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: true,
        autoCloseBrackets: true
    });
}

export function order(cribItems, button) {
    // Увімкнення або вимкнення можливості сортування елементів cribItems за допомогою jQuery UI sortable.
    const checkAuditJQ = $(button.querySelector('[data-crib-check]')); // Отримує jQuery елемент кнопки сортування.
    const cribItemsJQ = $(cribItems); // Отримує jQuery елемент cribItems.
    const isChecked = checkAuditJQ.prop('checked'); // Перевіряє, чи встановлено прапорець сортування.

    if (isChecked) {
        cribItemsJQ.sortable({}); // Увімкнення сортування.
        button.classList.add('_crib-check'); // Додає клас, що вказує на увімкнене сортування.
    } else {
        button.classList.remove('_crib-check'); // Видаляє клас сортування.
        if (cribItemsJQ.data('ui-sortable')) { // Перевіряє, чи є активне сортування.
            cribItemsJQ.sortable('destroy'); // Вимикає сортування.
        }
    }
}

export function clear(cribItems) {
    // Очищує вміст cribItems.
    cribItems.innerHTML = '';
}

export function save() {
    // Функція для збереження поточного стану елементів crib в JSON файл.
    const cribBody = document.querySelector('[data-crib-body]');
    const cribContainers = [...cribBody.querySelectorAll('[data-crib-container]')]; // Перетворює NodeList в масив.

    // Перебирає всі контейнери crib і викликає edit(), якщо контейнер в режимі редагування.
    cribContainers.forEach(container => {
        let cribItems = container.querySelector('[data-crib-items]');
        if(container.classList.contains('_crib-edit')) {
            edit(container, cribItems);
        }
    });

    localStorage.clear(); // Очищує LocalStorage.

    const newCrib = { newDocument: assignIDsAndReturnHTML(cribBody) }; // Створює об'єкт newCrib з HTML вмістом cribBody.
    newCrib.newMenu = generateMenuHTML(cribBody); // Додає згенерований HTML меню до об'єкта newCrib.

    downloadJSON(newCrib, 'cribLibrary.json'); // Завантажує JSON файл з новим вмістом crib.
}

function assignIDsAndReturnHTML(cribBody) {
    // Присвоює унікальні ID кожному заголовку і повертає HTML вміст cribBody.
    [...cribBody.querySelectorAll('[data-crib-content="title"]')].forEach((title, i) => {
        title.id = `${i}`; // Присвоює ID кожному елементу з атрибутом data-crib-content="title".
    });
    return cribBody.innerHTML;
}

function generateMenuHTML(cribBody) {
    // Генерує HTML меню з елементів cribBody.
    const menuContainer = document.createElement('div');
    const cribMenuItems = [...cribBody.querySelectorAll('[data-crib-container]')];

    cribMenuItems.forEach(item => {
        const cribMainTitle = item.querySelector('[data-crib-content="main-title"]').innerText; // Отримує головний заголовок кожного контейнера crib.
        const cribTitles = [...item.querySelectorAll('[data-crib-content="title"]')]; // Отримує всі заголовки в контейнері.

        const newItem = document.createRange().createContextualFragment(cribHTML.menu); // Створює новий елемент меню з HTML-шаблону.
        newItem.querySelector('[data-crib-menu="title"]').innerText = cribMainTitle; // Встановлює головний заголовок у меню.

        const cribMenuLinks = newItem.querySelector('[data-crib-menu="items"]');
        cribTitles.forEach(title => {
            cribMenuLinks.insertAdjacentHTML('beforeend', `
                <li class="menu-crib__item"><a href="#${title.id}" class="menu-crib__link">${title.innerText}</a></li>`
            ); // Додає посилання для кожного заголовку.
        });

        menuContainer.appendChild(newItem); // Додає новий елемент меню до контейнера меню.
    });

    return menuContainer.innerHTML; // Повертає HTML вміст меню.
}

function downloadJSON(data, filename) {
    // Завантажує JSON файл з даними data під назвою filename.
    const jsonCrib = JSON.stringify(data, null, 2); // Перетворює об'єкт даних у JSON строку.
    const blob = new Blob([jsonCrib], { type: 'application/json' }); // Створює Blob з JSON даними.
    const url = URL.createObjectURL(blob); // Створює тимчасовий URL для Blob.
    const a = document.createElement('a'); // Створює HTML елемент <a> для завантаження файлу.
    a.href = url;
    a.download = filename;
    a.click(); // Імітує клік для завантаження файлу.
    URL.revokeObjectURL(url); // Відкликає тимчасовий URL після завантаження.
}

export function edit(cribContainer) {
    // Вмикає режим редагування для вказаного cribContainer.
    if (cribContainer && !cribContainer.classList.contains('_crib-edit')) {
        editClearAll(); // Очищує будь-які інші активні редагування.
        [...cribContainer.querySelectorAll('[data-crib-content]')].forEach(content => {
            content.contentEditable = "true"; // Вмикає режим редагування.
        });
        cribContainer.classList.add('_crib-edit'); // Додає клас для позначення режиму редагування.
    } else {
        editClearAll(); // Очищує режим редагування, якщо він уже активний.
    }
}

export function editClearAll() {
    // Вимикає режим редагування для всіх контейнерів crib.
    [...document.querySelectorAll('._crib-edit')].forEach(container => {
        const cribEditableItems = container.querySelector('[data-crib-items]');
        if (cribEditableItems.classList.contains('ui-sortable')) {
            const btnOrder = container.querySelector('[data-crib-btn="order"]');
            btnOrder.querySelector('[data-crib-check]').checked = false;
            order(cribEditableItems, btnOrder); // Вимикає сортування, якщо воно активне.
        }
        container.classList.remove('_crib-edit'); // Видаляє клас редагування.
        [...container.querySelectorAll('[data-crib-content]')].forEach(content => {
            content.contentEditable = "false"; // Вимикає режим редагування для всіх елементів.
        });
    });
}

export function remove(cribContainer, cribItem) {
    // Видаляє вказаний елемент cribItem або контейнер cribContainer, якщо cribItem не вказано.
    cribItem ? cribItem.remove() : cribContainer.remove();
}

export function localSave(cribContainer) {
    // Зберігає вміст cribContainer у LocalStorage.
    localStorage.setItem('cribContent', cribContainer.outerHTML);
}