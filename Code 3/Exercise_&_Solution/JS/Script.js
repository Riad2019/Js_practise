var Num;
Num = prompt("Enter Your Number");

if (Num<=100 && Num>=80){
    console.log(`Your Number is ${Num}\n So Your Grade is : A+`);

}
else if(Num<80 && Num>=70){
    console.log(`Your Number is ${Num}\n So Your Grade is : A`);
}

else if(Num<70 && Num>=60){
    console.log(`Your Number is ${Num}\n So Your Grade is : A-`);
}
else if(Num<60 && Num>=50){
    console.log(`Your Number is ${Num}\n So Your Grade is : B`);
}
else if(Num<50 && Num>=40){
    console.log(`Your Number is ${Num}\n So Your Grade is : c`)
}
else if(Num<40 && Num>=33){
    console.log(`Your Number is ${Num}\n So Your Grade is : D`)
}
else if(Num<33 && Num>=0){
    console.log(`Your Number is ${Num}\n So Your Grade is : F`)

}

else {
    console.log(`Your Number is ${Num}\n Invalid Number`)
}