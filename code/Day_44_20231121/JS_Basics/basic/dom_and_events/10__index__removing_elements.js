// Removing elements
// remove and removeChild

function removeElement(){
    const item = document.querySelector('li:nth-child(2)')
    item.remove()
}

function removeElement2(){
    const ul = document.querySelector('ul')
    const item = document.querySelector('li:nth-child(1)')
    ul.removeChild(item)
}

function removeElement3(itemNumber){
    const ul = document.querySelector('ul')
    const item = document.querySelector(`li:nth-child(${itemNumber})`)
    ul.removeChild(item)
}

function removeElement4(itemNumber){
    const ul = document.querySelector('ul')
    const items = document.querySelectorAll('li')
    items[itemNumber - 1].remove()
}

const removeElement5 = itemNumber => document.querySelectorAll('li')[itemNumber - 1].remove()

// removeElement()
// removeElement2()
// removeElement3(3)
// removeElement4(3)
removeElement5(3)
