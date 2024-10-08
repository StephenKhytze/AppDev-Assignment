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
        }, 250);
        if (innerWidth <= 460) {
            tabIndicator.style.left = `calc(calc(33% * ${index}) + 4.35rem)`;
        } else if (innerWidth <= 2160) {
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

const homeContent = document.querySelector('.home_content')
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.header_nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 115) {
            navMenu.classList.add('sticky');
            homeContent.classList.add('sticky')
        } else {
            navMenu.classList.remove('sticky');
            homeContent.classList.remove('sticky')
        }
    })
});

const homeBtn = document.querySelector('.home_btn');
homeBtn.addEventListener('click', () => {
    if (homeContent.classList.contains('visible')) {
        homeContent.style.opacity = '0';
        setTimeout(() => {
            homeContent.style.display = 'none';
        }, 250);
    } else {
        homeContent.style.display = 'unset';
        setTimeout(() => {
            homeContent.style.opacity = '1';
        }, 10);
    }
    homeContent.classList.toggle('visible');
});
