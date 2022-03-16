import { preloadImages } from './utils';
import { gsap } from 'gsap';

// preload images then remove loader (loading class) 

// TODO NOT IN USE 
preloadImages('.hero').then(() => document.body.classList.remove('loading'));


// frame element
const frame = document.querySelector('.hero');

// overlay (SVG path element)
const overlayPath = document.querySelector('.overlay__path');

// menu (wrap) element
const menuWrap = document.querySelector('.menu-wrap');
// const addEventListeners = () => {
//     const navItems = menuWrap.querySelectorAll('.menu__item');
//     navItems.forEach(navItem => {
//         navItem.addEventListener('click', toggleMenu);
//     });
// }

// menu (wrap) element
const topNav = document.querySelector('.top-nav');

// menu (wrap) element
const rsvpButton = topNav.querySelector('.button');

// menu items
const menuItems = menuWrap.querySelectorAll('.menu__item, hr, .menu-description');

// open menu button
const hamburger = document.querySelector('.hamburger');

// big title elements
const title = {
    main: document.querySelector('.hero-title__main'),
    sub: document.querySelector('.hero-title__sub')
};

let isAnimating = false;

// opens the menu
const openMenu = ()  => {
    


    if ( isAnimating ) return;
    isAnimating = true;

    window.document.body.classList.add('menu-open');
    hamburger.classList.add('is-active');


    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        }, 0)
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete: () => {
                frame.classList.add('hero--menu-open');
                menuWrap.classList.add('menu-wrap--open');
                // hamburger.classList.add('is-active');
                topNav.classList.add('is-active');
            }
        })
        // title elements
        .to([title.main, title.sub], { 
            duration: 0.8,
            ease: 'power3.in',
            y: -200,
            stagger: 0.05
        }, 0.2)

        // now reveal
        .set(menuItems, { 
            opacity: 0,
        })
        .set(overlayPath, { 
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
            // onComplete: () => {
            //     hamburger.classList.add('is-active');
            // }
        })
        // menu items translate animation
        .to(menuItems, { 
            duration: 1.1,
            ease: 'power4',
            startAt: {y: 150},
            y: 0,
            opacity: 1,
            stagger: 0.05,
            // onComplete: () => {
            //     addEventListeners();
            // }
        }, '>-=1.1');

}

// closes the menu
const closeMenu = ()  => {
    


    if ( isAnimating ) return;
    isAnimating = true;

    window.document.body.classList.remove('menu-open');
    
    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        }, 0)
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete: () => {
                frame.classList.remove('hero--menu-open');
                menuWrap.classList.remove('menu-wrap--open');
            }
        })
        // now reveal
        .set(overlayPath, { 
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
        })
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        // title elements
        .to([title.main, title.sub], { 
            duration: 1.1,
            ease: 'power4',
            y: 0,
            stagger: -0.05
        }, '>-=1.1')
        // menu items translate animation
        .to(menuItems, { 
            duration: 0.8,
            ease: 'power2.in',
            y: 100,
            opacity: 0,
            stagger: -0.05,
            onComplete: () => {
                hamburger.classList.remove('is-active');
                topNav.classList.remove('is-active');
            }
        }, 0)

}

const toggleMenu = () => {
    if(window.document.body.classList.contains('menu-open')) {
        closeMenu();
    } else {
        openMenu();
    }
};




// click on menu button
hamburger.addEventListener('click', toggleMenu);

const clickMenuLink = () => {
    event.preventDefault();
    const href = event.target.hash;
    console.dir(event)
      let offsetTop = window.document.querySelector(href).offsetTop;
      offsetTop = offsetTop - 100;
      console.log(offsetTop)
      scrollTo({
        top: offsetTop,
        left: 100,
        behavior: "smooth"
      });
      toggleMenu();
};


const navItems = menuWrap.querySelectorAll('.menu__item');
navItems.forEach(navItem => {
    navItem.addEventListener('click', clickMenuLink);
});