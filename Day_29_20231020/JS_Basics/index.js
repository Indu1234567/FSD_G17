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

//do while loop
//-----------------------
i = 0;
do{
    console.log('From do while - ', i);
    i++;
}while(i < 5);

//for in loop
//-----------------------
let person1 = {
    name: 'Abc',
    age: 30
}

for(let key in person1){
    console.log(key + " : " + person1[key])
}
// dot, bracket

let colors = ['red', 'green', 'blue'];
for(let index in colors){
    console.log(colors[index]);
}

// for of - ES6 
//-----------------------
for(let color of colors){
    console.log(color);
}

//Infinite loop
// i = 0;
// while(i < 10){
//     console.log('i is ' + i) ;
// }

// break
//-----------------------
i = 1;
while(i <= 10){
    if(i % 5 == 0)
        break;
    console.log('i is ' + i) ;
    i++;
}

for(let i = 1; i <= 10; i++){
    if(i % 5 == 0)
        break;
    console.log("for - break - " + i);
}

// continue
//-----------------------
i = 1;
while(i <= 20){
    if(i % 5 == 0){
        i++;
        continue;
    }
    console.log('From continue - i is ' + i) ;
    i++;
}

for(let i = 1; i <= 10; i++){
    if(i % 5 == 0)
        continue;
    console.log("for - break - " + i);
}

// Max of two numbers
// function max(a, b){
//     if(a > b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }

// function max(a, b){
//     if(a > b)
//         return a;
//     else
//         return b;
// }

function max(a, b){
    if(a > b)
        return a;
    return b;
}

let maxNumber = max(1, 2);
console.log(maxNumber);

function max2(a, b){
    return (a > b) ? a : b;
}
maxNumber = max2(1, 2);
console.log(maxNumber);

//width > h - l
//h > w - p

// function isLandscape(w, h){
//     if(w > h){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function isLandscape(w, h){
//     if(w > h)
//         return true;
//     return false;
// }
// function isLandscape(w, h){
//     return (w > h) ? true : false;
// }
function isLandscape(w, h){
    return (w > h);
}

let isL = isLandscape(100, 500)
console.log(isL);

// FizzBuzz
/*
divisible by 3 - Fizz
divisible by 5 - Buzz
divisible by 3 and 5 - FizzBuzz
not divisible by 3 or 5 - number
if not a number - "Not a number" Eg: '17'
*/

function fizzbuzz(num){
    if(typeof num !== "number")
        // return "Not a number";
        return NaN
    else if(num % 3 == 0 && num % 5 == 0)
        return "FizzBuzz";
    else if(num % 3 == 0)
        return "Fizz";
    else if(num % 5 == 0)
        return "Buzz";
    else if(num % 3 == 0 && numb % 5 == 0)
        return "FizzBuzz";
    else    
        return num;
}

// console.log(fizzbuzz(5))
// console.log(fizzbuzz(3))
// console.log(fizzbuzz(15))
// console.log(fizzbuzz(7))
console.log(fizzbuzz('17'))

console.log(typeof NaN)

// Object
// -----------
//Object literal
let circle1 = {
    radius: 1,
    location: {
        x: 2,
        y: 3
    },
    draw: function(){
        console.log('Drawing')
    },
    arr: [4, 5, 6]
}

console.log(circle1.radius)
circle1.draw()//method

let circle2 = {
    radius: 7,
    location: {
        x: 8,
        y: 9
    },
    draw: function(){
        console.log('Drawing')
    },
    arr: [4, 5, 6]
}
console.log(circle2.radius)

// Factory functions
function createCircle(radius, color){//Camel case: oneTwoThree
    return {
        radius,//radius: radius,
        color,
        draw: function(){
            console.log('Drawing')
        }
    }
}
let circle3 = createCircle(20, 'red')
console.log(circle2)
console.log(circle3)

// Constructor functions
function Circle(r, c){//Pascal case: OneTwoThree
    this.radius = r;
    this.color = c;
    this.draw = function(){
        console.log('Drawing...')
    }
}
let circle4 = new Circle(10, 'green');

console.log(circle4)
circle4.draw()
console.log(circle4.radius)

// let this1 = {}
// this1.radius = r
// this1.color = c
// this1.draw = function(){
//     console.log('Drawing...')
// }

let obj1 = {
    a: 'a',
    b: 'b',
    c: function(){
        return 'from c'
    }
}
console.log(obj1)

obj1.a = 'A'
console.log(obj1)

obj1.d = 'd'
console.log(obj1)

delete obj1.c
console.log(obj1)
delete obj1.a
console.log(obj1)

const obj2 = {
    a: 'a',
    b: 'b',
    c: function(){
        return 'from c'
    }
}
console.log(obj2)

obj2.a = 'A';
console.log(obj2)

delete obj2.c
console.log(obj2)

obj2.d = 'd'
console.log(obj2)

// obj2 = {//index.js:700 Uncaught TypeError: Assignment to constant variable.
//     color: 'red'
// }
// console.log(obj2)

// Contructor property - Every object
// circle1 - Obj literal
// circle3 - Factory function - createCircle
// circle4 - Constructor function - Circle
console.log(circle1.constructor)//Object()
console.log(circle3.constructor)//Object()
console.log(circle4.constructor)//function Circle(r, c)

// let obj3 = {}
// let obb3 = new Object();
// String(), Boolean(), Number()

// Function are object
function circleFn(r) {
    // console.log('Inside circleFn')
    this.radius = this.b/2
    console.log(this)
}
console.log(circleFn.name)
console.log(circleFn.length)
console.log(circleFn.constructor)//Function()

circleFn.call({a: 'cc', b: 10}, 1)
circleFn.apply({a: 'bb', b: 20}, [20])
// console.log(circle5)

// Value/premitive types vs Reference type
// Pass by value and Pass by reference
let num3 = 10;
let num4 = num3;
num3 = 20
console.log(num3, num4)

let numObj1 = {
    value: 10
}
let numObj2 = numObj1
numObj1.value =20
console.log(numObj1, numObj2)

let obj4 = {value: 20}
function increase(o){
    o.value++
}

increase(obj4)
console.log(obj4)

let counter = 20
function increase2(c){
    c++
}

increase2(counter)
console.log(counter)
