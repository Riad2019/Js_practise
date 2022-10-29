var  age =prompt();

if(age >= 50){
  alert("you are old");
  console.log(`your age is ${age}`);

}
else if(age<50 && age >=30){
    alert("you are middle age");
    console.log(`Your age is ${age}`);
}
else if( age<30 && age>=18){
    alert("you are Young");
    console.log(`Your Age is ${age}`); 

}
else if (age <18 && age>=0){
    alert("you are child");
    console.log("your age is " + age);
}
else{
    alert("Invalid age");
    Console.log("Invalid Age");
}