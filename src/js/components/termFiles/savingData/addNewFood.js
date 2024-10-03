import { myTerms } from "../myTerms.js";
import { clearForm } from "../clearForm.js";

// Додає нову їжу та тип їжі до нашої бази даних
export function addNewFoodToLibrary(target) {
    const bodyForm = target.closest('[data-term-body]');
    const selectType = bodyForm.querySelector('[data-term-select="type-list"]');
    const inputType = bodyForm.querySelector('[data-term-input="new-type"]');
    const inputFood = bodyForm.querySelector('[data-term-input="new-food"]');

    const inputTypeValue = inputType.value.trim();
    const inputFoodValue = inputFood.value.trim();
    const changesSave = document.querySelector('[data-term-change]');

    // Перевірка, чи введена назва продукту
    if (!inputFoodValue) {
        alert('Введіть назву продукта');
        return;
    }

    // Перевірка, чи введена категорія або вибрано нову
    if (!inputTypeValue && selectType.value === '0') {
        alert('Введіть категорію продукта, або вкажіть нову категорію');
        return;
    }

    // Обробка нової категорії
    if (selectType.value === '0') {
        handleNewType(inputTypeValue, inputFoodValue, changesSave);
    } else {
        // Обробка вже існуючої категорії
        handleExistingType(inputTypeValue, selectType, inputFoodValue, changesSave);
    }

    clearForm(target); // Очищення форми після додавання
}

// Обробка нової категорії
function handleNewType(typeName, foodName, changesSave) {
    const existingType = myTerms.food.find(item => item.foodTypeName === typeName);

    if (existingType) {
        // Додаємо їжу до існуючої категорії
        existingType.foodList.push(foodName);
    } else {
        // Створюємо нову категорію
        myTerms.food.push({ foodTypeName: typeName, foodList: [foodName] });
    }
    logChange(changesSave, foodName, typeName); // Лог зміни
}

// Обробка вже існуючої категорії
function handleExistingType(inputTypeValue, selectType, foodName, changesSave) {
    const selectedType = inputTypeValue || selectType.options[selectType.selectedIndex].innerHTML;
    const existingType = myTerms.food.find(item => item.foodTypeName === selectedType);

    if (existingType) {
        existingType.foodList.push(foodName); // Додаємо їжу до існуючої категорії
        logChange(changesSave, foodName, selectedType); // Лог зміни
    }
}

// Логіка для запису зміни в DOM
function logChange(changesSave, foodName, typeName) {
    changesSave.insertAdjacentHTML('beforeend', `<li class="term__item">Додано продукт ${foodName} до ${typeName}</li>`);
}
