import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector('.gallery');
export const loader = document.querySelector('.loader');

export function createMarkup(hits) {
    return hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery_item">
      <a class="gallery_img_link" href="${largeImageURL}">
      <img class="gallery_img" src="${webformatURL}" alt="${tags}" width="360" height="200" /></a>
      <div class="gallery_item_box">
        <ul class="gallery_item_list">
          <li>
            <p>Likes</p>
            ${likes}
          </li>
          <li>
            <p>Views</p>
            ${views}
          </li>
          <li>
            <p>Comments</p>
            ${comments}
          </li>
          <li>
            <p>Downloads</p>
            ${downloads}
          </li>
        </ul>
      </div>
    </li>
    `).join("");
};

const modal = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 150,
});

export function clearGallery() {
  gallery.innerHTML = '';
};

function hideLoader() {
  loader.style.display = 'none';
}

export function showLoader() {
    loader.style.display = 'block';
};

export function renderGallery(markUp) {
  gallery.innerHTML = markUp;
  modal.refresh();
  hideLoader();
};