document.addEventListener('scroll', function(e) {
    const topNav = document.querySelector('.top-nav');
    const menuWrap = document.querySelector('.menu-wrap');
    const rsvpButton = topNav.querySelector('.button');
    const hamburger = topNav.querySelector('.hamburger');
    const logo = topNav.querySelector('.top-nav__logo');
    const lockup = topNav.querySelector('.top-nav__lockup');

    if (window.scrollY > 700) {
        topNav.classList.add('top-nav--scrolled');
        menuWrap.classList.add('menu-wrap--scrolled');
        hamburger.classList.add('hamburger--accent-color');
        rsvpButton.classList.remove('button--white');
    } else {
        topNav.classList.remove('top-nav--scrolled');
        menuWrap.classList.remove('menu-wrap--scrolled');
        hamburger.classList.remove('hamburger--accent-color');
        rsvpButton.classList.add('button--white');
    }
});

import('jquery').then(async ($) => {


    let heroRipples;
    let dropletRipples;
    // your code that uses jQuery
    
    const initHeroRipples = () => {
        heroRipples = $('.hero').ripples({
            resolution: 600,
            dropRadius: 20,
            perturbance: 0.04
        });
        
    };
    



    const destroyHeroRipples = () => {
        // set a timeout so it only hides once the menu is showing (less jarring)
        setTimeout(function() {
            $(heroRipples).ripples('destroy');
        }, 1000);
    };

    const destroyDroplets = () => {
        // set a timeout so it only hides once the menu is showing (less jarring)
        setTimeout(function() {
            $(dropletRipples).ripples('destroy');
        }, 1000);
    };

    const addDroplets = () => {
        dropletRipples = $('.droplets').ripples({
            resolution: 600,
            interactive: false
        });
        setInterval(function(){
            const x = Math.random() * $('.droplets').outerWidth();
            const y = Math.random() * $('.droplets').outerHeight();
            const radius = 20;
            const strength = 0.04 + Math.random() * 0.04;
            dropletRipples = $('.droplets').ripples('drop', x, y, radius, strength);
        }, 1000);
    };


    setTimeout(() => {
        $('.hero').addClass('render');
        initHeroRipples();
    }), 60;

    // menu (wrap) element
    const menuWrap = document.querySelector('.menu-wrap');
    // open menu button
    const hamburger = document.querySelector('.hamburger');

    // close menu button
    // const closeMenuCtrl = document.querySelector('.menu__close-button');

    // click on menu button
    const toggleMenu = () => {
        if(window.document.body.classList.contains('menu-open')) {
            destroyHeroRipples();
        } else {
            initHeroRipples();
        }
    };


    // click on menu button;lpju
    hamburger.addEventListener('click', toggleMenu);

    const blocks = document.querySelectorAll('.is-style-animated');
    const blockConfig = {
        rootMargin: '0%',
        threshold: 0.25
    };
    const blockObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                if (entry.isIntersecting && !$(entry.target).hasClass('animating')) {
                    $(entry.target).addClass('animating');
                    if($(entry.target).hasClass('droplets')) {
                        addDroplets();
                    }
                } 
                else if(!entry.isIntersecting && $(entry.target).hasClass('animating')){
                    if($(entry.target).hasClass('droplets')) {
                        $(entry.target).removeClass('animating');
                        destroyDroplets();
                    }
                }
            });
    }, blockConfig); 


    blocks.forEach(block => {
        blockObserver.observe(block);
    });

    const titles = document.querySelectorAll('.text-transition');

    const textTransitionConfig = {
        rootMargin: '0%',
        threshold: 0.5
    };
    const textTransitionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                if (entry.isIntersecting && !$(entry.target).hasClass('animating')) {
                    $(entry.target).addClass('animating');
                } 
            });
    }, textTransitionConfig); 


    titles.forEach(text => {
        textTransitionObserver.observe(text);
    });

    const bios = window.document.querySelectorAll('.profile__bio');
    bios.forEach(bio => {
        bio.previousElementSibling.innerText = bio.innerText.split(" ").splice(0, 15).join(" ") + ' ...';
    });


});