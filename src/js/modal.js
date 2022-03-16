const gridItems = document.querySelectorAll('.grid__item');
const modal = document.querySelector('.modal');
const modalCloser = modal.querySelector('.modal__closer');



const openModal = () => {

  const modalContent = modal.querySelector('.modal__text');
  const modalImg = modal.querySelector('.modal__image img');
  const modalImgOffset = modalImg.getBoundingClientRect();
  // console.dir(event);
  const gridImg = event.srcElement; // img element
  const textContent = gridImg.nextElementSibling.innerHTML;
  console.dir(gridImg);

  modalImg.src = gridImg.src;
  // add class to grid image so we can select it when we close the modal:
  gridImg.classList.add('current');
  
  const gridImgOffset = gridImg.getBoundingClientRect();
  
//  compare width of original with modal width to generate scaleX value
    const scaleX = modalImgOffset.width / gridImgOffset.width;
  
//  compare height of original with modal height to generate scaleY value
    const scaleY = modalImgOffset.height / gridImgOffset.height;
//  compare top offset of original with top offset of modal to generate translateY value
    const translateY = modalImgOffset.top - gridImgOffset.top;
//  compare left offset of original with left offset of modal to generate translateY value
    const translateX = modalImgOffset.left - gridImgOffset.left;
//  apply transform 
    gridImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
  
    modalContent.innerHTML = textContent;
    modal.classList.add('modal--open');
    
};

const closeModal = () => {
  modal.classList.remove('modal--open');
  
  const gridImg = document.querySelector('.current'); // img element
        gridImg.classList.remove('current');
        gridImg.style.transform = `translate(0px, 0px) scale(1,1)`;
}

// for(const gridItem of gridItems) {
//   gridItem.addEventListener('click', openModal);
// }

//  modalCloser.addEventListener('click', closeModal);