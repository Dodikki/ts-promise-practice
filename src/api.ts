export async function loadPosts() {
  const response = await fetch("https://json-placeholder.mock.beeceptor.com/posts")
  const data = await response.json()
  return data
}