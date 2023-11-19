import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import getRefs from './refs.js';
import createmarkUp from './markup.js';
import { fetchImages, scroll } from './helpers.js';

const refs = getRefs();
let photosArray = {};



refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
   const photoToSearch = e.target.elements.searchQuery.value;
 photosArray = await fetchImages(photoToSearch);
    if (photosArray.hits.length ===0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }
  refs.gallery.insertAdjacentHTML('beforeend', createmarkUp(photosArray));
  var lightbox = new SimpleLightbox('.gallery a');
  scroll();
}






