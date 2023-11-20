const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({name: 'User 3', age: 30})
        } else {
            reject('Some error happened')
        }
    }, 1000)
})

promise
    .then((user) => {
        console.log(user)
        return(user.name)
    })
    .then((name) => {
        console.log(name)
        return name.length
    })
    .then(length => {
        console.log(length)
    })
    .catch(error => {
        console.log(error)
        return 123
    })
    .then((num) => {
        console.log('This will run no matter what', num)
    })