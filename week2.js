//Operators
//1.Arithmetic operators, +, -, *, /, **
//i. addition -- plus[+]

let digitOne = 10;
let digitTwo = '10';
let sum = digitOne + digitTwo;
console.log(sum);

let digitThree = 20;
sum = digitOne + digitThree;
console.log(sum);

//ii. substraction operation -
let diff = digitThree - digitTwo;
console.log(diff);

//iii multiplication -- *

let multi = digitOne * digitTwo;
console.log(multi);

//iv. division-- /
let div = digitThree / digitOne;
console.log(div);

//v. exponential--- **
let expo = 5 ** 2;
console.log(expo);

//vi. modulus-- %

let mod = 10 % 3;
console.log(mod);


//2. assignment operator, addition & subtraction assignment operator
let userName = 'Bolu';
console.log(userName);

let num1 = 10;
let num2 = 20;

let sumEl = num1 + num2;
console.log(sumEl);

sumEl = sumEl + num1;
console.log(sumEl);

sumEl += num1;
console.log(sumEl);

sumEl -= num2;
console.log(sumEl);


//3.pre & post increment, pre & post decrement.
 let a = 1;
 console.log(a);

 let b = a++;  //post increment
 console.log(b); //1
 console.log(a); //2

 let c = ++b; //pre increment
 console.log(c); //2

 let d = a++;
 console.log(d); //2
 console.log(a);
 
 let count = 0;
 console.log(count); //0
 

 let firstCount = count++; //post increment
 console.log(`this is ${count}`);
 console.log(`this is ${firstCount}`);
 console.log('this is ' + firstCount);
 
 
 
//  console.log(firstCount); //0
//  console.log(count); //1

 let secondCount = ++firstCount; //pre increment
 console.log(secondCount);//1

 let thirdCount = count++; //post increment
 console.log(thirdCount); //1
 console.log(count);  //2

 let fourthCount = count--; //post decrement
 console.log(fourthCount); //2
 console.log(count); //1

 let fifthCount = --count; //pre decrement
 console.log(fifthCount); //0
 
 


//4.Comparison operators---are used to compare two values
//They return a boolean value (true or false) based on the comparison
//Examples of comparison operators include:
//- Equal to (==) --checks for similar value.
//- Not equal to (!=)
//- Strict equal to (===) --checks for similar value and data types
//- Strict not equal to (!==)
//- Greater than (>)
//- Less than (<)
//- Greater than or equal to (>=)
//- Less than or equal to (<=)

let color1 = 'green';
let color2 = 'green';
let color3 = 'Green';

console.log(color1 == color2);
console.log(color1 == color3);
// console.log(color1 = color3);
console.log(color1 === color3);
console.log(color1 != color2);
console.log(color1 !== color3);

let myDigit1 = 10;
let myDigit2 = '10';
let myDigit3 = 20;

console.log(myDigit1 > myDigit2);//
console.log(myDigit1 >= myDigit2); 
console.log(myDigit1 < myDigit3);//
console.log(myDigit1 <= myDigit3);

//5.logical operators---are used to combine multiple conditions
//They also return a boolean value (true or false)
//Examples of logical operators include:
//- Logical AND (&&)-- both sides must be true before you can get a return of true.
//- Logical OR (||)--when either side is true, it returns true.
console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log(false && false);

console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);


console.log(true || false && false && true || false && false);

console.log(1 || false && true || true && true || false);


//6.Ternary operator---is a shorthand way of writing an if-else statement
//It takes three operands
//The syntax is: condition ? expressionIfTrue : expressionIfFalse


let age = 18;
let isOldEnough;
console.log(isOldEnough);

isOldEnough = age >= 18 ? "yes, she can vote" : "No, she can not vote yet!";
console.log(isOldEnough);



//7.conditional statements---are used to perform different actions based on different conditions
//They include if statements, switch statements, and more

let myColor = 'red';

