var arr = [1,2,3,4,5,6];
arr.push(7)
arr.unshift(0)
arr.splice(2,0,"a","b","c") 

//searching
arr.indexOf(5)
// indexof and include dn't works with objects because address are fifferent

// callback function

var presons =[
    {no :1, naam:"Ankit"},
    {no :2 , naam : "rahul"}
]
let personss = presons.find(function(preson){
    return preson.naam == "Ankit";
})
console.log(personss);


// Arrow functions 
var persons2 = presons.find(presons => presons.naam =="Ankit")
console.log(persons2);


// Removing Elements 
arr.pop();
arr.shift();
arr.splice(2,1)

// empty the array
arr.length = 0
arr.splice(0,arr.length)

// comining and slicing array
var arr1 = [1,2,3,4,5]
var arr2 = ['a','b','c']

let combined = arr1.concat(arr2)
let sliced = combined.slice(2,3) // last index not included


//spread operator
var combined2 = [...arr1,...arr2]

// iterating 
// for of loog and for each loop

// joining
var joinned = arr1.join(',');
var str = "this is a message";
var splitedarry = str.split(' ')


// filtering
let filterd = arr.filter(value => value >= 0);

//Mapping 
var students = arr1.map(st => "student no :" + st)
console.log(students)

// chaining
var items = arr1.map(val => {ages : val} )
console.log(items);