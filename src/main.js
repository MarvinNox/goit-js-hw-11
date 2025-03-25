import { makeSearch } from "./js/pixabay-api";
import { clearGallery, toggleLoader } from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const searchInput = evt.target.elements['search-text'];
    const search = searchInput.value.trim();

    if (!searchInput.value || !search) {
        iziToast.error({
            title: 'Error',
            message: 'Please, enter a valid image name!',
            position: 'topRight',
        })
        return;
    }
    clearGallery();
    toggleLoader();
    makeSearch(search);
    form.reset();
};