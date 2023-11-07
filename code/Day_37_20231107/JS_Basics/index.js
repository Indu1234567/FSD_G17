// getting child elements
let output;
const parent = document.querySelector('.parent')
output = parent.children
output = parent.children[0]
output = parent.children[0].innerText
output = parent.children[0].className
output = parent.children[0].nodeName

parent.children[1].innerText = 'Item Two'
parent.children[1].style.color = 'red'

output = parent.firstElementChild
parent.firstElementChild.style.color = 'green'
parent.firstElementChild.innerText = 'Item One'

output = parent.lastElementChild
parent.lastElementChild.style.color = 'blue'
parent.lastElementChild.innerText = 'Item Three'


const child = document.querySelector('.child')
output = child
output = child.parentElement
child.parentElement.style.border = '1px solid black'
child.parentElement.style.padding = '10px'


console.log(output)
// console.dir(output)
