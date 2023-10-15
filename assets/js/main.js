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


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
