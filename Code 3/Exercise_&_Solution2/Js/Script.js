
console.log("Select an option : \n a.Add \n b.Subtract \n c. Multiply \n d. Divide");
var num1=prompt("Enter Your First Number : ");
var num2=prompt("Enter Your Second Number : ");
var option=prompt("Choose an operation : ");
var Ans;

num1=parseInt(num1);
num2=parseInt(num2);


var test1=isNaN(num1);
var test2=isNaN(num2);



if(test1||test2){
    console.log("invalid test");
}

else{
 switch(option){
    case "a" :
       Ans = num1 + num2;
       break;
    case "b" :
        Ans = num1 - num2;
        break;
    case "c" :
        Ans = num1 * num2;
        break;
    case "d" :
        Ans = num1 / num2;
        break;
    default :
        console.log("invalid option");
}

}
var test4=isNaN(Ans);
console.log(`Ans is ${Ans}`);
console.log(test4);