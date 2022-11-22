const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
const renderDetails = async() => {
    fetch('http://localhost:3000/posts/' + id, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })


    .then(res => {
            if (res.ok) { console.log("DELETE request successful") } else { console.log("DELETE request unsuccessful") }
            return res
        })
        .then(res => console.log(res))
        .then(res => document.location.replace("./index.html"))
}

window.addEventListener('DOMContentLoaded', () => renderDetails());