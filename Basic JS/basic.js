// to check if import is proper
console.log("Hello World");

// USING STRINGS
// + is used for concatenating
// .length for finding the length of the string
// ` ` accounts for variables whereas ' and " don't
// strings can be indexed as array
var str1 = "Hello";
var str2 = "There";
var str3 = str1 + " " + str2;
var concatenate = `${str1} ${str2} "How you doin"`;
var concatenate_no = "${str1} ${str2} This doesn't account for variable";
console.log(concatenate);
console.log(concatenate_no);
console.log(str3);
var length = concatenate.length;
console.log(`Length of the string is ${length}`);
console.log(`The first letter of the string is ${str1[0]}`);
// Strings are character immutable
// This means that we can change the whole string but we cannot do str[0] = "H" i.e change individual characters

// INSERTING SOMETHING USING JS
// If you give the same id name then it will replace that content
// if add is set to first then the heading will change
document.getElementById(
  "add"
).innerHTML = `<h3> This heading has been inserted </h3>`;

// to get the first occurrence of a substring
var position = concatenate.indexOf("How");
console.log(position);

// slicing
// inclusive of start and exclusive of end
// substr means start from 1 and go till next 6 characters
var sliced = concatenate.slice(1, 6);
var sliced_length = concatenate.substr(1, 6);
console.log(sliced);
console.log(sliced_length);

// if you don't give var or let inside a block then that variable will have global scope
// we can have blocks using {}
// always a good practice to use var instead of let
// let doesn't allow you to declare a variable twice you can set it though
let a = 6;
{
  globalScope = 30;
  var noglobalScope = 25;
  let a = 10;
  console.log(`Block level scope ${a}`);
}
console.log(`Global level scope ${a}`);
console.log("Able to output since global scope " + globalScope);
// This will give reference error
// console.log("Able to output since global scope " + noglobalScope)

// if else statements
// we have 2 types of equality checker (===) stands for strict equality
// similarly we have strict inequality operator
// 3 == '3' will be true and 3 === '3' will be false
// this is known as type coercion
// this is because '3' is converted to number in ==
// && is for AND and || is for OR
let number = 10;
if (number == 1) {
  console.log(1);
} else if (number == 2) {
  console.log(2);
} else {
  console.log(number);
}

// OBJECTS
// default value of a variable is undefined
// variables are case sensitive
// It is a common practice to use camelCase for variables
// ++ and -- work as in C++ and short hand operators like +=
// objects are key value pairs and arrays are special types of objects
// objects are like dictionaries
// dot notation or bracket notation can be used for accessing elements of an object
// the only difference is that if the key value has spaces in between then dot notation cannot be used
// numbers can also be used as key
// objects are mutable and we can reassign it values using dot or bracket
// we can also add new properties to it using dot and bracket
// we can also store arrays inside objects
// similarly you can have objects inside arrays
let example_object = {
  name: "sarthak",
  age: 15,
  height: 160,
  18: "age reverse",
};
example_object.complexion = "brown";
// same as example_object["complexion"] = "brown"
console.log(example_object);
console.log(example_object.name);
console.log(example_object["name"]);
console.log(example_object["age"]);
console.log(example_object[18]);
// deleting items from object
// we can use delete for deleting specific elements of objects
delete example_object.complexion;
console.log(example_object);
// to check if an object has a property(key)
console.log(example_object.hasOwnProperty("age"));

// array can store any type of value
// we can have multidimensional array
let example_array = ["sarthak", 15, 160];
let multiDimArray = [
  [1, 2],
  [3, 4],
];
console.log("First element of multidim array is " + multiDimArray[0][0]);
console.log("Last element of multidim array is " + multiDimArray[1][1]);
console.log(example_array);
console.log(example_array[0]);
console.log(example_array[1]);
console.log("Length of array " + example_array.length);

// sorting an array
example_array.sort();
console.log(example_array);

// adding values to array
// similarly pop removes the last element of an array
// shift removes the first element of the array
// let out = example_array.shift()
// let out = example_array.pop()
// push adds an element to the end of the array whereas unshift adds an element to the beginning of the array
example_array.push("Narayan");
console.log(example_array);
// arrays are mutable i.e. values can be modified
example_array[0] = 25;
console.log(example_array);

// functions
function adder(a, b) {
  var c = a + b;
  console.log(c + " Sum inside the function");
  return c;
}

let sum = adder(5, 10);
console.log(`${sum} sum outside the function`);
// console.log(c)

// alerts, prompts, confirm
// alert("Hello there");
// let name = prompt("What is your name", "Gandu")
// console.log(name)
// let check = confirm("Do you want to do it");
// console.log(check);
// if (check == true) {
//   alert("Your post has been deleted");
// }

// loops
// we have break and continue which can be used in loops
console.log("Using for");
for (let index = 0; index < example_array.length; index++) {
  console.log(example_array[index]);
}

console.log("Using foreach");
example_array.forEach((element) => {
  console.log(element);
});

console.log("Using forof");
for (element of example_array) {
  console.log(element);
}

// used for iterating through objects
console.log("Using forin");
for (key in example_object) {
  console.log(`The key is ${key} and the element is ${example_object[key]}`);
}

