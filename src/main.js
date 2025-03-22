import { makeSearch } from "./js/pixabay-api";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery_list');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const search = evt.target.elements['search-text'].value.trim().split(" ").join("+");

    if (!evt.target.elements['search-text'].value) {
        return;
    }
    gallery.innerHTML = '<span class="loader"></span>';

    setTimeout(() => {
        makeSearch(search)
    }, 1000); // throttle to see icecream :)

    // makeSearch(search); // no throttle :)

    form.reset();
};
