// Write your code here!
const postList = document.getElementById("post-list");

function displayPosts(posts) {
posts.forEach((post) => {
const li = document.createElement("li");

const h1 = document.createElement("h1");
h1.textContent = post.title;

const p = document.createElement("p");
p.textContent = post.body;

li.append(h1, p);
postList.append(li);
});
}

async function fetchPosts() {
const response = await fetch(
"https://jsonplaceholder.typicode.com/posts"
);

const posts = await response.json();

displayPosts(posts);
}

fetchPosts();