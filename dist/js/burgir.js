const burgirBtn = document.querySelector('.burgir');
const headerNav = document.querySelector('.header_nav');

burgirBtn.addEventListener('click', () => {
    burgirBtn.classList.toggle('open');
    headerNav.classList.toggle('open');
});

const menuNav = document.querySelectorAll('.tab_nav_link');
const menuContent = document.querySelectorAll('.menu_content_item');
const menuTabs = document.querySelector('.menu_content')
const tabIndicator = document.querySelector('.menu_tabs_indicator');

menuNav.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        removeActiveMenu();
        menu.classList.add('active');
        menuTabs.style.opacity = 0;
        menuTabs.style.transform = "translateX(-30rem)"
        setTimeout(() => {
            menuTabs.style.transform = "translateX(30rem)"
        }, 100);

        setTimeout(() => {
            const activeContent = document.querySelectorAll(`#${menu.id}-content`);
            removeActiveContent();
            activeContent.forEach((content) => {
            content.classList.add('active');
        });
            menuTabs.style.transform = "translateX(0)"
            menuTabs.style.opacity = 1;
        }, 150);
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
