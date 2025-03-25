import{S as f,a as p,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),d=document.querySelector(".loader");function g(i){return i.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:a,downloads:m})=>`<li class="gallery_item">
      <a class="gallery_img_link" href="${o}">
      <img class="gallery_img"
        src="${t}" 
        alt="${s}" 
        width="360" 
        height="200" /></a>
      <div class="gallery_item_box">
        <ul class="gallery_item_list">
          <li>
            <p>Likes</p>
            ${e}
          </li>
          <li>
            <p>Views</p>
            ${r}
          </li>
          <li>
            <p>Comments</p>
            ${a}
          </li>
          <li>
            <p>Downloads</p>
            ${m}
          </li>
        </ul>
      </div>
    </li>
    `).join("")}const h=new f(".gallery a",{captionsData:"alt",captionDelay:150});function y(){c.innerHTML=""}function l(){d.classList.toggle("visually-hidden")}function b(i){c.innerHTML=i,h.refresh()}async function L(i){return p.get("https://pixabay.com/api/",{params:{key:"49472978-10c322c2b56102295a27a1e47",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}}).then(t=>{if(t.data.total===0)return n.error({message:"Sorry, there are no images matching<br>your search query. Please try again!",position:"topRight"}),l();l(),b(g(t.data.hits))}).catch(t=>(n.error({title:"Oh no!",titleColor:"#fafafb",message:`${t.message}`,position:"topRight",messageColor:"#fafafb"}),l()))}const u=document.querySelector(".form");u.addEventListener("submit",_);function _(i){i.preventDefault();const t=i.target.elements["search-text"],o=t.value.trim();if(!t.value||!o){n.error({title:"Error",message:"Please, enter a valid image name!",position:"topRight"});return}y(),l(),L(o),u.reset()}
//# sourceMappingURL=index.js.map
