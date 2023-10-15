/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),  
      navClose = document.getElementById('nav-close');

/* ========= MENU SHOW ============ */
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/* ========= MENU HIDDEN ============ */
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(e => e.addEventListener('click', () =>{
    const navMenu =  document.getElementById('nav-menu');
    // when we click on each link we remove show menu class
    navMenu.classList.remove('show-menu');
}))


/*=============== CHANGE BACKGROUND HEADER ===============*/

window.addEventListener('scroll', () =>{
    const header = document.getElementById('header');
    // if scroll y is greader than 50 view port than add scroll header class
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
})

/*=============== POPULAR SWIPER ===============*/

let swiperPopular = new Swiper(".popular__container",{
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/

let mixerFeatured = mixitup('.featured__content',{
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
})

/* Link active featured */ 

const linkFeatured = document.querySelectorAll('.featured__item');

function actiiveFeatured(){
    linkFeatured.forEach(l => l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}
linkFeatured.forEach(l=> l.addEventListener('click', actiiveFeatured));
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
