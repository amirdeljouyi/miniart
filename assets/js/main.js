// import anime from 'animejs';
import Granim from 'granim';
import Particles from 'particlesjs';
import Typed from 'typed.js';
// require('../scss/main.scss');
import Slider from './slider.js';
import ScrollReveal from 'scrollreveal';
import Carousel from './carousel';

var granimInstance = new Granim({
    element: '#gradient',
    name: 'granim',
    opacity: [1, 1],
    states: {
        "default-state": {
            gradients: [
                ['#5041B2', '#7969E6'],
                ['#FD8355', '#F79CBD'],
                ['#CE0C2A', '#DC6C7F'],
                ['#F0613C', '#F0783C']
            ]
        }
    }
});

window.onload = function () {

    var particles = Particles.init({
        selector: '.background',
        color: '#EAEAEA',
        connectParticles: true,
        maxParticles: 120,
        responsive: [{
                breakpoint: 1100,
                options: {
                    maxParticles: 90,
                }
            },
            {
                breakpoint: 768,
                options: {
                    maxParticles: 60,
                }
            },
            {
                breakpoint: 425,
                options: {
                    maxParticles: 30
                }
            },
            {
                breakpoint: 320,
                options: {
                    maxParticles: 0
                }
            }
        ]
    });
};

var options = {
    // stringsElement: '#typed-strings',
    strings: [`<h1 class="title is-1 has-text-white">
    <p>مینی آرت</p>
    <p>رویا تا واقعیت</p></h1>`],
    typeSpeed: 20,
    showCursor: false,
}

var typed = new Typed("#typed", options);

var slider = new Slider(4000);
slider.init();

var carousel = new Carousel(6000);
carousel.init();

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
        document.querySelector('#nav-btn').classList.add('scroll');
    } else {
        document.querySelector('#nav-btn').classList.remove('scroll');
    };
    let sections = document.querySelectorAll('.section2');
    for (const section of sections) {
        const elementPos = section.getBoundingClientRect().top;
        const sectionH = section.offsetHeight;
        const h = window.innerHeight;
        const sectionVert = (h / 2) - (sectionH / 4);

        if (window.innerWidth > 480) {
            if ((elementPos - sectionVert) <= 0 && (elementPos - sectionVert) + sectionH > 0) {
                section.classList.add('animate');
            } else {
                section.classList.remove('animate');
            }
        }else{
            if ((elementPos - sectionVert) <= 0 && (elementPos - sectionVert) + sectionH > 0) {
                section.classList.add('flip');
            } else {
                section.classList.remove('flip');
            }
        }
    }
});

var navButton = document.querySelector('#nav-btn');
var nav = document.querySelector('#nav');
var navContent = document.querySelector('#nav .content');
navButton.addEventListener('click', () => {
    if (!navButton.classList.contains('disable')) {
        navButton.classList.add('disable');
        if (navButton.classList.contains('active')) {
            navButton.classList.remove('active');
            nav.classList.remove('show');
            navContent.classList.remove('active');
            setTimeout(() => {
                navButton.classList.remove('disable');
                nav.classList.remove('displayBlock');
            }, 500);
        } else {
            navButton.classList.add('active');
            nav.classList.add('displayBlock');
            nav.classList.add('show');
            navContent.classList.add('active');
            setTimeout(() => {
                navButton.classList.remove('disable');
            }, 1000);
        }
    }
});

function closeNavDesktop() {
    navButton.classList.remove('active');
    nav.classList.remove('show');
    navContent.classList.remove('active');
    setTimeout(() => {
        navButton.classList.remove('disable');
        nav.classList.remove('displayBlock');
    }, 500);
}

function closeNavMobile() {
    navButtonMobile.classList.remove('active');
    nav.classList.remove('show');
    navContent.classList.remove('active');
    setTimeout(() => {
        nav.classList.remove('displayBlock');
    }, 500);
}

var navButtonMobile = document.querySelector('#nav-btn-mobile');
navButtonMobile.addEventListener('click', () => {


    if (navButtonMobile.classList.contains('active')) {
        closeNavMobile();
    } else {
        nav.classList.add('displayBlock');
        nav.classList.add('show');
        navContent.classList.add('active');
        navButtonMobile.classList.add('active');
    }
});
let items = document.querySelectorAll('.menu__item-name');
for (const item of items) {
    item.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            closeNavDesktop();
        } else {
            closeNavMobile();
        }
    })
}


ScrollReveal().reveal('.section', {
    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    duration: 750,
    delay: 150,
    distance: '100%',
    origin: 'right',
    scale: 1.1,
    mobile: true,
    desktop: false
});


ScrollReveal().reveal('.section.right', {
    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    duration: 750,
    delay: 300,
    distance: '100%',
    origin: 'right',
    scale: 1.1,
    mobile: false
});

ScrollReveal().reveal('.section.left', {
    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    duration: 750,
    delay: 300,
    distance: '100%',
    origin: 'left',
    scale: 1.1,
    mobile: false
});

ScrollReveal().reveal('.section.straight', {
    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    duration: 750,
    delay: 300,
    scale: 0.8,
    mobile: true
});

ScrollReveal().reveal('.section3', {
    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    duration: 750,
    delay: 300,
    scale: 0.8,
    mobile: true
});

items = document.querySelectorAll('.section2');
for (const item of items) {
    item.addEventListener('click', () => {
        item.classList.toggle('flip');
    });
}