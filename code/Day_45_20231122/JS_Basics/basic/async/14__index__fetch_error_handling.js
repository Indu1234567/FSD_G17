fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        if(!res.ok){
            throw new Error('Request failed')
        }
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log('Success')
        console.log(data)
    })
    .catch(e => {
        console.log(e)
    })