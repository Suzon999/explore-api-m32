function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display(data))
}

function display(data) {
    console.log(data);
}