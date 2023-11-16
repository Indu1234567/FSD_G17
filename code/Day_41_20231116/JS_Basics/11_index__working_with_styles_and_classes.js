const h2 = document.querySelector('h2')
const ul = document.querySelector('ul')
const items = document.querySelectorAll('li')

// className
h2.className = 'red'
ul.className = 'red'
ul.className = 'ul red'

console.log(ul.classList)

ul.classList.add('new-class')

ul.classList.remove('red')

ul.classList.replace('new-class', 'another-class')

// ul.style.color = 'red'

items.forEach((item, index) => {
    if(index == 2)
        item.style.color = 'red'
    else    
        item.style.color = 'green'
})


