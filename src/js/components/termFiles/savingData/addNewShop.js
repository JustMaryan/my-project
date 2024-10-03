import { myTerms } from "../myTerms.js";
import { clearForm } from "../clearForm.js";

// Saving our shops
export function addNewShopToLibrary (target) {
    const bodyForm = target.closest('[data-term-body]');
    const selectMarket = bodyForm.querySelector('[data-term-select="market-list"]');
    const inputShopName = bodyForm.querySelector('[data-term-input="new-shop"]');

    const inputShopNameValue = inputShopName.value.trim(' ');

    if(!inputShopNameValue) {
        alert('Вкажіть назву магазина')
        return;
    }

    if(selectMarket.value === '0') {
        alert('Вкажіть мережу магазина')
        return;
    }

    const selectedMarketName = selectMarket.options[selectMarket.selectedIndex].innerHTML;

    addShopToMarket(selectedMarketName, inputShopNameValue, target);
}

function addShopToMarket(marketName, shopName, target) {
    const market = myTerms.shops.find(shop => shop.marketName === marketName);
    const changesSave = document.querySelector('[data-term-change]');
    
    if (market) {
        if (isShopUnique(market.marketList, shopName)) {
            market.marketList.push({ shopName, foodList: [] });
            changesSave.insertAdjacentHTML('beforeend', `<li class="term__item">Додано магазин ${shopName} до ${marketName}</li>`)
            clearForm(target);
            console.log(myTerms); // Лог для перевірки
        } else {
            alert(`Даний магазин вже існує в категорії ${marketName}`);
        }
    }
}

function isShopUnique(marketList, shopName) {
    return !marketList.some(shop => shop.shopName === shopName);
}