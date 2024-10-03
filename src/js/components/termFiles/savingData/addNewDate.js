import { myTerms } from "../myTerms.js";
import { clearForm } from "../clearForm.js";

export function addNewDateToLibrary (target) {
    const bodyForm = target.closest('[data-term-body]');
    const selectShop = bodyForm.querySelector('[data-term-select="shop-list"]');
    const selectFood = bodyForm.querySelector('[data-term-select="food-list"]');
    const inputDate = bodyForm.querySelector('[data-term-date="new-date"]');

    if(!inputDate.value) {
        alert('Ведіть дату продукції')
        return;
    }

    if(selectFood === '0') {
        alert('Ведіть продукцію')
        return;
    }

    if(selectShop === '0') {
        alert('Ведіть магазин')
        return;
    }

    const shopName = selectShop.value; // Отримуємо назву магазину

    // Функція для пошуку магазину
    function findShopByName(shopName) {
        for (const market of myTerms.shops) {
            for (const shop of market.marketList) {
                if (shop.shopName.toLowerCase() === shopName.toLowerCase()) {
                    return shop; // Повертаємо знайдений магазин
                }
            }
        }
        return null; // Якщо магазин не знайдено
    }

    const foundShop = findShopByName(shopName);
    alert('Магазин знайдено');
    console.log(myTerms)

}

// Логіка для запису зміни в DOM
function logChange(changesSave, foodName, typeName) {
    changesSave.insertAdjacentHTML('beforeend', `<li class="term__item">Додано продукт ${foodName} до ${typeName}</li>`);
}