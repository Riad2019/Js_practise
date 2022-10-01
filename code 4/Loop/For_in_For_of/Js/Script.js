//For-in : String , array,object
//for-of  : string , array .


let name= "i m learning javascript";
let food =["cake", "coke", "orange", "apple"]
//object doesn't have any index
let data = {
    name: "Riyad",
    profession: "Student",
    country :"bangladesh",
    age : "25"

}
 //string
 // in means Index

 console.log("for---------in");
 for (var x in name) {
    console.log("index :" + x); //showing index
     console.log(`Value :${name[x]}`); //showing index value

 }
 
 console.log("for----------of"); 

 for (var x of name) {
    console.log(x); //showing index value
 }


  //array
 // in means Index

 console.log("for---------in");
 for (var y in food) {
    console.log("index :" + y); //showing index
    console.log(`Value :${food[y]}`); //showing index value

 }
 
 console.log("for----------of"); 

 for (var y of food) {
    console.log(y); //showing index value
 }




  //Object
 // in means Index

 console.log("for---------in");
 for (var z in data) {
    console.log("Property :" + z); //showing index
    console.log(`Value : ${data[z]}`); //showing index value

 }
 
 console.log("for----------of"); 

console.log("object doesn't have any index");

