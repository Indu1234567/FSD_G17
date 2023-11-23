function getData(endpoint){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint)
    
        xhr.onreadystatechange = function(){
            if(this.readyState === 4){
                if(this.status === 200){
                    resolve(JSON.parse(this.responseText))
                }
                else{
                    reject('Something went wrong')
                }
            }
        }
        
        xhr.send()
    })
}
getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(todos => {
        console.log(todos)
        return getData('https://jsonplaceholder.typicode.com/posts/2')
    })
    .then(posts => {
        console.log(posts)
        return getData('https://jsonplaceholder.typicode.com/comments/3')
    })
    .then(comments => {
        console.log(comments)
    })
    .catch(error => {
        console.log(error)
    })



// getData('https://jsonplaceholder.typicode.com/todos/1', (todos) => {
//     console.log(todos)
//     getData('https://jsonplaceholder.typicode.com/posts/2', (posts) => {
//         console.log(posts)
//         getData('https://jsonplaceholder.typicode.com/comments/3', (comments) => {
//             console.log(comments)
//         })
//     })
// })





