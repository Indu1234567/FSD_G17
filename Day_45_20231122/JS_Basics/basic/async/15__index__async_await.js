const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task completed')
        resolve({name: 'User 1', age: 30})
    }, 1000)
})

// promise
//     .then((user) => {
//         console.log(user)
//     })

async function getUser(){
    const user = await promise
    console.log(user)
}
// getUser()

async function getUserWithFetch(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}
getUserWithFetch()

const getUserArrowFn = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    console.log(1)
}
getUserArrowFn()
console.log(2)

