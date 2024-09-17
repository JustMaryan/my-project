// Експорт функції для створення гіперпосилання
export function link(cribContent) {
    // Запитує у користувача URL для створення посилання
    const linkText = prompt("Enter a URL");
    // Викликає modifyText для створення посилання
    modifyText(cribContent, 'createLink', false, linkText);
}

// Експорт функції для модифікації тексту
export function modifyText(cribContent, command, defaultUi = false, value = null) {
    // Фокусується на переданому елементі, щоб активація редагування могла вплинути на нього
    cribContent.focus(); 
    // Виконує команду документу (наприклад, створення посилання, зміна кольору тексту тощо)
    document.execCommand(command, defaultUi, value);
}

// Експорт функції для управління стилями кнопок
export function btnDecor(button, justify = false) {
    // Якщо justify дорівнює true, скидає активний стиль для всіх кнопок вирівнювання в батьківському елементі
    if (justify) {
        // Знаходить найближчого батьківського елемента, що має атрибут data-crib-item
        const cribItem = button.closest('[data-crib-item]');
        // Список кнопок вирівнювання
        const btns = ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'];
        // Перебирає всі кнопки вирівнювання
        for (let i = 0; i < btns.length; i++) {
            // Знаходить кнопку вирівнювання, що має відповідний data-атрибут
            const findActiveBtn = cribItem.querySelector(`[data-crib-btn="${btns[i]}"]`);
            // Якщо кнопка має активний стиль, видаляє цей стиль
            if (findActiveBtn.classList.contains('cribActive')) {
                findActiveBtn.classList.remove('cribActive');
                break; // Виходить з циклу після видалення активного стилю
            }
        }
    }

    // Перемикає клас 'cribActive' для натиснутої кнопки
    button.classList.toggle('cribActive');
}
