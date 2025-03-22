import { makeSearch } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    if (!evt.target.elements['search-text'].value) {
        return iziToast.error({
                    title: 'Error',
                    message: 'Please, enter a valid image name!',
                    position: 'topRight',
                });
    }
    gallery.innerHTML = '';
    const search = evt.target.elements['search-text'].value.trim().split(" ").join("+");
    loader.style.display = 'block';

    setTimeout(() => {
        makeSearch(search)
    }, 1000); // throttle to see icecream :)

    // makeSearch(search); // no throttle :)

    form.reset();
};