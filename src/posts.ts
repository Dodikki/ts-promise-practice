import { loadPosts } from "./api";
import { type Post } from "./types";

const posts = await loadPosts();

export function renderPosts() {
  posts.forEach((post: Post) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <div style="border: 1px solid black; border-radius: 10px; padding: 10px;">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <span>Link: <a href="${post.link}">Ссылка на пост</a></span>
      </div>
    `
    document.getElementById("list")?.appendChild(li)
  })
}