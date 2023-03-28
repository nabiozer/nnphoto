export const scrollToElement = (elementId: any) => {
    const el: any = document.getElementById(elementId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`scrool element not found:${elementId}`);
    }
};

export const scrollToTop = (_rootElementId: any = 'root') => {
    scrollToElement(_rootElementId);
};
