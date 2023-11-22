// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => console.log(data))

function fetchUser(){
    showLoading()
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => showUser(data.results[0]))
}

fetchUser()

function showUser(user){
    hideLoading()
    document.querySelector('#user').innerHTML = `
        <img src="${user.picture.medium}" alt="">
        <p><strong>Name: </strong>${user.name.title}. ${user.name.first} ${user.name.last}</p>
        <p><strong>Age: </strong>${user.dob.age}</p>
        <p><strong>Gender: </strong>${user.gender}</p>
        <p><strong>Location: </strong>${user.location.city}, ${user.location.country} </p>
    `
}

let button = document.querySelector('button')
button.addEventListener('click', fetchUser)

function showLoading(){
    let p = document.querySelector('#loading')
    p.style.display = 'block'
}

function hideLoading(){
    let p = document.querySelector('#loading')
    p.style.display = 'none'
}
