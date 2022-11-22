var url = 'http://localhost:8080/v1/students/list';

document.getElementById('addTodo').addEventListener('click', async() => {
    const input = document.getElementById('todoText');
    const title = input.value;

    if (title) {
        const res = await fetch(url, {
            method: 'POST',
            mode: 'no-cors', // no-cors, *cors, same-origin
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, compleated: false })
        });
        const todo = await res.JSON();
        todoToHTML(todo);
        //console.log(todo);
        input.value = '';
    }
})

//1.receive all data from the server

async function getAllTodos(url = url, data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify("id", "sname", "email", "dob", "age") // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

getAllTodos(url, { answer: 42 })
    .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });



// /////////////////////////////////////////////////
//2. use getAllTodos when  DOMContent loaded 
window.addEventListener('DOMContentLoaded', getAllTodos);

//3.use  function for view on html

function todoToHTML({ id, compleated, title }) {
    const todoList = document.getElementById('todos');
    todoList.insertAdjacentHTML('beforeend', `  
    <div class="form-check" id="todo${id}">
         <label class form-check-label>
              <input onchange=" toggleCompleteTodo(${id})" type="checkbox" class="form-check-input" ${compleated && 'checked'}>
              ${title}
         </label>
         <button onclick="deleteTodo(${id})" type="button" class="btn-close" aria-label="Close" style="font-size: 10px"></button>
    </div>
`);

}

async function deleteTodo(id) {
    const res = await fetch(`http://localhost:8080/v1/students/list/${id}`, {
        method: 'DELETE',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    });

    const data = await res.json();
    console.log(data);

    if (data) {
        document.getElementById(`todo${id}`).remove();
    }
}


async function toggleCompleteTodo(id) {
    const completed = document.querySelector(`#todo${id} input`).checked;

    const res = await fetch(`http://localhost:8080/v1/students/list/${id}`, {
        method: 'PATH',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed })
    })
    const data = await res.json;
    console.log(data);
}