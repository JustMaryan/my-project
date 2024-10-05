'use strict'
import "../scss/term.scss";

import { spollers } from  "./components/files/functions.js";


const storage = [
    {
        adress: 'Кошиця',
        category: 'Свій маркет',
        foodDates: [
            'Львівське світле жб, 2024-10-10'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'Свій маркет',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Малоголосківська 16',
        category: 'Близенько',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Малоголосківська 12',
        category: 'Близенько',
        foodDates: [
            'Львівське світле жб, 2024-10-10'
        ]
    },
    {
        adress: 'Чорновола 69',
        category: 'Близенько',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Чорновола 101',
        category: 'Близенько',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Підголоско',
        category: 'Близенько',
        foodDates: [
            'Львівське світле жб, 2024-10-10'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'АТБ',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Замарстинівська',
        category: 'АТБ',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Чорновола',
        category: 'Арсен',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Чорновола',
        category: 'Рукавичка',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Панча',
        category: 'Рукавичка',
        foodDates: [
            'Львівське світле жб, 2024-10-10'
        ]
    },
    {
        adress: 'Варшавська',
        category: 'Рукавичка',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'Рукавичка',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    },
    {
        adress: 'Малоголосківська',
        category: 'Сімі',
        foodDates: [
            'Львівське 1715 жб, 2024-10-10'
        ]
    }
];

pageLoading();
spollers();

function pageLoading() {
    const loadDates = document.querySelector('[data-date-container]');
    const today = new Date();
    const daysThreshold = 14;
    let isNewDeadlines = true;


    const addDateInContainer = (foodName, foodDaysLeft, marketType, marketAdress,  storageIndex, foodDatesIndex) => {
        const marketNames = {
            'Свій маркет': 'shop_sviumarket',
            'Близенько': 'shop_blizenko',
            'Рукавичка': 'shop_rukavichka',
            'АТБ': 'shop_atb',
            'Сімі': 'shop_simi',
            'Арсен': 'shop_arsen'
        };

        const marketName = marketNames[marketType] || '';

        if(isNewDeadlines) {
            loadDates.insertAdjacentHTML('beforeend', `
                <div data-spollers data-storage-index="${storageIndex}" class="shop ${marketName}">
                    <h2 data-spoller class="shop__title _icon-angle-right">${marketAdress}</h2>
                    <div class="shop__items">
                        <div data-food-index="${foodDatesIndex}" class="shop__item">
                            <p data-date="name" class="shop__product">${foodName} :</p> 
                            <p data-date="days" class="shop__days"><span class="shop__span">${foodDaysLeft}</span> днів</p>
                            <button data-date-btn="info" class="shop__btn-info">i</button>  
                        </div>
                    </div>
                </div>`);
            isNewDeadlines = false;
        } else {
            const shopInCalculation = document.querySelector(`[data-date-adress="${storageIndex}"]`);
            shopInCalculation.querySelector('.shop__items').insertAdjacentHTML('afterend', ` <div data-food-index="${foodDatesIndex}" class="shop__item">
                            <p data-date="name" class="shop__product">${foodName} :</p> 
                            <p data-date="days" class="shop__days"><span class="shop__span">${foodDaysLeft}</span> днів</p>
                            <button data-date-btn="info" class="shop__btn-info">i</button>  
                        </div>`)
        }
    };

    storage.forEach((item, indexShop) => {
        isNewDeadlines = true;
        item.foodDates.forEach((dateString, indexFood) => {
            const [foodName, foodTime] = dateString.split(', ');
            const dateParts = foodTime.split('-');
            const foodDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

            const daysDifference = Math.ceil((foodDate - today) / (1000 * 60 * 60 * 24));

            if (daysDifference <= daysThreshold) {
                addDateInContainer(foodName, daysDifference, item.category, item.adress, indexShop, indexFood);
            }
        });
    });
}


document.addEventListener('click', pageEvents);

function pageEvents (e) {
    const target = e.target;

    if (target.closest('[data-date-btn]')) {
        infoContainer(target);
    }
}

function infoContainer(target) {
    const info = target.closest('[data-date-btn]').getAttribute('data-date-btn');
    switch (info) {
        case 'info':
            infoCreate (target);
            break;
        case 'remove-info':
            infoRemove (target);
            break;
        case 'save-info':
            infoSave (target);
            break;
        case 'create-new-date':
            createNewDate (target);
            break;
        case 'remove-new-date':
            removeNewDate (target);
            break;
        case 'save-new-date':
            saveNewDate (target)
            break;
        default:
            console.log(info + ' не знайдено');
            break;
    }
}

function infoCreate (target) {
    const shop = target.closest('[data-storage-index]');
    const shopIndex = shop.dataset.storageIndex;
    const food = shop.querySelector('[data-food-index]');
    const foodIndex = food.dataset.foodIndex;

    const [foodName, foodTime] = storage[shopIndex].foodDates[foodIndex].split(', ');

    document.body.insertAdjacentHTML('beforeend', `
        <div data-food-info-adress="${shopIndex},${foodIndex}" class="info">
            <div class="info__wrapper">
                <div class="info__btns">
                    <button data-date-btn="save-info" class="info__btn info__btn_save"></button>
                    <button data-date-btn="remove-info" class="info__btn info__btn_remove"></button>
                </div>
                <div class="info__name">Мережа: <span class="info__span">${storage[shopIndex].category}</span></div>
                <div class="info__address">Адреса: <span class="info__span">${storage[shopIndex].adress}</span></div>
                <div class="info__label">
                   <input data-food-info="date" class="info__input" type="date" value="${foodTime}"> 
                </div>
            </div>
        </div>`)
}

function infoRemove (target) {
    target.closest('[data-food-info-adress]').remove();
   
}

function infoSave (target) {
    const infoBody = target.closest('[data-food-info-adress]');
    const [storageIndex, foodIndex] = infoBody.dataset.foodInfoAdress.split(',');
    const foodNewDate = infoBody.querySelector('[data-food-info="date"]').value;

    console.log(storageIndex, foodIndex, foodNewDate);

    const foodName = storage[storageIndex].foodDates[foodIndex].split(', ')[0];
    storage[storageIndex].foodDates[foodIndex] = `${foodName}, ${foodNewDate}`;
    
    infoRemove (target);

}

function createNewDate (target) {
    document.body.insertAdjacentHTML('beforeend', `
         <div class="new-date">
            <div class="new-date__wrapper">
                 <h1 class="new-date__title">Нова дата</h1>
                <p class="new-date__text">Оберіть дату</p>
                <select data-new-date="selector" class="new-date__select">
                    <optgroup label="Свій маркет">
                        <option value="1">Малоголосківська</option>
                        <option value="0">Кошиця</option>
                    </optgroup>
                    <optgroup label="Близеько">
                        <option value="2">Малоголосківська 16</option>
                        <option value="3">Малоголосківська 12</option>
                        <option value="5">Чорновола 101</option>
                        <option value="4">Чорновола 69</option>
                        <option value="6">Підголоско</option>
                    </optgroup>
                    <optgroup label="Рукавичка">
                        <option value="13">Малоголосківська</option>
                        <option value="12">Варшавська</option>
                        <option value="11">Панча</option>
                        <option value="10">Чорновола</option>
                    </optgroup>
                    <optgroup label="АТБ">
                        <option value="8">Замарстинівська</option>
                        <option value="7">Малоголосківська</option>
                    </optgroup>
                    <optgroup label="Арсен">
                        <option value="9">Чорновола</option>
                    </optgroup>
                    <optgroup label="Сімі">
                        <option value="14">Малоголосківська</option>
                    </optgroup>
                </select>
                <p class="new-date__text">Вкажіть назву</p>
                <input data-new-date="name" type="text" class="new-date__input">
                <p class="new-date__text">Вкажіть нову дату</p>
                <input data-new-date="date" type="date" class="new-date__input">
                <div class="new-date__btns">
                    <button data-date-btn="save-new-date" class="new-date__btn-save">Зберегти</button>
                    <button data-date-btn="remove-new-date" class="new-date__btn-remove">Закрити</button>
                </div>
            </div>
        </div>
        `)
}

function saveNewDate (target) {
    const newDateContainer = target.closest('.new-date');
    const shopIndex = newDateContainer.querySelector('[data-new-date="selector"]').value;
    const foodName = newDateContainer.querySelector('[data-new-date="name"]');
    const foodNameValue = newDateContainer.querySelector('[data-new-date="name"]').value.trim();
    const foodDate = newDateContainer.querySelector('[data-new-date="date"]').value;

    if (!foodName) {
        alert('Введіть назву');
        return;
    }

    if (!foodDate) {
        alert('Введіть дату');
        return;
    }

    const newFoodDate = `${foodNameValue}, ${foodDate}`;

    storage[Number(shopIndex)].foodDates.push(newFoodDate);

    foodName.value = '';
}

function removeNewDate (target) {
    target.closest('.new-date').remove()
}
