let output

const div = document.createElement('div')
div.id = 'my-div'
div.className = 'my-div-class'
// div.innerText = 'Hello World'
const text = document.createTextNode('Hello World 2')
div.appendChild(text)
div.setAttribute('title', 'My new div')
// document.body.append(div)
const parent = document.querySelector('.parent')
parent.appendChild(div)

// ---------------------------

const ul = document.createElement('ul')
ul.className = 'list'
const li1 = document.createElement('li')
li1.className = 'item'
let text1 = document.createTextNode('1')
li1.appendChild(text1)
const li2 = document.createElement('li')
li2.className = 'item'
text1 = document.createTextNode('2')
li2.appendChild(text1)
const li3 = document.createElement('li')
li3.className = 'item'
text1 = document.createTextNode('3')
li3.appendChild(text1)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

// let containerDiv = document.querySelector('.list-container')
// containerDiv.appendChild(ul)

document.body.appendChild(ul)


function addItem(itemText){
    const li = document.createElement('li')
    li.className = 'item'
    let text = document.createTextNode(itemText)
    li.appendChild(text)
    const button = document.createElement('button')
    button.innerText = 'Delete'
    li.appendChild(button)
    ul.appendChild(li)
}

function addItem2(itemText){
    const li = `<li>${itemText}</li>`
    ul.appendChild(li)
}

addItem('Apple')
addItem('Orange')
addItem('Book')
// addItem2('New Item')


output = ul





console.log(output)

