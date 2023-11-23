window.addEventListener('load', () => {
    console.log('page loaded')
})

window.addEventListener('resize', () => {
    let h2 = document.querySelector('h2')
    h2.innerText = `${window.innerWidth} X ${window.innerHeight}`
})

window.addEventListener('scroll', () => {
    let h3 = document.querySelector('h3')
    h3.innerText = `${window.scrollX} X ${window.scrollY}`
    // console.log(window.scrollY)
    if(window.scrollY > 60){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
})
window.addEventListener('focus', () => {
    // if(document.body.style.backgroundColor == 'white'){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    // }
})


window.addEventListener('blur', () => {
    // if(document.body.style.backgroundColor == 'white'){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    // }
})

