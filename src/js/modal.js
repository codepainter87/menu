// const gridItems = document.querySelectorAll('.description__readmore');
// const modal = document.querySelector('.modal');
// const modalCloser = modal.querySelector('.modal__closer');



// const openModal = () => {

//   event.preventDefault();

//   const modalContent = modal.querySelector('.modal__text');
//   const modalImg = modal.querySelector('.modal__image img');
//   const modalImgOffset = modalImg.getBoundingClientRect();
//   // console.dir(event);
//   const gridImg = event.srcElement.parentElement.parentElement.firstElementChild; // img element
//   const textContent = event.srcElement.parentElement.innerHTML;
//   console.dir();

//   modalImg.src = event.srcElement.parentElement.parentElement.firstElementChild.dataset.srcUrl;
//   // add class to grid image so we can select it when we close the modal:
//   gridImg.classList.add('current');
  
//   const gridImgOffset = gridImg.getBoundingClientRect();
  
// //  compare width of original with modal width to generate scaleX value
//     const scaleX = modalImgOffset.width / gridImgOffset.width;
  
// //  compare height of original with modal height to generate scaleY value
//     const scaleY = modalImgOffset.height / gridImgOffset.height;
// //  compare top offset of original with top offset of modal to generate translateY value
//     const translateY = modalImgOffset.top - gridImgOffset.top;
// //  compare left offset of original with left offset of modal to generate translateY value
//     const translateX = modalImgOffset.left - gridImgOffset.left;
// //  apply transform 
//     gridImg.style.transform = `translate(${translateX}px, ${translateY}px) scaleX(${scaleX})`;
  
//     modalContent.innerHTML = textContent;
//     modal.classList.add('modal--open');
    
// };

// const closeModal = () => {
//   modal.classList.remove('modal--open');
  
//   const gridImg = document.querySelector('.current'); // img element
//         gridImg.classList.remove('current');
//         // gridImg.style.transform = `translate(0px, 0px) scale(1,1)`;
// }



import { gsap } from 'gsap';

// preload images then remove loader (loading class) 


const profiles = document.querySelectorAll('.profile');

// overlay (SVG path element)
const modalOverlayPath = document.querySelector('.modal-overlay__path');

// menu (wrap) element
const modalWrap = document.querySelector('.modal-wrap');

const modalCloser = modalWrap.querySelector('.modal__closer');

// menu items
const modalItems = modalWrap.querySelectorAll('.modal__image, .modal__name, .modal__title, .modal__bio');

let isAnimating = false;

// opens the menu
const openModal = ()  => {

    event.preventDefault();
    if ( isAnimating ) return;
    isAnimating = true;

    const profile = event.srcElement.parentElement.parentElement;
    const profileImage = profile.querySelector('.profile__image img');
    const profileName = profile.querySelector('.profile__name') ? profile.querySelector('.profile__name').innerText : "";
    const profileTitle = profile.querySelector('.profile__title') ? profile.querySelector('.profile__title').innerText : "";
    const profileBio =  profile.querySelector('.profile__bio') ? profile.querySelector('.profile__bio').innerHTML: "";
    console.dir(profileImage)
    console.log(profileName)
    console.log(profileTitle)
    console.log(profileBio)

    const modalImg = modalWrap.querySelector('.modal__image img');
    const modalName = modalWrap.querySelector('.modal__name');
    const modalTitle = modalWrap.querySelector('.modal__title');
    const modalBio =  modalWrap.querySelector('.modal__bio');

    modalImg.src = profileImage.src;
    modalName.innerText = profileName;
    modalTitle.innerText = profileTitle;
    modalBio.innerHTML =  profileBio;

    window.document.body.classList.add('modal--open');


    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(modalOverlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(modalOverlayPath, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        }, 0)
        .to(modalOverlayPath, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete: () => {
                modalWrap.classList.add('modal-wrap--open');
            }
        })

        // now reveal
        .set(modalItems, { 
            opacity: 0,
        })
        .set(modalOverlayPath, { 
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(modalOverlayPath, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(modalOverlayPath, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        })
        // menu items translate animation
        .to(modalItems, { 
            duration: 1.1,
            ease: 'power4',
            startAt: {y: 150},
            y: 0,
            opacity: 1,
            stagger: 0.05,
        }, '>-=1.1');

}

// closes the modal
const closeModal = ()  => {

    if ( isAnimating ) return;
    isAnimating = true;

    window.document.body.classList.remove('modal--open');
    
    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(modalOverlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        .to(modalOverlayPath, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        }, 0)
        .to(modalOverlayPath, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete: () => {
                modalWrap.classList.remove('modal-wrap--open');
            }
        })
        // now reveal
        .set(modalOverlayPath, { 
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
        })
        .to(modalOverlayPath, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
        })
        .to(modalOverlayPath, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        // menu items translate animation
        .to(modalItems, { 
            duration: 0.8,
            ease: 'power2.in',
            y: 100,
            opacity: 0,
            stagger: -0.05,
        }, 0)

}

// const toggleMenu = () => {
//     if(window.document.body.classList.contains('menu-open')) {
//         closeMenu();
//     } else {
//         openMenu();
//     }
// };


for(const profile of profiles) {
  profile.addEventListener('click', openModal);
}

 modalCloser.addEventListener('click', closeModal);