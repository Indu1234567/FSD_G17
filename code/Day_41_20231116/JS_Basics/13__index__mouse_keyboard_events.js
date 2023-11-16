let img = document.querySelector('img');
// img.addEventListener('click', () => console.log('click'))
// img.addEventListener('dblclick', () => console.log('double click'))
// img.addEventListener('contextmenu', () => console.log('right click'))
// img.addEventListener('mousedown', () => console.log('mousedown'))
// img.addEventListener('mouseup', () => console.log('mouseup'))
// img.addEventListener('wheel', () => console.log('wheel'))
// img.addEventListener('mouseover', () => console.log('mouseover'))
// img.addEventListener('mouseout', () => console.log('mouseout'))
// img.addEventListener('dragstart', () => console.log('dragstart'))
// img.addEventListener('dragend', () => console.log('dragend'))
// img.addEventListener('drag', () => console.log('drag'))

// Event object

function clicked(e){
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.type)
    console.log(e.timeStamp)
    console.log(e.clientX, e.clientY)
    console.log(e.offsetX, e.offsetY)
    console.log(e.pageX, e.pageY)
    console.log(e.screenX, e.screenY)
}

img.addEventListener('click', clicked)

// document.body.addEventListener('click', clicked)

let a = document.querySelector('a')

a.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Link is clicked')
})

let input = document.querySelector('input');
console.log(input)

input.addEventListener('keydown', () => console.log('keydown'))
input.addEventListener('keyup', () => console.log('keyup'))
input.addEventListener('keypress', () => console.log('keypress'))

let input2 = document.querySelector('#input2')
function keyHandler(e){
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.code)

    if(e.key === 'Enter')
        alert('You pressed Enter')
    if(e.code === 'Digit1')
        alert('You pressed 1')
    if(e.repeat)
        console.log('You are holding down ' + e.key)
    console.log(e.shiftKey)
    console.log(e.ctrlKey)
    console.log(e.altKey)
}
input2.addEventListener('keydown', keyHandler)




