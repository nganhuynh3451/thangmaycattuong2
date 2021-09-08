const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const scrollToTop = document.querySelector('.scroll-to-top');

scrollToTop.addEventListener('click', function () {
    window.scrollTo (0, 0);
});
scrollToTop.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        scrollToTop.classList.add('active');
    } else {
        scrollToTop.classList.remove('active');
    }
}); 

const navbar = document.querySelector('.navbar');

navbar.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}); 
