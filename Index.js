console.log("hello");

let a = 5;
var b = "ankit";
// var is used for global scope

// Refrance types
    //Objects

let person = {
    firstname : "Ankit" ,
    age : 23
}

// Access properties
console.log(person.firstname);
console.log(person['age']);


// Arrays 
let names = ["ankit", "Avinash", "rahul"]
console.log(names[0]);

names[3] = "nextAdded";
names[1] = "repalced";
console.log(names)


// Equality Operators
// == loose equality only checks values
// === checks data and value

// Ternary Operator
let age = 17;
let satatus = (age >= 18)? "can vote" : "can not vote";
console.log(satatus)

