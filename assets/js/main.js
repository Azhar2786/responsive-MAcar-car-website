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


window.addEventListener('scroll', () =>{
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
})
// Azhar
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animation repeat
})

sr.reveal('.home__title, .popular__container, .features__img, .featured__filters')
sr.reveal('.home__subtitle',{delay:600})
sr.reveal('.home__elec',{delay:700})
sr.reveal('.home__img',{delay:750})
sr.reveal('.home__car-data',{delay:850, interval: 100, origin: 'bottom'})
sr.reveal('.home__button',{delay:900, origin: 'bottom'})
sr.reveal('.about__group, .offer__data',{origin: 'left'})
sr.reveal('.about__data, .offer__img',{origin: 'right'})
sr.reveal('.features__map',{dealy: 600, origin: 'bottom'})
sr.reveal('.features__card',{interval: 300})
sr.reveal('.featured__card, .logos__content, .footer__content',{interval: 100})

// Azhar