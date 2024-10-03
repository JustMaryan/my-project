import { addNewShopToLibrary } from "./savingData/addNewShop.js";
import { addNewFoodToLibrary } from "./savingData/addNewFood.js";
import { addNewDateToLibrary } from "./savingData/addNewDate.js";
// Save our Form
export function saveForm (target, targetValue) {
    const formBodyValue = target.closest('[data-term-body]').getAttribute('data-term-body');
    switch(formBodyValue) {
        case 'saveNewFood':
            addNewFoodToLibrary(target);
            break;
        case 'saveNewDate':
            addNewDateToLibrary(target);
            break;
        case 'saveNewShop':
            addNewShopToLibrary(target);
            break;
    }
}