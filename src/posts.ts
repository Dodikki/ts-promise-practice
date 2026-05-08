import { loadPosts } from "./api";
import { type Post } from "./types";

const posts = await loadPosts();

export function renderPosts() {
  posts.forEach((post: Post) => {
    const li = document.createElement('li')
    li.innerHTML = `
    <div class = "onpost">
      <div class ="posts">
        <div class = "title">${post.title}</div>
        <div class = "description">${post.body}</div>
        <div class = "onbutton">
        <button class ="link" onclick="document.location='${post.link}'">Link on button</button>
        </div>
      </div>
      <div  class = "img"></div>
    </div>
    `
    document.getElementById("list")?.appendChild(li)
  })
}