const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')

/*
    0 - request not initialize
    1 - server connection establish
    2 - request received
    3 - processing request
    4 - request finished and response is ready
*/

xhr.onreadystatechange = function(){
    console.log(this.readyState)
    console.log(this.status)
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText)
        data.forEach(todo => {
            const li = document.createElement('li')
            li.innerHTML = `${todo.id}) ${todo.title}`
            if(todo.completed){
                li.className = 'done'
            }
            const ul = document.querySelector('ul')
            ul.appendChild(li)
        });
    }
}

xhr.send()


