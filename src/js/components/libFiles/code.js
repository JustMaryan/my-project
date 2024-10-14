import html from './html.js';

function addCode(cribItems) {
    // Створює новий елемент з HTML-шаблону і вставляє його у cribItems.
    const newItem = document.createRange().createContextualFragment(html.code);
    const contentContainer = newItem.querySelector('[data-crib-content]');
    cribItems.appendChild(newItem);

    CodeMirror(contentContainer, {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: false,
        autoCloseBrackets: true
    });

}
export default addCode;
