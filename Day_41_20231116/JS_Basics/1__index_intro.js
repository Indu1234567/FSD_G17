// console.log(window.document)

console.log(document)

console.dir(document)

console.log(document.head)
console.log(document.body)
let output = document.body.innerHTML
output = document.head.innerHTML
output = document.body.innerText
output = document.links
output = document.links[0]
output = document.body.innerHTML
// document.body.innerHTML = '<p>This is the new content</p>'
document.write('Hello from JS')//Not very useful

let main = document.getElementById('main')
main.innerHTML = '<p>This is new content</p>'
output = document.querySelector('#main')
document.querySelector('#main p').innerText = 'New text'

// tags - tag name
// id - #
// class - .

console.log(output)