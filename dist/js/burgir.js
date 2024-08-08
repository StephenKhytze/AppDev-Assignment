const burgirBtn = document.querySelector('.burgir');
const headerNav = document.querySelector('.header_nav');

burgirBtn.addEventListener('click', () => {
    burgirBtn.classList.toggle('open');
    headerNav.classList.toggle('open');
});

const menuNav = document.querySelectorAll('.tab_nav_link');
const menuContent = document.querySelectorAll('.menu_content_item')

menuNav.forEach((menu) => {
    menu.addEventListener('click', () => {
        removeActiveMenu();
        menu.classList.add('active');
        
        const activeContent = document.querySelector(`#${menu.id}-content`);
        removeActiveContent();
        activeContent.classList.add('active');
    });
    removeActiveMenu();
});

function removeActiveMenu() {
    menuNav.forEach((menu) => {
        menu.classList.remove('active');
    });
}

function removeActiveContent() {
    menuContent.forEach((menu) => {
        menu.classList.remove('active');
    });
}
