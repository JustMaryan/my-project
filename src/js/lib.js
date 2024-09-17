import "../scss/lib.scss";

import javaLibery from '../json/cribLibaryJs.json' assert { type: 'json' };
import gitLibery from '../json/cribLibaryGit.json' assert { type: 'json' };

import { spollers } from  "./components/files/functions.js";

import { addElement, addCode, order, clear, save, edit, remove, localSave } from './components/libFiles/operations.js';

import { link, modifyText, btnDecor } from './components/libFiles/modifyContent.js';

let cribLibery;
const jsonIdentifier = localStorage.getItem('jsonPath');
switch (jsonIdentifier) {
    case 'javaLibery':
        cribLibery = javaLibery;
        loadCribPage()
        break;
    case 'gitLibery':
        cribLibery = gitLibery;
        loadCribPage()
        break;
    default:
        alert("Не вказано дані для бібліотеки !")
        break;
}


document.querySelector('.crib').addEventListener('click', cribAction);

// Взаємодія з кнопками
function cribAction(e) {
    const target = e.target;
    // Взаємодія з елементами редагування
    if (target.closest('[data-crib-btn]')) {
        const cribButton = target.closest('[data-crib-btn]');
        const cribButtonValue = cribButton.dataset.cribBtn;
        cribButtons(cribButton, cribButtonValue);
    }
    // Меню шпаргалки
    if(target.closest('.menu-crib__show')) {
        const menu = document.querySelector('.menu-crib');
        menu.classList.toggle('_active');
    }
}

// Загрузка сторінки
function loadCribPage() {
    const bodyCrib = document.querySelector('[data-crib-body]');
    const menuCrib = document.querySelector('[data-crib-menu]');

    console.log(cribLibery)
    
    const cribLiberyMenu = cribLibery.newMenu;
    menuCrib.insertAdjacentHTML('afterbegin', cribLiberyMenu);
    const cribLiberyBody = cribLibery.newDocument;
    bodyCrib.insertAdjacentHTML('beforeend', cribLiberyBody);

    const content = localStorage.getItem('cribContent');
    
    if (content) {
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = content;
        const contentTitleElement = contentDiv.querySelector('[data-crib-content="main-title"]');
        const contentTitle = contentTitleElement.innerText;
        // Перевірити, чи є дані в localStorage
        const titles = bodyCrib.querySelectorAll('[data-crib-content="main-title"]');
        let matchFound = false;
        for (let i = 0; i < titles.length; i++) {
            if (titles[i].innerText === contentTitle) {
                titles[i].closest('[data-crib-container]').outerHTML = content;
                matchFound = true;
                break;
            }
        }
        if (!matchFound) {
            bodyCrib.insertAdjacentHTML('beforeend', content);
        } 
    }
}

// Ініціалізація спойлера для меню

spollers();




function cribButtons(button, buttonValue) {
    const cribBody = document.querySelector('[data-crib-body]');
    const cribContainer = button.closest('[data-crib-container]');
    const cribItems = cribContainer?.querySelector('[data-crib-items]');
    const cribItem = button.closest('[data-crib-item]');
    const cribContent = cribItem?.querySelector("[data-crib-content]");

    const saveChanges = () => cribContainer && localSave(cribContainer);

    const operations = {
        'add-title': () => { addElement(cribItems, 'title'); saveChanges(); },
        'add-text': () => { addElement(cribItems, 'text'); saveChanges(); },
        'add-important': () => { addElement(cribItems, 'important'); saveChanges(); },
        'add-code': () => { addCode(cribItems); saveChanges(); },
        'order': () => { order(cribItems, button); saveChanges(); },
        'clear': () => clear(cribItems),
        'save': save,
        'edit': () => { edit(cribContainer); saveChanges(); },
        'remove': () => { remove(cribContainer, cribItem); saveChanges(); },
        'add-crib': () => { edit(); addElement(cribBody, 'panel'); localSave(cribBody.lastElementChild); },
    };

    const modifyContent = {
        'bold': () => modifyText(cribContent, 'bold'),
        'italic': () => modifyText(cribContent, 'italic'),
        'justifyLeft': () => modifyText(cribContent, 'justifyLeft'),
        'justifyCenter': () => modifyText(cribContent, 'justifyCenter'),
        'justifyRight': () => modifyText(cribContent, 'justifyRight'),
        'justifyFull': () => modifyText(cribContent, 'justifyFull'),
        'createLink': () => link(cribContent),
        'indent': () => modifyText(cribContent, 'indent'),
        'outdent': () => modifyText(cribContent, 'outdent'),
    };

    if (operations[buttonValue]) {
        operations[buttonValue]();
    } else if (cribItem && modifyContent[buttonValue]) {
        modifyContent[buttonValue]();
        if (['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'].includes(buttonValue)) {
            btnDecor(button, true);
        } else {
            btnDecor(button);
        }
    } else {
        console.error(`Невідоме значення кнопки: ${buttonValue}`);
    }
}
