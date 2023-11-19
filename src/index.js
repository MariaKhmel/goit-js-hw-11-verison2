import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import getRefs from './refs.js';
import createmarkUp from './markup.js';
import { fetchImages, scroll } from './helpers.js';

const refs = getRefs();
let lightbox;
let page = 1;
let photoToSearch = '';
let photosArray = [];

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreButton.addEventListener('click', onLoadMore)

async function onFormSubmit(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
 
  page = 1;
   photoToSearch = e.target.elements.searchQuery.value;
  photosArray = await fetchImages(photoToSearch, page);
  refs.input.value = '';
    if (photosArray.hits.length ===0) {
       return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }
  refs.loadMoreButton.removeAttribute('hidden');
  
  refs.gallery.insertAdjacentHTML('beforeend', createmarkUp(photosArray));
  lightbox = new SimpleLightbox('.gallery a');
  scroll();
  Notiflix.Notify.success(`Hooray! We found ${photosArray.totalHits} images.`);
  
}


async function onLoadMore() {
  console.log(photoToSearch);
  console.log(refs.input.value);
  if (page === photosArray.totalHits) {
    refs.loadMoreButton.setAttribute('hidden', true);
    return Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
  }
  page += 1;
  lightbox.refresh();
  photosArray = await fetchImages(photoToSearch, page);
  refs.gallery.insertAdjacentHTML('beforeend', createmarkUp(photosArray));
  refs.loadMoreButton.removeAttribute('hidden');
  console.log(photosArray.totalHits);
}





