const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

// https://jsonplaceholder.typicode.com/todos?_limit=100 - fetching todo
// https://jsonplaceholder.typicode.com/todos - POST - creating todo
// https://jsonplaceholder.typicode.com/todos/1 - PUT - Editing todo (mark it as completed or edit text)
// https://jsonplaceholder.typicode.com/todos/1 - DELETE - Deleting todo

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(res => res.json())
        .then(data => {
            data.forEach(todo => {
                addTodoToDOM(todo)
            });
        })
}

const addTodoToDOM = (todo) => {
    let div = document.querySelector('#todos')
    
    let newDiv = document.createElement('div')
    newDiv.innerText = todo.title
    newDiv.classList.add('todo')
    newDiv.setAttribute('data-id', todo.id)
    if(todo.completed){
        newDiv.classList.add('done')
    }

    div.appendChild(newDiv)
}

const createTodo = (e) => {
    e.preventDefault()
    
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            addTodoToDOM(data)
        })
}

const updateTodo = (e) => {
    if(e.target.classList.contains('todo')){
        let id = e.target.dataset.id
        let completedStatus = e.target.classList.contains('done')

        fetch(apiUrl + '/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                completed: completedStatus
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                e.target.classList.toggle('done')
            })
    }
}

const deleteTodo = (e) => {
    if(e.target.classList.contains('todo')){
        let id = e.target.dataset.id

        fetch(apiUrl + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                e.target.remove()
            })
    }
}

const init = () => {
    getTodos()
    let form = document.querySelector('form')
    form.addEventListener('submit', createTodo)
    document.querySelector('#todos').addEventListener('click', updateTodo)
    document.querySelector('#todos').addEventListener('dblclick', deleteTodo)
}

init()

