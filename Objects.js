const rectangle ={
    length : 1,
    breadth : 2,
    
    // finction defined in object called as method
    draw: function() {
        console.log("draw");
    }
    
}
console.log(rectangle);
console.log(rectangle.draw());

                // object creation 
// factory function

function createRectangle(l,b)
{
     return rectangl ={
        length : l,
        breadth : b,

        draw: function() {
            console.log("draw");
        }
    };
}
var rectangle1 = createRectangle(5,10);
console.log(rectangle1)
// constructor function (pascal casing used)
function CreateRectanges(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log("draw")
    };

}
var rectangleObj = new CreateRectanges(5,10);
console.log(rectangleObj.draw())


// for-of for-in loops
var rectgl = {
    l : 1,
    b:2
}
for (key in rectgl){
    console.log(key, rectgl[key])
}

// obj Cloning
// 1. iteration 
var srcObj = {firstName: 1};
var destObj= {}; 
for (let key in srcObj){
    destObj[key] = destObj[srcObj[key]]
}

//2. assign
let destob = Object.assign({},srcObj)
console.log(destob)

// 3. spreadOp 
let dest = {...srcObj}


// inbuilt objects
Math.round(1.8);

let str = new String(" hello ")  // sting constructor returs object string

str.trim();
str.replace("h","A");
let words = str.split();

// template liteal
let mailname = "ankit"
let email = `hello ${mailname}
this is an email

thanks`

console.log(email)