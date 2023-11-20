let output

output = document.getElementById('main')
output = document.getElementById('main').className
output = document.getElementById('main').id

let main = document.getElementById('main')
output = main.getAttribute('id')
output = main.getAttribute('class')
output = main.getAttribute('title')
main.setAttribute('title', 'Updated Title')
main.setAttribute('class', 'new-class')

// Changing content
main.innerHTML = '<span>This is a span</span><p>Para inside main</p>'
document.getElementById('heading').innerHTML = 'New Heading'
document.getElementById('heading').innerText = 'New Heading'
console.log(main.innerHTML)
console.log(main.innerText)

// Changing style
let heading = document.getElementById('heading');
heading.style.color = 'red'
heading.style.backgroundColor = '#ccc'
heading.style.padding = '10px'
heading.style.borderRadius = '10px'

let para = document.querySelector('#para')
para = document.body.querySelector('div p')
output = para
output = document.querySelector('.my-link')
output = document.querySelector('li:nth-child(2)')
document.querySelector('input[type="password"]').style.color = 'red'
document.querySelector('input[type="text"]').style.color = 'green'

let list = document.querySelector('#my-list');
list.querySelector('li:nth-child(3)').style.color = 'brown'
document.querySelector('li:nth-child(3)').style.color = 'green'

console.log(output)
