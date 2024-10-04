'use strict'
import "../scss/term.scss";




const storage = [
    {
        adress: 'Кошиця',
        category: 'Свій маркет',
        foodDates: [
            'Львівське світле жб, 9-10-2024'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'Свій маркет',
        foodDates: [
            'Львівське 1715 жб, 10-10-2024'
        ]
    },
    {
        adress: 'Малоголосківська 16',
        category: 'Близенько',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Малогосківська 12',
        category: 'Близенько',
        foodDates: [
            'Львівське світле жб, 01-10-2024'
        ]
    },
    {
        adress: 'Чорновола 69',
        category: 'Близенько',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Чорновола 101',
        category: 'Близенько',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Підголоско',
        category: 'Близенько',
        foodDates: [
            'Львівське світле жб, 01-10-2024'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'АТБ',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Замарстинівська',
        category: 'АТБ',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Чорновола',
        category: 'Арсен',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Чорновола',
        category: 'Рукавичка',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Панча',
        category: 'Рукавичка',
        foodDates: [
            'Львівське світле жб, 01-10-2024'
        ]
    },
    {
        adress: 'Варшавська',
        category: 'Рукавичка',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'Рукавичка',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'Сімі',
        foodDates: [
            'Львівське 1715 жб, 01-10-2024'
        ]
    }
];

pageLoading();

function pageLoading() {
    const loadDates = document.querySelector('[data-date-container]');
    const today = new Date();
    const daysThreshold = 14;

    const addDateInContainer = (foodName, foodDaysLeft, marketType, storageIndex) => {
        const marketNames = {
            'Свій маркет': 'shop_sviu-market',
            'Близенько': 'shop_blizenko',
            'Рукавичка': 'shop_rukavichka',
            'АТБ': 'shop_atb',
            'Сімі': 'shop_simi',
            'Арсен': 'shop_arsen'
        };

        const marketName = marketNames[marketType] || '';
        loadDates.insertAdjacentHTML('beforeend', `
            <div data-date-item="${storageIndex}" class="date__item shop ${marketName}">
                <div class="shop__body">
                    <p data-date="name" class="shop__product">${foodName}</p> 
                    <p data-date="days" class="shop__days">${foodDaysLeft} днів</p>
                </div>
                <button data-date-info="create" class="shop__menu-icon">i</button>   
            </div>`);
    };

    storage.forEach((item, index) => {
        item.foodDates.forEach(dateString => {
            const [dateName, datePart] = dateString.split(', ');
            const dateParts = datePart.split('-');
            const foodDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

            const daysDifference = Math.ceil((foodDate - today) / (1000 * 60 * 60 * 24));

            if (daysDifference <= daysThreshold) {
                addDateInContainer(dateName, daysDifference, item.category, index);
            }
        });
    });
}


document.addEventListener('click', pageEvents);

function pageEvents (e) {
    const target = e.target;

    if (target.closest('[data-date-info]')) {
        infoContainer(target);
    }
}

function infoContainer(target) {
    const info = target.closest('[data-date-info]').getAttribute('data-date-info');
    switch (info) {
        case 'create':
            infoCreate (target);
            break;
        case 'remove':
            infoRemove (target);
            break;
        case 'save':
            break;
        default:
            console.log(info + ' не знайдено');
            break;
    }
}

function infoCreate (target) {
    const item = target.closest('[data-date-item]');
    const itemIndex = item.dataset.dateItem;
    document.body.insertAdjacentHTML('beforeend', `
        <div data-date-info="body" class="info">
            <div class="info__wrapper">
                <div class="info__btns">
                    <button data-date-info="save" class="info__btn info__btn_save"></button>
                    <button data-date-info="remove" class="info__btn info__btn_remove"></button>
                </div>
                <div class="info__name">Мережа: <span class="info__span">${storage[itemIndex].category}</span></div>
                <div class="info__address">Адреса: <span class="info__span">${storage[itemIndex].adress}</span></div>
                <div class="info__label">
                   <input class="info__input" type="date"> 
                </div>
            </div>
        </div>`)
}

function infoRemove (target) {
    target.closest('[data-date-info="body"]').remove();
   
}
