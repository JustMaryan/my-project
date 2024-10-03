'use strict'
import "../scss/term.scss";

import { myTerms } from "./components/termFiles/myTerms.js"

import { createForm } from "./components/termFiles/createForm.js";
import { removeForm } from "./components/termFiles/removeForm.js";
import { clearForm } from "./components/termFiles/clearForm.js";
import { saveForm } from "./components/termFiles/saveForm.js";



document.addEventListener('click', pageEvents);


function pageEvents (e) {
    const target = e.target;


    const btnsEventsList = {
        saveForm: saveForm,
        clearForm: clearForm,
        createFoodForm: createForm,
        createDateForm: createForm,
        createShopForm: createForm,
        removeForm: removeForm,
    }

    if (target.closest('.header__btn')) {
        document.documentElement.classList.toggle('menu-active');
    }

    if (target.closest('[data-term-btn]')) {
        const targetValue = target.closest('[data-term-btn]').getAttribute('data-term-btn');
        btnsEventsList[targetValue] ? btnsEventsList[targetValue](target, targetValue) : console.log(`Value '${targetValue}' not find.`);
    }
}

/**
 data-term-btn
    createFoodForm
    createDateForm
    createShopForm

    removeForm
    saveForm
    clearForm

 data-term-body
    saveNewFood
    saveNewDate
    saveNewShop

    data-term-select
        type-list
        food-list
        shop-list
        market-list
    data-term-input
        new-type
        new-food
        new-shop
    data-term-date
        new-date
 */