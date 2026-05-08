import { renderPosts } from "./posts";

document.querySelector("#app")!.innerHTML = `
   <ul id="list" class ="list"></ul>
    
  `;

renderPosts();