// to check if import is proper
console.log("Hello World");

// using strings
// + is used for concatenating
// .length for finding the length of the string
// ` ` accounts for variables whereas ' and " don't
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

// inserting something using JS
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

// let has block level scope and var has global scope
// we can have blocks using {}
// always a good practice to use var instead of let
let a = 6;
{
  let a = 10;
  console.log(`Block level scope ${a}`);
}
console.log(`Global level scope ${a}`);

// if else statements
let number = 10;
if (number == 1) {
  console.log(1);
} else if (number == 2) {
  console.log(2);
} else {
  console.log(number);
}

// default value of a variable is undefined
// objects are key value pairs and arrays are special types of objects
// objects are like dictionaries
let example_object = {
  name: "sarthak",
  age: 15,
  height: 160,
};
console.log(example_object);
console.log(example_object.name);
console.log(example_object["name"]);
console.log(example_object["age"]);

// array can store any type of value
let example_array = ["sarthak", 15, 160];
console.log(example_array);
console.log(example_array[0]);
console.log(example_array[1]);
console.log("Length of array " + example_array.length);

// sorting an array
example_array.sort();
console.log(example_array);

// adding values to array
example_array.push("Narayan");
console.log(example_array);

// arrays are mutable i.e. values can be changed
example_array[0] = 25;
console.log(example_array);

// functions
function adder(a, b) {
  let c = a + b;
  console.log(c + " Sum inside the function");
  return c;
}

let sum = adder(5, 10);
console.log(`${sum} sum outside the function`);

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
// inner html works only on ID
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

// using queryselector
// this directly returns the class content and no need of indexing since it returns the first element for that class
let selector = document.querySelector(".content");
console.log(selector);
// ids can also be selected
let selector_id = document.querySelector("#first");
console.log(selector_id);

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

// arrow functions are for writing functions in a short way