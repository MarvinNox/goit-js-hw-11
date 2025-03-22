import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';
import { createMarkup } from './render-functions';

export async function makeSearch(searchWords) {
    return axios.get(`https://pixabay.com/api/`, {
        params: {
            key: '49472978-10c322c2b56102295a27a1e47',
            q: searchWords,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    })
        .then(resp => {
            if (resp.data.total === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching<br>your search query. Please try again!',
                    position: 'topRight',
                })
            }
            
            createMarkup(resp.data.hits);
            
        })
        .catch(error =>
            iziToast.error({
                title: "Error",
                titleColor: '#fafafb',
                message: 'Oh no, something gonna wrong!',
                position: 'topRight',
                messageColor: '#fafafb',
                })
        );
};
