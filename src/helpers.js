const API_KEY = '28537646-cd97be0a16a3b9e5b5e571446';
const BASE_URL = 'https://pixabay.com/api/'
c

async function fetchImages(queryName) {
    const photosArray = await fetch(`${BASE_URL}?key=${API_KEY}&q=${queryName}&image_type=photo&orientation=horizontal&safesearch=true`);
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
export { fetchImages, scroll };


