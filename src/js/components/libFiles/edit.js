import { order } from "./operations.js";

function edit(chapter) {
    // when creating a new chapter. Clearing the active chapter
    if(!chapter) {
        [...document.querySelectorAll(['data-chapter'])].forEach(chapter => {
            if (chapter.classList.contains('_edit-chapter')) edit(chapter);
        })
        return
    }
    // checking if chapter not active
    const isActive = chapter.classList.contains('_edit-chapter');
    editClearAll(chapter);

    if (!isActive) {
        [...chapter.querySelectorAll('[data-edit]')].forEach(editElement => {
            editElement.contentEditable = "true";
        });
        chapter.classList.add('_edit-chapter');
    } 

}

function editClearAll(chapter) {

    // checking for element reordering activity
    const isSortableElement = chapter.querySelector('[data-crib-items]');
    if (isSortableElement && isSortableElement.classList.contains('ui-sortable')) {
        const btnOrder = chapter.querySelector('[data-btn="order"]');
        btnOrder.querySelector('[data-crib-check]').checked = false;
        order(isSortableElement, btnOrder); 
    }

    [...chapter.querySelectorAll('[data-edit]')].forEach(editElement => {
        editElement.contentEditable = "false";
    });
    chapter.classList.remove('_edit-chapter');
}

export default edit;