// Remove our form 
export function removeForm(target, targetValue) {
    target.closest('[data-term-body]').remove();
}