const API = "http://localhost:5000/api/posts";

async function createPost() {

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;

    const response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            content,
            author
        })
    });

    await response.json();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("author").value = "";

    loadPosts();
}

async function loadPosts() {

    const response = await fetch(API);

    const posts = await response.json();

    document.getElementById("posts").innerHTML =
        posts.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Author: ${post.author}</small>
        </div>
    `).join("");
}

loadPosts();