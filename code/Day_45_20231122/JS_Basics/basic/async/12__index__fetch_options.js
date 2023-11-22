function createPost(post){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

createPost({title: 'Post 1', body: 'This is post 1'})


