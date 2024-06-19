let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let shoppingCart = document.querySelector('.shopping-cart');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};

window.onscroll = () => {
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
};

var swiper1 = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

var swiper2 = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

document.getElementById('catagories').onclick = () => {
    document.getElementById('box-container').classList.toggle('active');
};