// manipulating dom
// Single selectors
// - by id
// - query selector
// Multiple selectors
// - queryALl
// - by className
// It is advisable to use queryall since it returns result as a node list which can be iterated as an array whereas className returns objects as an HTML collection which have to be converted to array object before performing any operations
// inner html works only on ID
// instead of document you can also do container.getElementsByClassName to get that particular occurrences of that class in that div
let first = document.getElementById("first");
console.log(first);
console.log(first.innerHTML);
// to change it
// you can also change it from heading to paragraph using
// first.innerHTML = "<h3> This title has been changed </h3>"
// first.innerHTML = "This title has been changed"

// similarly we can grab elements by their classname
// classname returns element as an array since there can be multiple elements with the same class name and we have to index it before taking out contents from it
let content = document.getElementsByClassName("content");
console.log(content);
console.log(content[0]);
console.log(content[0].innerHTML.substr(1, 30));
// You can also do get elements by tag name like ('p') or ('h1') if you want to do it for all the containers

// using queryselector
// this directly returns the class content and no need of indexing since it returns the first occurrence of that class
// queryselectorall returns an array of elements you can pass multiple classes and ids ('.container, #first') this will return an array that has class container or id first
let selector = document.querySelector(".content");
console.log(selector);
// ids can also be selected
let selector_id = document.querySelector("#first");
console.log(selector_id);

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
// list of CSS properties which can be changed by JS
// if you do console.log(getid.style)
// you can see what styles were set and what are empty (means you havent set it)
// HTML DOM events
// https://www.w3schools.com/jsref/dom_obj_event.asp
function togglecolor() {
  let getid = document.getElementById("first");

  if (getid.style.color == "") {
    getid.style.color = "red";
  } else if (getid.style.color == "black") {
    getid.style.color = "red";
  } else {
    getid.style.color = "black";
  }
  console.log("Button Clicked");
}

let para = document.getElementById("para");
para.addEventListener("mouseover", function makebold() {
  para.style.fontSize = "30px";
});
para.addEventListener("mouseleave", function makesmall() {
  para.style.fontSize = "20px";
});

// Using timeout functions
function greet(name) {
  console.log("hello " + name);
}

// setTimeout
// will run the function once after specified time
// time is in milliseconds
// setTimeout returns a unique id. We can stop that setTimeout from executing using cleartimeout depending on logic
// let timeout = setTimeout(greet, 5000, "sarthak");
// clearTimeout(timeout);

// passing multiple and no arguments
// setTimeout(greet, 5000, "sarthak", "narayan");
// setTimeout(greet, 5000);

// setInterval
// This can be useful when you want to show time in your website
// This will run a function again and again after a fixed duration of time
// we can also clear it using clearInterval depending on logic
// let timeout = setInterval(greet, 2000, "sarthak");
// clearInterval(timeout);

function mydate() {
  time = new Date();
  document.getElementById("day").innerHTML = time.getDate();
  document.getElementById("month").innerHTML = time.getMonth() + 1;
  document.getElementById("year").innerHTML = time.getFullYear();
  document.getElementById("time").innerHTML = time;
}
let timeout = setInterval(mydate, 1);

// converting string to integer
// use parseInt()

// ternary operator
let ternary = 16 > 10 ? "True" : "False";
console.log(ternary);

// Difference between let and var
// var has function scope and let has block scope
// Example 1
// use strict prevents from unsafe practices like declaring variables without let or var (making them global)
// People generally place them at the beginning
function letvsvar() {
  {
    ("use strict");
    var scope = 20;
    console.log("Block scope is " + scope);
  }
  console.log("Function scope is " + scope);
}
letvsvar();
// We see that even if scope is declared inside the block it is still accessible in the function. This doesn't happen with let hence people use let instead of var
// If we replace var with let function scope wont be printed
// worst thing is to define variables without scope as they are declared as global

// Example 2
// function letvsvar() {
//   {
//     let scope = 20
//     console.log("Block scope is " + scope)
//   }
//   console.log("Function scope is " + scope)
// }
// letvsvar()

// const is similar to let and you cannot reassign it
// const is generally followed by a variable name with all capital letters
// People generally use const and let

// Even if we use const with arrays and objects they are mutable
// To freeze an object we use
Object.freeze(example_object);

// Arrow functions
// These are also known as anonymous functions
// This will return date
let arrowFunc = () => new Date();
console.log(arrowFunc());
// arrow functions with parameters
let arrowFunc2 = (a, b) => a + b;
console.log(arrowFunc2(10, 11));
// taking unknown number of inputs
function unknown(...args) {
  let sum = 0;
  args.forEach((element) => {
    sum = sum + element;
  });
  console.log(sum);
}
unknown(10, 11, 12);

// Structuring and destructuring
// we can select multiple values also
// Order doesn't matter
// Destructuring from objects
let abcObj = { a: 123, b: 456, c: 789 };
const { c: valC, b: valB } = abcObj;
console.log(valB + " " + valC);
// destructuring can also be nested
let abcObjNested = { a: { ab: 1, ac: 2 }, b: { bc: 3, bd: 4 } };
const {
  a: { ac: valAC },
  b: { bd: valBD },
} = abcObjNested;
console.log(valAC + " " + valBD);
// destructuring from arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);
// Only feeding in what we need
// so instead of sending the whole object we only send what we need
// This is commonly used with API calls
function OnlyNeed({ c }) {
  return c + 10;
}
console.log(OnlyNeed(abcObj));
