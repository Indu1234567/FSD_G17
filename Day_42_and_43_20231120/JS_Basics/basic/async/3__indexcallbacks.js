function toggle(e){
    e.target.classList.toggle('red')
}

document.querySelector('button').addEventListener('click', toggle)

// -----

function normalFunction(cb){
    cb()
}

normalFunction(() => {
    console.log('from callback')
})

// ---

const posts = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'},
]

// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//         console.log('from createPost')
//     }, 2000)
// }

// function getPosts(){
//     setTimeout(() => {
//         posts.forEach(post => {
//             let div = document.querySelector('#posts')
//             let newDiv = document.createElement('div')
//             newDiv.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
//             div.appendChild(newDiv)
//         })
//     }, 1000)
// }

// createPost({title: 'Post 3', body: 'This is post 3'})
// getPosts()

function createPost(post, cb){
    setTimeout(() => {
        posts.push(post)
        cb()
        console.log('from createPost')
    }, 2000)
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

createPost({title: 'Post 3', body: 'This is post 3'}, getPosts)
// getPosts()

/*
HTTP status codes
-------------------
100 range - Continue
200 range - Success
300 range - redirects
400 range - client error
500 range - server error

200 - success
201 - created
204 - no content

301 - resource moved

400 - bad request
401 - unauthorized
403 - forbidden
404 - not found

500 - server error
*/