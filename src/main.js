import { makeSearch } from "./js/pixabay-api";
import { clearGallery, toggleLoader } from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const searchInput = evt.target.elements['search-text'];

    if (!searchInput.value) {
        return iziToast.error({
                    title: 'Error',
                    message: 'Please, enter a valid image name!',
                    position: 'topRight',
                });
    }
    
    clearGallery();
    toggleLoader();
    const search = searchInput.value.trim().split(" ").join("+");
    makeSearch(search); 
    form.reset();
};