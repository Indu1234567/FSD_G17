let output;

let items = document.querySelectorAll('#my-list li')
// items.style.color = 'red' // this won't work
items.forEach(item => {
    item.style.color = 'red'
})

items.forEach((item, index) => {
    item.style.color = 'red'
    if(index === 1){
        item.remove()
    }
    if(index === 0){
        item.innerText = 'Item One'
    }
})

items[0].style.color = 'green'

let items2 = document.getElementsByClassName('item')
output = items2[0]
output = items2[0].innerHTML
// items2.style.color = 'red' //won't work

itemsArray = Array.from(items2)
itemsArray.forEach(item => {
    item.style.color = 'blue'
})

let paras = document.getElementsByTagName('p')
output = paras
output = paras[0]
output = paras[1]
output = paras[2]
paras[2].innerText = 'Text changed'

console.log(output)


