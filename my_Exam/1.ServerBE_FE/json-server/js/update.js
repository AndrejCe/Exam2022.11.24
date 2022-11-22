const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
const container = document.querySelector('.details');
const renderDetails = async() => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    console.log(post);
    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `

    var element = document.getElementById("title");
    element.innerHTML = post.title;
    var element = document.getElementById("blogBody");
    element.innerHTML = post.body;

    document.getElementById("myButton").onclick = function() {
        var title = document.getElementById("title").value;
        //console.log(title);

        var blogBody = document.getElementById("blogBody").value;

        fetch('http://localhost:3000/posts/' + id, {
            method: "PUT", // // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({ body: blogBody })
        })
        document.location.replace("./index.html")
    }

}
window.addEventListener('DOMContentLoaded', () => renderDetails());