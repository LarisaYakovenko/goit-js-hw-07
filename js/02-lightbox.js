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


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});


