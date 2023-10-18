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

// Constants
// -------------------
let aa = 'value 1'
aa = 'value 2'

const bb = 'Value 1'
// bb = 'Value 2'  
console.log(bb)

// Primitive values
// -----------------------------
// -----------------------------
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
// -----------------------------
// -----------------------------
// Object, array and function
// 1)Object
// -----------------------------
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
// -----------------------------
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
// -----------------------------
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

// 2 type
// 1 - Performing a task
// 2 - Calculating a value

function square(number){
    return number * number;
}

let result = square(2);
console.log(result)

console.log(square(3));

// Operators
// -----------------------------
// -----------------------------
// Operators + some variables/constants -> Expresssions -> logic/algorithm
// Operator, operand, operation

// Arithmetic operators
// -----------------------------
let num1 = 3; //-> (7*2) + 1
let num2 = 3;
result = num1 + num2;
console.log('num1 + num2 =', result)
result = num1 - num2;
console.log('num1 - num2 =', result)
result = num1 * num2;
console.log('num1 * num2 =', result)
result = num1 / num2;
console.log('num1 / num2 =', result)
result = num1 % num2;
console.log('num1 % num2 =', result)
result = num1 ** num2;
console.log('num1 ** num2 =', result)

num1 = 1;
num1++;//Increment -- Post-increment
console.log('After post-incrementing:', num1)

num1 = 1;
++num1//Pre-increment
console.log('After pre-incrementing:', num1)


num2 = 2
num2--//Decrement -- Post-decrement
console.log('After post-decrementing:', num2)

num2 = 2
--num2//Pre-decrement
console.log('After pre-decrementing:', num2)

num1 = 1
console.log(num1++)
console.log(num1)
num1 = 1
console.log(++num1)
console.log(num1)

num2 = 2
console.log(num2--)
console.log(num2)
num2 = 2
console.log(--num2)
console.log(num2)

// Assignment operators
// -----------------------------
let x = 10;

// x++
// x = x + 1

// x = x + 5
x += 5

// x += 10 ---> x = x + 10
// x -= 10 ---> x = x - 10
// x *= 10 ---> x = x * 10
console.log(x)

// Relational operators
// -----------------------------
num1 = 10;
num2 = 20;

console.log(num1 < num2); 
console.log(num1 > num2);
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

// Equality
// 1) ==  -- lose equality operator   -- value
// 2) === -- strict equality operator -- value + type

num1 = 10;
num2 = '10';
console.log(num1 == num2) //not checking the type
console.log(num1 === num2)//checks the type also

// Logical operators
// -----------------------------
// &&, ||, !   ---> AND, OR, NOT

let a1 = 3
let a2 = 2

let b1 = 10
let b2 = 20

console.log((a1 < a2) && (b1 < b2))
//  T && T -> T
//  T && F -> F
//  F && T -> F
//  F && F -> F

console.log((a1 < a2) || (b1 < b2))
//  T || T -> T
//  T || F -> T
//  F || T -> T
//  F || F -> F

result = (a1 < a2) || (b1 < b2);
console.log(result) //T
//  ! T -> F
//  ! F -> T
console.log(!result) //F

// Bitwise operators
// 99 - Decimal number -> 0 to 9
// binary - 0, 1
// 1     - 0000 0001
// 2     - 0000 0010
// 1 & 2 - 0000 0000  -> 0
console.log(1 & 2)//Bitwise AND operator

// 1     - 0000 0001
// 2     - 0000 0010
// 1 | 2 - 0000 0011  -> 3
console.log( 1 | 2)//Bitwise OR operator

// Operator precedence
x = (2 + 3) * 4;
console.log(x);

// || &&
console.log(false || 'abc');//abc
console.log(true || 'abc');//true
console.log(false && 'abc');//false
console.log(true && 'abc');//abc

// Falsy values
// 1. undefined
// 2. null
// 3. 0
// 4. false
// 5. ''
// 6. Nan

//Short circuiting
// || - looks for T
// && - stops at F

let defaultColor = "black"
let userInput;
let finalColor = userInput || defaultColor;
console.log(finalColor)//defaultcolor - black

defaultColor = "black"
userInput = "green"
finalColor = userInput || defaultColor;
console.log(finalColor)//userInput - green

// Ternary operator - condition ? exp1 : exp2
// ---------------------------
userInput = '';
finalColor = userInput == '' ? defaultColor : userInput;
console.log(finalColor);//black

userInput = 'green';
finalColor = userInput == '' ? defaultColor : userInput;
console.log(finalColor);//green

// ---------------------------
// Control flow
// ---------------------------
// Conditional statements
// ---------------------------
// 1. if else
// 2. switch case

// if else
// ---------------------------
/*
    hour
    6am  - 12pm -- GM
    12pm - 6pm  -- GA
    -- GE

    if(condition){
        statements -- block of code
    }
*/

let hour = 20;
if((hour > 6) && (hour < 12)){
    console.log('Good morning');
}
if((hour >=12 ) && (hour < 18)){
    console.log('Good afternoon');
}
if(hour >=18){
    console.log('Good evening');
}
// ----------

if((hour > 6) && (hour < 12)){
    console.log('Good morning');
}
else {
    console.log('Not GM')
}
// ----------
if((hour > 6) && (hour < 12))
    console.log('Good morning');
else if((hour >=12 ) && (hour < 18)) 
    console.log('Good afternoon');
else if (hour >=18)
    console.log('Good evening');

// switch case
// ---------------------------
/*
 user - Guest, moderator
 Guest - Guest user
 moderator - Moderator user
 --- Unknown user
*/
let user = 'guest'
if(user == 'guest'){
    console.log('Guest user');
}
else if(user == 'c') {
    console.log('Moderator user');
}
else{
    console.log('Unknown user');
}

console.log('Switch case');

user = 'guest'
user = 'moderator'
user = 'admin'
switch(user){
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user');
}

// Loops
// --------------------------
// for, while, do while, for in, for of

// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')

// 1. for
for(let i = 0; i < 5; i++){
    console.log('Hello world')
}
for(let i = 1; i <= 5; i++){
    console.log('Hello world')
}
for(let i = 5; i > 0; i--)
    console.log('Hello world')

for(let i = 0; i < 5; i++){
    if(i % 2 == 0)
        console.log('Hello world', i)
}

// 0 % 2 = 0 --
// 1 % 2 = 1
// 2 % 2 = 0 --
// 3 % 2 = 1
// 4 % 2 = 0 --

//while loop
//-----------------------
/*
    let i = 0;
    while(condition){
        statements
        i++;
    }
*/

i = 0;
while(i < 5){
    console.log('From while - ', i);
    i++;
}
