import { loadPosts } from "./api";
import { type Post } from "./types";

const posts = await loadPosts();

export function renderPosts() {
  posts.forEach((post: Post) => {
    const li = document.createElement("li")

    const onpost = document.createElement("div")
    onpost.classList.add("onpost")

    const posts = document.createElement("div")
    posts.classList.add("posts")

    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = post.title

    const description = document.createElement("div")
    description.classList.add("description")
    description.textContent = post.body

    const onbutton = document.createElement("div")
    onbutton.classList.add("onbutton")

    const button = document.createElement("button")
    button.classList.add("link")
    button.textContent = "Link on button"
    button.addEventListener("click", () => {
      document.location.href = post.link
    })

    const img = document.createElement("div")
    img.classList.add("img")

    onbutton.appendChild(button)
    posts.append(title, description, onbutton)
    onpost.append(posts, img)
    li.appendChild(onpost)

    document.getElementById("list")?.appendChild(li)
  })
}