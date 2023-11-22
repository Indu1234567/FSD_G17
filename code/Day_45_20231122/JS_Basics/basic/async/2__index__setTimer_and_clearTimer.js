// function myCallback(){
//     console.log(Date.now())
// }

// const intervalId = setInterval(myCallback, 1000)

function stopChange(){
    clearInterval(intervalId)
    // console.log('Clicked')
}

let button = document.querySelector('button')
button.addEventListener('click', stopChange)

function changeColor(){
    if(document.body.style.backgroundColor !== 'black'){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}

function stopColorChange(){
    clearInterval(intervalId)
}

let startColorChangeBtn = document.querySelector('#startcolorchange')
let stopColorChangeBtn = document.querySelector('#stopcolorchange')

let intervalId;
startColorChangeBtn.addEventListener('click', () => {
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
    }
})

stopColorChangeBtn.addEventListener('click', stopColorChange)
