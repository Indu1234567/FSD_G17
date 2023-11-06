// Document element properties

let output;

output = document.all;
output = document.all[0]
output = document.all.length

output = document.documentElement
output = document.head
output = document.body
output = document.head.children
output = document.body.children
output = document.doctype
output = document.contentType
output = document.URL

output = document.forms
output = document.forms[0]
output = document.forms[0].id
document.forms[0].id = 'new-id'
output = document.forms[0].method
output = document.forms[0].action

output = document.links
output = document.links[0]
output = document.links[0].href
document.links[0].innerText = 'My Link'
document.links[0].id = 'an-id'

output = document.images
output = document.images[0]
document.images[0].id = 'an-img'
output = document.images[0].src

output = document.forms
// output.forEach(form => {
//     console.log(form)
// }) //This won't work
let forms = Array.from(output)
forms.forEach(form => {
    console.log(form)
})

console.log(output)

