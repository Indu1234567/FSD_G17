function getData(endpoint, cb){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint)

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            cb(JSON.parse(this.responseText))
        }
    }
    
    xhr.send()
    
}

getData('https://jsonplaceholder.typicode.com/todos/1', (todos) => {
    console.log(todos)
    getData('https://jsonplaceholder.typicode.com/posts/2', (posts) => {
        console.log(posts)
        getData('https://jsonplaceholder.typicode.com/comments/3', (comments) => {
            console.log(comments)
        })
    })
})