if(myColor == 'yellow'){
    console.log(myColor);
    console.log('yes i am yellow');
    
}else if(myColor == 'red'){
    console.log("i don't know what i am.");
}
else{
    console.log('no i am not yellow');
    
}

//nested if--means placing one or more if statements inside another if statement.
//it's used when you need to test multiple related conditions
//when one condition depends on another.

let user = 'Dotun';
let password = '12345';

if(user === 'Dotun'){
    console.log('username is correct');
    if(password === '1234'){              //nested if     
        console.log('login successful');
    }else{
        console.log('incorrect password');
    }
}else{
    console.log('user not found');   
};


if(user === 'Dotun' && password === '12345'){
    console.log('login successful');
    
}else{
    console.log('invalid credentails');
    
}


let userDetails = user && password ? 'login successful' : 'invalid details';
console.log(userDetails);

//Data destructuring is a convenient way to extract values from arrays or objects and assign them to variables in a single, concise statement.

let user1 = {
    name: 'Tolu',
    user1age: 10,
    role: 'full stack developer',
    address: 'ikeja'
};
console.log(user1);
console.log(user1.name);
console.log(user1['role']);

let {name, user1age, address, role} = user1;
console.log(user1age);
console.log(name);
console.log(role);
console.log(address);

let fruitArray = ['banana','apple', 'cherry'];
console.log(fruitArray);


console.log(fruitArray[0]);
console.log(fruitArray[1]);


let [x, z] = fruitArray;
console.log(x);
// console.log(y);
console.log(z);

let [first, second, third, fourth] = fruitArray;
console.log(first);
console.log(third);
console.log(fourth);


//spread operator(...) -is a special syntax used to expand(or unpack) elements of an array, object or iterable into individual items.

let cars = ['benz', 'ford', 'lexus', ...fruitArray];
console.log(cars);

let newFruits = ['pawpaw', ...fruitArray];
console.log(newFruits);

//Methods---are functions that are associated with objects
//They can perform actions on the object or return information about it

let myRobot = {
    dance: function(){
        console.log('i am dancing'); 
    },
    jump: function(){
        console.log('i am junping');
        
    }
}
console.log(myRobot.dance());
console.log(myRobot.jump());

//string methods---are functions that are built into the String object
//They can be used to perform operations on strings, such as searching, replacing, and manipulating text
//Some common string methods include:

let str = 'bolaji is a boy';
console.log(str);
console.log(typeof str);

//length..
console.log(str.length);

//toUpperCase()
console.log(str.toUpperCase());

//toLowerCase()
console.log(str.toLowerCase());

//charAt()
console.log(str.charAt(9));

//at()
console.log(str.at(4));

//includes()
console.log(str.includes('are'));

//replace()
console.log(str.replace('boy', 'girl'));
console.log(str.replace('bolaji', 'tony'));

//slice()
console.log(str.slice(0, 4));

//split()

console.log(str.split());
console.log(str.split(' '));
console.log(str.split(""));

//trim

let greet = '   hey ';
console.log(greet);
console.log(greet.trim());



//Number methods---are functions that are built into the Number object
//They can be used to perform operations on numbers, such as rounding, parsing, and converting between different number systems
//Some common number methods include:

//To convert from number to string, use these methods:
let myNumber = 34.57;

//toFixed
console.log(myNumber.toFixed());

//toPrecision
console.log(myNumber.toPrecision());

//toString
console.log(myNumber.toString());

//toExponetial
console.log(myNumber.toExponential())


//To convert a string to a number, you can use these methods:

let myStr = '34.57';
console.log(myStr);

//parseFloat()

console.log(parseFloat(myStr));

//parseInt()

console.log(parseInt(myStr));


//Number()

console.log(Number(myStr));

//using addition operator
console.log(+myStr);





//ASSIGNMENT---WRITE A CONDITIONAL STATEMENT TO CHECK CHARACTER TYPE.
//USING PROMPT, INPUT A CHARACTER AND CHECK IF IT'S A VOWEL, CONSONANT, DIGIT, OR SPECIAL CHARACTER.


// prompt()