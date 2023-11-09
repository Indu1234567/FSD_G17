let output;

// getting child
const parent = document.querySelector('.parent')
output = parent
output = parent.childNodes
output = parent.childNodes[0].nodeName
output = parent.childNodes[1].nodeName
output = parent.childNodes[2].nodeName
output = parent.childNodes[3].nodeName
parent.childNodes[3].innerText = 'Item One'
parent.childNodes[3].style.color = 'red'
output = parent.childNodes[3].outerHTML
// parent.childNodes.forEach(element => {
//     console.log(element)
// });
output = parent.firstChild
// parent.firstChild.textContent = 'New text'

output = parent.lastChild
// parent.lastChild.textContent = 'New text 2'

// getting parent
const child = document.querySelector('.child')
output = child.parentNode
child.parentNode.style.borderColor = 'red'
child.parentNode.style.boderWidth = '1px'
child.parentNode.style.borderStyle = 'solid'
child.parentNode.style.backgroundColor = '#ccc'
child.parentNode.style.padding = '10px'

// getting siblings
const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem
output = secondItem.nextSibling
// secondItem.nextSibling.textContent = 'New text'
output = secondItem.previousSibling
// secondItem.previousSibling.textContent = 'New text 2'


console.log(output)