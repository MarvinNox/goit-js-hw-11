import{S as m,a as p,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function d(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:a,downloads:f})=>`<li class="gallery_item">
      <a class="gallery_img_link" href="${i}">
      <img class="gallery_img" src="${r}" alt="${s}" width="360" height="200" /></a>
      <div class="gallery_item_box">
        <ul class="gallery_item_list">
          <li>
            <p>Likes</p>
            ${e}
          </li>
          <li>
            <p>Views</p>
            ${t}
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
    `).join("")}const g=new m(".gallery a",{captionsData:"alt",captionDelay:150});function y(){l.innerHTML=""}function h(){c.style.display="none"}function b(){c.style.display="block"}function L(o){l.innerHTML=o,g.refresh(),h()}async function S(o){return p.get("https://pixabay.com/api/",{params:{key:"49472978-10c322c2b56102295a27a1e47",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{r.data.total===0&&n.error({message:"Sorry, there are no images matching<br>your search query. Please try again!",position:"topRight"}),L(d(r.data.hits))}).catch(r=>n.error({title:"Error",titleColor:"#fafafb",message:"Oh no, something gonna wrong!",position:"topRight",messageColor:"#fafafb"}))}const u=document.querySelector(".form");u.addEventListener("submit",_);function _(o){o.preventDefault();const r=o.target.elements["search-text"];if(!r.value)return n.error({title:"Error",message:"Please, enter a valid image name!",position:"topRight"});y(),b();const i=r.value.trim().split(" ").join("+");S(i),u.reset()}
//# sourceMappingURL=index.js.map
