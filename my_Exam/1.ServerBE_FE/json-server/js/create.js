document.getElementById("myButton").onclick = function() {
    var title = document.getElementById("title").value;
    //console.log(title);

    var blogBody = document.getElementById("blogBody").value;

    fetch('http://localhost:3000/posts/', {
        method: "POST", // 
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify({ title: title, body: blogBody })
    })

    htmla()
}

function htmla() { document.location.replace("./index.html"); }