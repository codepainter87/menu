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

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateRsvpField = ( field ) => {
        const inputValue = $(field).val();
        let isError = false;
        if (inputValue == null || inputValue.length <= 0) {
            $(field).parent('.rsvp-form__label').removeClass('rsvp-form__label--active');
            $(field).parent('.rsvp-form__label').addClass('rsvp-form__label--error');
            isError = true;
        } else {
            if($(field).attr('type') === 'email' && !validateEmail(email)) {
                $(field).parent('.rsvp-form__label').addClass('rsvp-form__label--invalid');
            } else {
                $(field).parent('.rsvp-form__label').removeClass('rsvp-form__label--invalid');
                $(field).parent('.rsvp-form__label').removeClass('rsvp-form__label--error');
            };
        }
        return isError;
    };

    // add active class to input on focus 
    $("#rsvp input").focus(function(){
        $(this).parent('.rsvp-form__label').addClass('rsvp-form__label--active');
    });
    
    // remove active class from EMPTY inputs on focusout 
    $("#rsvp input").focusout(function(){
        validateRsvpField(this);
    });


    $('#submit-rsvp-form').click(function() {

        let isError = false;
        
       /* Form field validation
        - All fields:
            - if no value add error class
            - if has value remove error class UNLESS it is an email field
        - Email field
            - if email is invalid add invalid class
            - if email is valid remove valid class
    */
        $('#rsvp input').each((index, elem) => {
            isError = validateRsvpField(elem);
        });
        
        if(!isError) {
            $("#rsvp-form").removeClass('rsvp-form--error');
            $("#rsvp-form").addClass('rsvp-form--success');
            return true;
        } else {
            $("#rsvp-form").addClass('rsvp-form--error');
            return false;
        };
    });

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