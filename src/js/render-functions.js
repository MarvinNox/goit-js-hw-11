import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createMarkup(hits) {
    const gallery = document.querySelector('.gallery');

    const markUp = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
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

    gallery.innerHTML = markUp;
    gall.refresh();
};

const gall = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 150,
});
