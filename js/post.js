function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postsContainer = document.getElementById("post-container");
    for (const post of posts) {
        console.log(post)
        const div = document.createElement("div");
        div.classList.add('post')
        div.innerHTML = `
        <h4>user- ${post.id} </h4>
        <h5>title :${post.title}</h5>
        <p>body :${post.body} </p>
        `
        postsContainer.appendChild(div)
    }


}
loadPosts()
