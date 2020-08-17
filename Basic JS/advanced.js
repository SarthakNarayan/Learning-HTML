// Using map, reduce and filter
// we need to know these since they are used a lot in react and vue
// Map works with array only
console.log("USING MAP, REDUCE AND FILTER");
let arr = [1, 2, 3, 4, 5];
let usingMap = arr.map((n) => n * 2);
console.log(usingMap);

// Filter filters the array
// this returns true and false so filter actually only takes the true part
// This can be validated by replacing n*2 of map by n % 2 == 0
let usingFilter = arr.filter((n) => n % 2 == 0);
console.log(usingFilter);

let currentArr = [];
let accumulatorArr = [];
let usingReduce = arr.reduce(function (accumulator, current) {
  accumulatorArr.push(accumulator);
  currentArr.push(current);
  return accumulator + current;
});
console.log(`Accumulator array is ${accumulatorArr}`);
console.log(`Current array is ${currentArr}`);
console.log(usingReduce);

console.log("USING ARROW FUNCTIONS");
// Converting a Function to an arrow function
// We replace the keyword function with a variable
// For single argument and single return statement
const arrowFunc1 = (num1) => num1 + 5;
console.log(arrowFunc1(5));
// For multiple arguments we need brackets
const arrowFunc2 = (num1, num2 = 20) => num1 + num2;
console.log(arrowFunc2(5));
// Multiple inputs with multiple statements
const arrowFunc3 = (num1, num2 = 20) => {
  let summer = num1 + num2;
  return summer;
};
console.log(arrowFunc3(5));
// so basically function is replaced by inputs followed by arrows
let arrowArr = [1, 2, 3, 4, 5, 6];
arrowArr.forEach((arrayElement) => console.log(arrayElement));
// you can iterate through the array and perform some actions using it. But if you want to return an array we need to use map


// Using Classes
console.log("USING CLASSES");
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// initializing objects
const person1 = new Person("sarthak", "narayan", "1999-01-18");
console.log(person1);
console.log(person1.getFullName());
console.log(person1.getBirthYear());