function myFunc(){
    console.log('Clicked')
}

let btn1 = document.querySelector('#btn1')
console.log(btn1)

// btn1.onclick = myFunc

// btn1.addEventListener('click', myFunc)

btn1.onclick = function(){
    console.log('1')
}
btn1.onclick = function(){
    console.log('2')
}

let btn2 = document.querySelector('#btn1')
btn2.addEventListener('click', function(){
    console.log(3)
})
btn2.addEventListener('click', function(){
    console.log(4)
})
btn2.addEventListener('click', () => {console.log('5')})

let btn3 = document.querySelector('#btn3')
function click3(){
    console.log('33')
}
btn3.addEventListener('click', click3)
setTimeout(function(){
    console.log('inside setTimeout')
    btn3.removeEventListener('click', click3)
}, 5000)



let btn5 = document.querySelector('#btn5')
console.log(btn5)
btn5.addEventListener('click', () => {console.log('Btn 5 got clicked')})
setTimeout(function(){
    btn5.click();
}, 6000)

let ul = document.querySelector('ul')
let items = document.querySelectorAll('li')
let clearButton = document.querySelector('#clear')

function clearItems(){
    // ul.innerHTML = ''//1
    // items.forEach((item) => {
    //     console.log(item)
    //     item.remove()
    // })
    while(ul.firstChild){
        console.log(ul.firstChild)
        ul.removeChild(ul.firstChild)
    }
    // while(ul.firstElementChild){
    //     console.log(ul.firstElementChild)
    //     ul.removeChild(ul.firstElementChild)
    // }
}
clearButton.addEventListener('click', clearItems)


let btnChangeColor = document.querySelector('#change-color')
let h2 = document.querySelector('h2')
btnChangeColor.addEventListener('click', () => {
    h2.classList.toggle('red')
})


