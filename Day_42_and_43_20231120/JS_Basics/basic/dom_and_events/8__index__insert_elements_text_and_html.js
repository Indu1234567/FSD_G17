// Insert elements, text and html
// ----------------------------------
// insertAdjacentElement
// insertAdjacentText
// insertAdjacentHTML
// insertBefore

/*
<!--beforeBegin-->
<p>
<!--afterBegin-->
    some text
<!--beforeEnd-->
</p>
<!--afterEnd-->
*/

function insertElement(){
    const div = document.querySelector('.container')
    const p = document.createElement('p');
    p.textContent = 'A para'
    // div.insertAdjacentElement('beforeBegin', p)
    // div.insertAdjacentElement('afterBegin', p)
    // div.insertAdjacentElement('beforeEnd', p)
    div.insertAdjacentElement('afterEnd', p)
}

function insertText(){
    const div = document.querySelector('.container')
    // div.insertAdjacentText('beforeBegin', 'Newly added')
    // div.insertAdjacentText('afterBegin', 'Newly added')
    // div.insertAdjacentText('beforeEnd', 'Newly added')
    div.insertAdjacentText('afterEnd', 'Newly added')
}

function insertHTML(){
    const div = document.querySelector('.container')
    // div.insertAdjacentHTML('beforeBegin', '<h3>This is h3</h3>')
    // div.insertAdjacentHTML('afterBegin', '<h3>This is h3</h3>')
    // div.insertAdjacentHTML('beforeEnd', '<h3>This is h3</h3>')
    div.insertAdjacentHTML('afterEnd', '<h3>This is h3</h3>')
}

function insertBeforeItem(){
    const ul = document.querySelector('.list')
    const secondItem = document.querySelector('li:nth-child(2)')
    const newItem = document.createElement('li')
    newItem.textContent = 'New item'
    ul.insertBefore(newItem, secondItem)
}

// insertElement()
// insertText()
// insertHTML()
// insertBeforeItem()

function insertAfter(newElement, existingElement){
    const parent = existingElement.parentElement
    const siblingElement = existingElement.nextSibling
    parent.insertBefore(newItem, siblingElement)
}

const newItem = document.createElement('li')
newItem.textContent = 'new'

const existingElement = document.querySelector('li:nth-child(2)')

insertAfter(newItem, existingElement)

// 1
// 2
// 3

