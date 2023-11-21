let text = document.querySelector('#text')
let select = document.querySelector('#select')
let checkbox = document.querySelector('#checkbox')
let h2 = document.querySelector('h2')
// console.log(text, select, checkbox)

function textInput(e){
    // console.log('text input event')
    console.log(e.target.value)
    h2.innerText = e.target.value
}
text.addEventListener('input', textInput)

function selectEventHandler(e){
    // console.log('selected')
    console.log(e.target.value)
    h2.innerText = e.target.value
}
select.addEventListener('change', selectEventHandler)

function checkboxEventHandler(e){
    // console.log('checkbox event')
    let isChecked = e.target.checked
    console.log(isChecked)
}
checkbox.addEventListener('input', checkboxEventHandler)

// text.addEventListener('keydown', (e) => {console.log(e.target.value)})

let form = document.querySelector('#my-form')

function formSubmissionHandler(e){
    e.preventDefault()
    let name = text.value
    let numberOfPets = select.value
    let haveDog = checkbox.checked
    console.log('Name: ' + name)
    console.log('Number of pets: ' + numberOfPets)
    console.log('Name: ' + haveDog)
    if(name === '' || numberOfPets === 0 | !haveDog )
        return
    console.log('form submitted')
}

function formSubmissionHandler2(e){
    e.preventDefault()
    console.log(form)
    const formData = new FormData(form)
    // console.log(formData)
    console.log(formData.get('text'))
    console.log(formData.get('select'))
    console.log(formData.get('checkbox'))
    let formEntries = formData.entries()
    for(let entry of formEntries){
        console.log(entry[0], entry[1])
    }
}
form.addEventListener('submit', formSubmissionHandler2)
