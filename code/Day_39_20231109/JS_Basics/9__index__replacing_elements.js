function replaceFirstItem(){
    const firstItem = document.querySelector('li:nth-child(1)')
    const newItem = document.createElement('li')
    newItem.textContent = 'Item 1'
    firstItem.replaceWith(newItem)
}
function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)')
    // console.log(secondItem.outerHTML)
    secondItem.outerHTML = '<li>Item 2</li>'
}
function replaceThirdItem(){
    const thirdItem = document.querySelector('li:nth-child(3)')
    // console.log(thirdItem.innerHTML)
    thirdItem.innerHTML = 'Item 3'
}


// replaceFirstItem()
// replaceSecondItem()
// replaceThirdItem()

function replaceAllItems(){
    const items = document.querySelectorAll('li')
    items.forEach((item, index) => {
        console.log(item, index)
        if(index === 0){
            // item.outerHTML = '<li>Important</li>'
            const newItem = document.createElement('li')
            newItem.textContent = 'Item 1'
            item.replaceWith(newItem)
        }
        item.innerHTML = 'Item'
    })
}

replaceAllItems()