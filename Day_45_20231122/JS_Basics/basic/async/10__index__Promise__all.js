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

function addDataToDOM(data){
    const div = document.createElement('div')
    div.innerText = data.id
    document.body.appendChild(div)
}

const todosPromise = getData('https://jsonplaceholder.typicode.com/todos/1')
const postsPromise = getData('https://jsonplaceholder.typicode.com/posts/2')
const commentsPromise = getData('https://jsonplaceholder.typicode.com/comments/3')

Promise.all([todosPromise, postsPromise, commentsPromise])
    .then(data => {
        console.log(data)
        data.forEach(d => {
            addDataToDOM(d)
        })
    })
    .catch(error => console.log(error))

