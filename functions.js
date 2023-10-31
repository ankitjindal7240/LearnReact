function run(){
    console.log("running");
}

run();

// * hoisting is process of moving all function declaration on the top automaticaly

// function assignment
let stand = function walk(){
    console.log("walikng")
}
stand();

// annonymus function assignment
let stand2 = function(){
    console.log("walikng2")
}
stand2();

//Arguments
//restoperators
function sum(num1,num2,...args){
    console.log(args);
}

//default paramentrs
function sum(a,b=2,c=6){
    console.log(a+b+c);
}

// getter setter

var studnet = {
    firstname : "ankit",
    lastName : "jindal",

    get getname(){
        return `first name ${firstname}`
    },

    set setName(value){
        var splitValues = value.split(' ')
        this.firstname = splitValues[0],
        this.lastName = splitValues[1]
    }
}

// reduce an array
arr3 = [1,2,3,4,5,6,7]

var total = arr.reduce((accumulator, currenValue) => accumulator+currenValue , 0)