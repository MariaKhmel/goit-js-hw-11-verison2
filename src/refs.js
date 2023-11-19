export default function getRefs() {
    return {
        form: document.querySelector('.search-form'),
        buttonSubmit: document.querySelector('button[type="submit"]'),
        gallery: document.querySelector('.gallery'),
        loadMoreButton: document.querySelector('.loadmore-button'),
        input: document.querySelector('input[name="searchQuery"]')
   }
    
}



