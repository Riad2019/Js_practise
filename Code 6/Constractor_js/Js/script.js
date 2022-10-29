//Constructor -which is used to same type object name and pattern commonly use .its look like a function.Started with Capital latter.


function Smartphone (Brand ,Model){
      this.brand= Brand; //here this.Showing object name = Function data passing variable name.
      this.model= Model;
      this.makecall=function(phoneNumber){ 
        console.log(`Phone Number is ${phoneNumber}`);

      };


}

const Smartphone1= new Smartphone("nokia",1100);
console.log(Smartphone1);
Smartphone1.makecall("0193709133200");


const smartphone2 = new Smartphone("Sumsang", "S21");
console.log(smartphone2);
console.log(smartphone2.brand);
smartphone2.makecall("01637632764")


//Its Also Called Blue Print

//we are also accessing prototype on this function 
