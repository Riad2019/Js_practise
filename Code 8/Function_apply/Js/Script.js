const mobilePhone = {
   vaberText: function(madeIn,design){

    return `Amar Mobile ${this.brand} er ${this.model}.Made in ${madeIn}. Design in ${design} `



   }


}

const Iphone = {
    brand: "Iphone",
    model: "13"
}
console.log(mobilePhone.vaberText.apply(Iphone,['Gulistan','Singapore'])); // lool like call function . but here using value pass


let panirBottle =[ 'mom', 'aquafina' ]

panirBottle.push.apply(panirBottle,['fresh','kinley', 'jibon'])
console.log(panirBottle)