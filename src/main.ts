import { renderPosts } from "./posts"

document.querySelector("#app")!.innerHTML = `
    <ul id="list" style="display: flex; flex-direction: column; gap: 10px; list-style:none"></ul>
  `

renderPosts()