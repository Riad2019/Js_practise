//object Method

let person = {
    firstName: 'John',
    secondName: 'Smith',
    birthDate:"19-02-1950",

    FullName: function (){ //Method
         return `${this.firstName} ${this.secondName}`
    }

}


console.log(person.firstName);
console.log(person.FullName());