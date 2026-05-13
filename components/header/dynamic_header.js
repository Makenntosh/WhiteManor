function initHeaderScroll() {
    const header = document.querySelector('#mainHeader');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('island');
        } else {
            header.classList.remove('island');
        }
    });
}