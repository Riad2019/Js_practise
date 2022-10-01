const mobilePhone = {
   vaberText: function(madeIn,design){

    return `Amar Mobile ${this.brand} er ${this.model}.Made in ${madeIn}. Design in ${design} `



   }


}

const Iphone = {
    brand: "Iphone",
    model: "13"
}

let PhoneDetails =mobilePhone.vaberText.bind(Iphone , 'Gulistan' , 'Usa'); // lool like call function . but here using value pass

console.log(PhoneDetails());