0x00. ES6 Basics
ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language. ECMAScript is the standardization of Javascript which was released in 2015 and subsequently renamed as ECMAScript 2015.
ECMAScript and Javascript are both different.

ECMAScript vs Javascript
ECMAScript: It is the specification defined in ECMA-262 for creating a general-purpose scripting language. In simple terms, it is a standardization for creating a scripting language. It was introduced by ECMA International and is an implementation with which we learn how to create a scripting language. 

Javascript: A general-purpose scripting language that confirms the ECMAScript specification. It is an implementation that tells us how to use a scripting language.

ES6

ES6
Javascript ES6 has been around for a few years now, and it allows us to write code in a clever way which basically makes the code more modern and more readable. It’s fair to say that with the use of ES6 features we write less and do more, hence the term ‘write less, do more’ definitely suits ES6. 

ES6 introduced several key features like const, let, arrow functions, template literals, default parameters, and a lot more. Let’s take a look at them one by one.

Table of Content

const
let
Arrow functions
Template literal
Object and Array Desctructuring
Default Parameters
Classes
Rest parameter and spread operator
for/of Loop
JavaScript Maps and Sets
Promises
Symbol
String Methods
Array Methods
Object Enteries
const
The const keyword is used to declare constant variables whose values can’t be changed. It is an immutable variable except when used with objects.

Example: The below example will explain you the use of const keyword in different situations.

// Const 
const name = 'Mukul';
console.log(name); 
// Will print 'Mukul' to the console.
 
// Trying to reassign a const variable
name = 'Rahul';
console.log(name); 
// Will give TypeError.
 
// Trying to declare const variable first
// and then initialise in another line
const org_name;
org_name = "GeeksforGeeks";
console.log(org_name);
// Throws an syntax error: missing initializer in const declaration
let
The let variables are mutable i.e. their values can be changed. It works similar to the var keyword with some key differences like scoping which makes it a better option when compared to var.

Example: This example will illustrate how to declare varibale using the let keyword.


// let
let name = 'Mukul';
console.log(name); 
// Prints Mukul
 
name = 'Rahul';
console.log(name); 
// Prints Rahul
 
// Trying to declare let variable first and then initialise in another line
let org_name;
org_name = "GeeksforGeeks";
console.log(org_name); 
// Prints GeeksforGeeks
