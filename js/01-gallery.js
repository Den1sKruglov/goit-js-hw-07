import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGallery = document.querySelector('.gallery');

const getGalleryItems = galleryItems.map(({ preview, original, description }) => {
   console.log(preview);
   return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
               />
            </a>
         </div>`
}).join('');

getGallery.insertAdjacentHTML("afterbegin", getGalleryItems);

getGallery.addEventListener('click', onParentClick);

function onParentClick(evt) {
   evt.preventDefault();

   if (evt.target.className !== 'gallery__image') {
      return;
   }

   const ligthBoxShow = basicLightbox.create(`
		<img src = '${evt.target.dataset.source}' alt = '${evt.target.alt}'/>
	`);

   ligthBoxShow.show();

   document.addEventListener("keydown", event => {
      console.log(event.code);
      if (event.code !== 'Escape') {
         return;
      };
      ligthBoxShow.close();
   });
};

