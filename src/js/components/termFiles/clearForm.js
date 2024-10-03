// Clear out created Form
export function clearForm (target, targetValue) {
    const formBody = target.closest('[data-term-body]');
    const selects = formBody.querySelectorAll('[data-term-select]');
    const inputs = formBody.querySelectorAll('[data-term-input]');

    if(selects.length) {
        for (let i = 0; i < selects.length; i++) {
            selects[i].options[0].selected = true;
        }
    }

    if(inputs.length) {
        for (let i = 0; i < selects.length; i++) {
            inputs[i].value = '';
            inputs[i].classList.remove('active');
        }
    }
}