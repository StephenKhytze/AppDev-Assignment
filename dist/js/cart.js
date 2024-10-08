const cartBtn = document.querySelector('.branding > a')
const closeCart = document.querySelector('.close-btn')
const cartBlur = document.querySelector('.cart_blur')
const cartSection = document.querySelector('.cart')

cartBtn.addEventListener(('click'), () => {
    cartBlur.classList.add('active');
    cartSection.classList.add('active');
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
})

cartBlur.addEventListener(('click'), () => {
    cartBlur.classList.remove('active');
    cartSection.classList.remove('active');
    document.body.style.overflow = 'visible';
})

closeCart.addEventListener(('click'), () => {
    cartBlur.classList.remove('active');
    cartSection.classList.remove('active');
    document.body.style.overflow = 'visible';
})