// My first JS statement
/*
    This 
    is inline
*/
console.log('Hello World')

// Variables
// -----------------
var a = 'abc';
console.log(a)
let b = 'def'//Newer ways
console.log(b)

// Declaration
let c;
console.log(c)//undefined

// Initialization
let d = 'aaa'

let firstName = 'John'
let FirstName = 'John'
// let 1test = '11'  ---
// space '-' ---
// _ is okay
// Camelcase notation - eg: firstName

// Constansts
// -------------------
let aa = 'value 1'
aa = 'value 2'

const bb = 'Value 1'
// bb = 'Value 2'  
console.log(bb)

// Primitive values
// -------------------
// string, number, boolean, undefined, null, Symbol
let name = 'John'
console.log(name)
let age = 30
console.log(age)
let isApproved = true; //false
console.log(isApproved)
let address;
console.log(address)
age = null
console.log(age)

// Dynamically typed - JS
// Statically typed - C++, Java, ...

// Referece Types
// -------------------
// Object, array and function
// 1)Object
let person = {
    name: 'John',
    age: 30
}
console.log(person)
// 1) Dot notation
console.log(person.name)
console.log(person.age)
person.age = 31;
console.log(person)

// 2) Bracket notation
console.log(person['name'])
console.log(person['age'])
person['age'] = 32
console.log(person)

let propertyName = 'name'
console.log(person[propertyName])

// 2) Array
let arr = [ 10, 20, 30 ]
arr = ['John', 30]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
arr[1] = 31
console.log(arr)
arr[2] = 'Developer'
console.log(arr)
console.log(typeof(arr))
console.log(arr.length)

// 3) Function
//Declaration
function greet(){
    console.log('Hello World')
}
//Fn call
greet();
greet();
greet();

function greet2(name){
    console.log('Hello ' + name)
}
greet2('John')

function greet3(name, lastName){//Parameters
    console.log('Hello ' + name + ' ' + lastName)
}
greet3('John','Smith')//Arguments



