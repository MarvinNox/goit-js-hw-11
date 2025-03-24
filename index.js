import{S as m,a as p,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function d(o){return o.map(({webformatURL:t,largeImageURL:i,tags:s,likes:e,views:r,comments:a,downloads:f})=>`<li class="gallery_item">
      <a class="gallery_img_link" href="${i}">
      <img class="gallery_img" src="${t}" alt="${s}" width="360" height="200" /></a>
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
            ${f}
          </li>
        </ul>
      </div>
    </li>
    `).join("")}const g=new m(".gallery a",{captionsData:"alt",captionDelay:150});function y(){n.innerHTML=""}function h(){c.style.display="none"}function b(){c.style.display="block"}function L(o){n.innerHTML=o,g.refresh(),h()}async function S(o){return p.get("https://pixabay.com/api/",{params:{key:"49472978-10c322c2b56102295a27a1e47",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{t.data.total===0&&l.error({message:"Sorry, there are no images matching<br>your search query. Please try again!",position:"topRight"}),L(d(t.data.hits))}).catch(t=>l.error({title:"Oh no!",titleColor:"#fafafb",message:`${t.message}`,position:"topRight",messageColor:"#fafafb"}))}const u=document.querySelector(".form");u.addEventListener("submit",_);function _(o){o.preventDefault();const t=o.target.elements["search-text"];if(!t.value)return l.error({title:"Error",message:"Please, enter a valid image name!",position:"topRight"});y(),b();const i=t.value.trim().split(" ").join("+");S(i),u.reset()}
//# sourceMappingURL=index.js.map
