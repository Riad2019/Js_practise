
//array
const name =[
   'Riyad',
   'Rahim',
   'Karim',
   'Rahim', 
   'Barak Obama'
 ];
 console.log(name);
name[0] ='Abdur'; //replacing 0 index value
console.log(name);

//last index value print 
console.log(name[name.length - 1]);

//adding some value after last index 
name[name.length] = "Donald Trump";
console.log(name);


//javascript datatype  check.
let goodman='Riyad';
let Taka = 0;
console.log(typeof goodman);
console.log(typeof Taka);
console.log(typeof name); // return data type name

//array check 
console.log(Array.isArray(name));//its return true or false

//normally printed to string

for(var index=0 ; index<name.length ; index++) {
    let element= name[index];
    console.log(`i am a ${element}.`);
}

//printing Addition 
var Total = 0

let donations =[100,300,200,400,1000];
console.log(donations);
for(var index1=0 ; index1<donations.length ; index1++){
    let element1 = donations[index1];
    Total= Total + element1;
    console.log(Total);
}
console.log(Total);

