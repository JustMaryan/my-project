// Import storage for further changes
import { storage } from "../../term.js";
import { popup } from "./popup.js";
import { success } from './succes.js';
import { localSaveDate } from "./localSaceDate.js";


// Popup about
export function infoCreate (target) {
    // Adress
    const shop = target.closest('[data-storage-index]');
    const shopIndex = shop.dataset.storageIndex;
    const food = target.closest('[data-food-index]');
    const foodIndex = food.dataset.foodIndex;

    // Food name and date
    const [foodName, foodDate] = storage[shopIndex].foodDates[foodIndex].split(', ');

    const popupContent = `
        <div data-adress="${shopIndex},${foodIndex}" class="popup__info">
            <h4 class="popup__title">Інформація про продукт</h4>
            <p class="popup__text">Мережа: <span class="popup__span">${storage[shopIndex].category}</span></p>
            <p class="popup__text">Адреса: <span class="popup__span">${storage[shopIndex].address}</span></p>
            <p class="popup__text">Продукт: <span class="popup__span">${foodName}</span></p>
            <input data-date class="popup__date" type="date" value="${foodDate}">
            <div class="popup__btns">
                <button data-btn="infoSave" class="popup__btn-confirm">Confirm</button>
                <button class="popup__btn-reset">Reset</button>
            </div>
        </div>`
    popup(popupContent);
}

// Save new date
export function infoSave (target) {
    // Get adress food
    const infoBody = target.closest('[data-adress]');
    const [storageIndex, foodIndex] = infoBody.dataset.adress.split(',');
    // New date
    const foodNewDate = infoBody.querySelector('[data-date]').value;
    const foodName = storage[storageIndex].foodDates[foodIndex].split(', ')[0];
    // Add food with new date
    storage[storageIndex].foodDates[foodIndex] = `${foodName}, ${foodNewDate}`;
    success(`Змінено: <span>${storage[storageIndex].foodDates[foodIndex]}</span>. За адресою: <span>${storage[storageIndex].category}, ${storage[storageIndex].address}</span> `)
    localSaveDate();
}