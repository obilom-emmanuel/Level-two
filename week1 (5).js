//there are 3ways of returning an output in js.
//1. using an alert
// alert('hello js ninjas')
//2. console.log()
//3. prompt()

console.log('You all are doing well!');
console.log('hello world');

//3. return statement

//Variables--are containers for storing information.
//Naming of variable(s).
//i. Kebabcase naming
//ii. Pascalcase naming
//iii. Snakecase naming
//iv. Camelcase naming--is the best way of naming variables in js.
//e.g---userName, userAge, myName, isAlive, isOldEnough.
//v. Hungariancase naming


//Variable declaration..
//1. using let keyword---it means you can redeclare and reassign.
//ps--equals to(=)-- is used to assign a value.

let myName = 'John';
console.log(myName);

myName = 'Jane';
console.log(myName)

//2. using const keyword--you cannot redeclear neither can you reassign.

const userAge = 20;
console.log(userAge);

//3. using var keyword--you can redeclare and reassign.


//DATA TYPES---can be define as the kind of values a variable can hold.

//2 main categories of data types in js.

//1.Primitive data types--they are immutable, also they hold single immutable values.

//i. String---are characters,text,numbers that wrapped in quote(single, double.)

let userName = 'Femi';
console.log(userName);

userName = 'Segun';
console.log(userName);
console.log(typeof userName);

//ii. Numbers-- are integers, float, even/odd, decimal/whole..

let num = 20;
console.log(num);
console.log(typeof num);

num = '20';

console.log(num);
console.log(typeof num);

let firstDigit = 20; //number
let secondDigit = '20'; //string

//concatination
let sum = firstDigit + secondDigit;
console.log(sum);//2020

let userDetails = 'my name is ' + userName + ',' + ' i live at Ajitu street. ' + 'i am ' + firstDigit + ' years old.';

console.log(userDetails);

userDetails = 'my name is' + ' ' + userName + ',' + ' ' + 'i live at Ajitu street.' + ' ' + 'i am' + ' ' + firstDigit + ' ' + 'years old';
console.log(userDetails);

//Template literal.-- we use template literal to return a string output but this time with an identifier. We use backtick. 

userDetails = `my name is ${userName}, i live at Ajitu street. I am ${firstDigit} years old.`;
console.log(userDetails);

//iii. Boolean -- returns true or false.

let isAlive = false;
console.log(isAlive);
console.log(typeof isAlive);


isAlive = true ? 'yes his alive' : 'no his dead';
console.log(isAlive);


//iv.Undefined--means that a variable has been declared but without any value assign to it.

let myCar;
console.log(myCar);

myCar = 'lexus';
console.log(myCar);


//v. Null--- is an intentional absence of an object value. it's simply means empty or nothing.

let myAge = null;
console.log(myAge);
console.log(typeof myAge);


//2.Non-primitive data types---they are mutable.

//vi. Object---are collections of key-value pairs, or key-pair values.
//{}---object.
let obj = {};
console.log(obj);

let userObj = {
    name: 'John Wick',
    age: 980,
    gender: 'male',
    isAlive: true,
    address: {                           //nested object...
        city: 'peckham',
        country: 'United Kingdom',
    }
};
console.log(userObj);
console.log(typeof userObj);

//Their are 2ways of manipulating an object.
//i. using dot notation
console.log(userObj.name);
console.log(userObj.gender);
console.log(userObj.address);
console.log(userObj.address.city);

//ii. using bracket notation
console.log(userObj['age']);
console.log(userObj['isAlive']);
console.log(userObj['address']['country']);
console.log(userObj.address['city']);
console.log(userObj['address'].country);

//vi. array-- is a collection of values. we have index(s) and length.
//[]---arrays
let fruits = ['pawpaw', 'mango', 'orange', 'cashew', 'watermelon', 'cucumber', 'apple', 'pineapple'];
console.log(fruits); //7
console.log(fruits[0]);
console.log(fruits[7]);

fruits.push(userObj);

console.log(fruits); //8

// console.log(typeof fruits);
console.log(fruits[8].address.city);

console.log(fruits[1][1]); //['m', 'a', 'n', 'g', 'o']





// console.log(this);



//ASSIGNMENT
//1. READ ON OPERATORS
//2. STRING METHODS AND NUMBER METHODS.
