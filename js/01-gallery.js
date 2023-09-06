import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const container = document.querySelector ('.gallery');


const images = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item"><a class="gallery__link" href="${original}">
 <img
   class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}"/></a></li>`);
   
container.insertAdjacentHTML('beforeend', images.join(''));



container.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  
  if(!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
  <div><img  src="${e.target.dataset.source}" width='800' heigth='auto' 
  /></div>
  `);
  instance.show()

  
  window.addEventListener('keydown', onEscapeClose);
  
  function onEscapeClose(e) {
    console.log(e.code);
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  
  };
}


  
