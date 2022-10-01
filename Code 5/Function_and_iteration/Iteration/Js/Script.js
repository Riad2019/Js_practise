//Array Iteration Using ForEach


var foods=["mango", "apple" , "orange"];
var number =[1,223 ,4764,8,0];



// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array

let printEverything = function(name,i,xyz){

    console.log(`Food name is ${name} and index is ${i}`);
    console.log(xyz);


}

foods.forEach(printEverything);