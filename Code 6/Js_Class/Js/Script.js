class MobilePhone{
   constructor(Brand , Model){

    this.brand=Brand;
    this.model = Model;
    
   }

   getModel(){
   return this.model;

   }

   getBrand(){
   return this.brand;

   }

    getExtras(){
       return `using ${this.model} & ${this.brand}` ;
    }



}

let rakib_phone = new MobilePhone("iphone", "XR");

console.log(rakib_phone);
console.log(rakib_phone.brand);

