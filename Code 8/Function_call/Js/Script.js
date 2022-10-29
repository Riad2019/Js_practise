// function call 



const mobilePhone = {
   vaberText: function(madeIn,design){

    return `Amar Mobile ${this.brand} er ${this.model}.Made in ${madeIn}. Design in ${design} `



   }


}

const Iphone = {
    brand: "Iphone",
    model: "13"
}
console.log(mobilePhone.vaberText.call(Iphone,'Gulistan','Singapore'));