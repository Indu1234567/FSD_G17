const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task completed')
        resolve()
    }, 1000)
})

promise.then(() => {
    console.log('Promise consumed')
})

// --------

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 completed')
        resolve()
    }, 1000)
}).then(() => {
    console.log('Promise 2 consumed')
})

// --------

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 3 completed')
        resolve({name: 'User 1', age: 30})
    }, 1000)
}).then((user) => {
    console.log('Promise 3 consumed', user)
})

// --------

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            console.log('Async task 4 completed')
            resolve({name: 'User 1', age: 30})
        } else {
            reject('Some error happened')
        }
    }, 1000)
}).then((user) => {
    console.log('Promise 4 consumed', user)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('The process has resolved or rejected')
})

const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            console.log('Async task 5 completed')
            resolve({name: 'User 3', age: 30})
        } else {
            reject('Some error happened 5')
        }
    }, 1000)
})

getUser
    .then(user => console.log('Promise 5 consumed', user))
    .catch(error => console.log(error))
    .finally(() => console.log('The process has resolved or rejected 5'))
    

