const burgirBtn = document.querySelector('.burgir');
const headerNav = document.querySelector('.header_nav');

burgirBtn.addEventListener('click', () => {
    burgirBtn.classList.toggle('open');
    headerNav.classList.toggle('open');
});

const menuNav = document.querySelectorAll('.tab_nav_link');
const menuContent = document.querySelectorAll('.menu_content_item');
const tabIndicator = document.querySelector('.menu_tabs_indicator');

menuNav.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        removeActiveMenu();
        menu.classList.add('active');
        
        const activeContent = document.querySelectorAll(`#${menu.id}-content`);
        removeActiveContent();
        activeContent.forEach((content) => {
            content.classList.add('active');
        });

        if (innerWidth <= 460) {
            tabIndicator.style.left = `calc(calc(33% * ${index}) + 4.35rem)`;
        } else if (innerWidth <= 1920) {
            tabIndicator.style.left = `calc(calc(11.33% * ${index}) + 42.75rem)`;
        }
    });
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
