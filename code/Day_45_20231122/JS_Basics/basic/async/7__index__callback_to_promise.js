const posts = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'},
]

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            if(!error){
                posts.push(post)
                resolve()
            }
            else{
                reject('Something went wrong')
            }
        }, 2000)
    })
}

function getPosts(){
    setTimeout(() => {
        posts.forEach(post => {
            let div = document.querySelector('#posts')
            let newDiv = document.createElement('div')
            newDiv.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
            div.appendChild(newDiv)
        })
    }, 1000)
}

function showError(error){
    const h3 = document.createElement('h3')
    h3.textContent = error
    document.body.appendChild(h3)
}

createPost({title: 'Post 3', body: 'This is post 3'})
    .then(getPosts)
    .catch(showError)

