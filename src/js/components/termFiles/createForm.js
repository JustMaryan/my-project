import { htmlBlocks } from "./htmlBlocks.js";
import { myTerms } from "./myTerms.js"
// Create form 
export function createForm (target, targetValue) {
    document.body.insertAdjacentHTML('beforeend', htmlBlocks[targetValue]);
    formInputCheck();
    selectOptions ()
}



// COMPONENTS

// Component for created form. Input
function formInputCheck () {
    const inputs = document.querySelectorAll('[data-term-input]');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.classList.remove('active');
            }
        });
});

}

//Componet for created form. Select
function selectOptions () {
    const foodType = document.querySelector('[data-term-select="type-list"]');
    const foodList = document.querySelector('[data-term-select="food-list"]');
    const foodShop = document.querySelector('[data-term-select="shop-list"]');
    if (foodType) {
        for (let i = 0; i < myTerms.food.length; i++) {
        foodType.insertAdjacentHTML('beforeend', `<option value="${i + 1}">${myTerms.food[i].foodTypeName}</option>`)
        }
    }
    if(foodList) {
        for (let i = 0; i < myTerms.food.length; i++) {
            let groupOptions = '';
            for(let g = 0; g < myTerms.food[i].foodList.length; g++) {
                groupOptions += `<option value="${g + 1}">${myTerms.food[i].foodList[g]}</option>`
            }
            foodList.insertAdjacentHTML('beforeend', `<optgroup label="${myTerms.food[i].foodTypeName}">${groupOptions}</outgroup>`)
        }
    }
    if(foodShop) {
        for (let i = 0; i < myTerms.shops.length; i++) {
            let groupOptions = '';
            for(let g = 0; g < myTerms.shops[i].marketList.length; g++) {
                groupOptions += `<option value="${g + 1}">${myTerms.shops[i].marketList[g].shopName}</option>`
            }
            foodShop.insertAdjacentHTML('beforeend', `<optgroup label="${myTerms.shops[i].marketName}">${groupOptions}</outgroup>`)
        }
    }
    
}
