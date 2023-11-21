let div = document.querySelector('div')
let button = document.querySelector('button')

div.addEventListener('click', () => {
    console.log('div is clicked')
})

button.addEventListener('click', (e) => {
    console.log('button is clicked')
    e.stopPropagation()
})

// document.body.addEventListener('click', () => {
//     console.log('body is clicked')
// })

// Event delegation
// let lis = document.querySelectorAll('li')
// lis.forEach(li => {
//     li.addEventListener('click', (e) => {
//         e.target.style.color = 'red'
//     })
// });

let ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI')
        e.target.style.color = 'red'
})


