const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");

async function showPosts() {
  const res = await fetch("https://localhost:8000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();
  output.innerHTML = "";

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.textContent = post.title;
    output.appendChild(postEl);
  });
}
