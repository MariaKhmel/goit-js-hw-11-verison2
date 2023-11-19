import getRefs from './refs.js';
import axios from 'axios';

const API_KEY = '28537646-cd97be0a16a3b9e5b5e571446';
const BASE_URL = 'https://pixabay.com/api/';

const refs = getRefs();
const axios = require('axios');


async function fetchImages(queryName, page) {
    try {
        refs.loadMoreButton.setAttribute('hidden', true);
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${queryName}&page=${page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`);

        return response.data;   
    } catch (error){
        console.log(error.message);
    }
    
}



function scroll() {
    try {
        const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();

        window.scrollBy({
            top: cardHeight * 0.2,
            behavior: "smooth",
        });    
    } catch (error) {
        console.log(error);
    }
   
}
export { fetchImages, scroll };


