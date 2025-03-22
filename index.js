import{S as f,a as p,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(i){const r=document.querySelector(".gallery_list"),s=i.map(({webformatURL:a,largeImageURL:e,tags:t,likes:o,views:c,comments:u,downloads:m})=>`<li class="gallery_item">
      <a class="gallery_img_link" href="${e}">
      <img class="gallery_img" src="${a}" alt="${t}" width="360" height="200" /></a>
      <div class="gallery_item_box">
        <ul class="gallery_item_list">
          <li>
            <p>Likes</p>
            ${o}
          </li>
          <li>
            <p>Views</p>
            ${c}
          </li>
          <li>
            <p>Comments</p>
            ${u}
          </li>
          <li>
            <p>Downloads</p>
            ${m}
          </li>
        </ul>
      </div>
    </li>
    `).join("");r.innerHTML=s,d.refresh()}const d=new f(".gallery_list a",{captionsData:"alt",captionDelay:150});async function h(i){return p.get("https://pixabay.com/api/",{params:{key:"49472978-10c322c2b56102295a27a1e47",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{r.data.total===0&&l.error({message:"Sorry, there are no images matching<br>your search query. Please try again!",position:"topRight"}),g(r.data.hits)}).catch(r=>l.error({title:"Error",titleColor:"#fafafb",message:"Oh no, something gonna wrong!",position:"topRight",messageColor:"#fafafb"}))}const n=document.querySelector(".form"),y=document.querySelector(".gallery_list");n.addEventListener("submit",b);function b(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim().split(" ").join("+");i.target.elements["search-text"].value&&(y.innerHTML='<span class="loader"></span>',setTimeout(()=>{h(r)},1e3),n.reset())}
//# sourceMappingURL=index.js.map
