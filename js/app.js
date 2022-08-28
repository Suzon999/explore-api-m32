function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display(data))
}

function display(data) {

    const ul = document.getElementById("users-ul");
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
    }
}