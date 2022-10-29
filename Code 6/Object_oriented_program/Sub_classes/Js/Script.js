//Sub Class
//Inheritance


class Person{ //Base Class

constructor(fname, lname){
      this.firstName = fname;
      this.lastName = lname;
}


greeting(){

      return (`Hello ${this.firstName} ${this.lastName}`)

}
}



class Customer extends Person{ //sub Class

  constructor(fname, lname, phone, membership){

    super(fname, lname); //for linked first name and last name.

    this.phone=phone;
    this.membership=membership;
       

  }

  fullName(){
      console.log(this.firstName,this.lastName);

  }

}



let person1 = new Person("fazlay" ,"rabby");
console.log(person1);
console.log(person1.greeting());

let person2 = new Customer("rasel" ,"Fokir","01937091332","37465777");
console.log(person2);
console.log(person2.greeting());
