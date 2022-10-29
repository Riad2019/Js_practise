// Static Function

class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }

    static test() {
        console.log("I am staic!");
    }
}

let person1 = new Person("Riyad", "Rahman");

console.log(person1.greeting());
console.log(Person.test());   // we can access static funtion ,only call class with staic funtion