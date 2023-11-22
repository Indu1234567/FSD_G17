console.log('Before setTimeout code')

setTimeout(() => {
    console.log('Hello from callback')
}, 0)
console.log('After setTimeout code')

// console.log('Hello from global scope')

// setTimeout(() => {
//     document.querySelector('h2').textContent = 'Changed'
// }, 4000);

function changeText(){
    document.querySelector('h2').textContent = 'Changed'
}

let timerId = setTimeout(changeText, 4000);

document.querySelector('button').addEventListener('click', () => {
    console.log(timerId)
    clearTimeout(timerId)
    console.log('Timer cancelled')
})
