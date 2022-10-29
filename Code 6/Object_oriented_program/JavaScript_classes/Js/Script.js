
//Class is a templates of creating object
//class name always Capital Letter
class Person {

   constructor(fname,lname, birthday) {
    this.firstName =fname;
    this.lastName =lname;
    this.dob= birthday;
   }

   calculateAge() {
        let birthday = new Date(this.dob);
       
        let diff= Date.now() - birthday.getTime(); //  miliseconds -miliseconds
        

        /*The static Date.now() method returns the number of milliseconds
 elapsed since January 1, 1970 00:00:00 UTC.Date.now means now to 1970*/

 //getTime()	Get the time (milliseconds since January 1, 1970) . so here counting is 1970 to Birthday date!
       let ageDate = new Date(diff); // miliseconds convert to Standard time set;
       
       return Math.abs(ageDate.getUTCFullYear()-1970);
       


   }
   fullName(){
    console.log(this.firstName ,this.lastName);
   }

}




let people1 = new Person("Riyad" ,"Rahman" ,"11-13-1993");
let people2 = new Person("rafayet", "rakib", "12-12-1995");
let people3 = new Person("Asiq", "Rahman" ,"1-1-1997");

console.log(people1.calculateAge());
console.log(people2.calculateAge());
console.log(people3.calculateAge());


console.log(people1.fullName());
console.log(people2.fullName());
console.log(people3.fullName());