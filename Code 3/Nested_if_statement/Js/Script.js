//Find The largest Number in Nested if statement

var n1 = prompt("enter a First Number: ");
var n2 = prompt("enter a second number: ");
var n3 = prompt ("enter a third number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1>=n2){
    if(n1>=n3){
        console.log(`${n1} is the largest number `);
        alert(`${n1} is the largest number `);
    }
    else{
console.log(`${n3} is the largest number`);
alert(`${n3} is the largest number`);

    }
   

}
else{
    if(n2>=n3){
        console.log(`${n2} is the largest number`);
        alert(n2 + "is the largest number");
    }
    else{
        console.log(`${n3} is the largest number`);
        alert(n3 + "is the largest number");
    }
}
