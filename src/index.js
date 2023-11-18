import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import getRefs from './refs.js';
import createmarkUp from './markup.js'
const refs = getRefs();

const API_KEY = '28537646-cd97be0a16a3b9e5b5e571446';

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
    e.preventDefault();
    const photoToSearch = e.target.elements.searchQuery.value;
    const photosArray = await fetchImages(photoToSearch);
    if (photosArray.hits.length ===0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }
  refs.gallery.insertAdjacentHTML('beforeend', createmarkUp(photosArray));
  var lightbox = new SimpleLightbox('.gallery a');
  scroll();
}





async function fetchImages(queryName) {
const photosArray = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${queryName}&image_type=photo&orientation=horizontal&safesearch=true`);
    const response = await photosArray.json();
    return response;
}



function scroll() {
  const { height: cardHeight } = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 0.2,
    behavior: "smooth",
  });
}

