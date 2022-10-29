//apply
function Product(Title,Sku,Price){

   this.title = Title;
   this.sku = Sku;
   this.price=Price;
   this.info = function(){

    return `Product Er nam Hocche ${this.title} and product er Barcode ${this.sku} . product price ${this.price}tk`
   }


}


function Cosmetic (Title,Sku,Price){
    let ProductInfo = [Title,Sku,Price];
    Product.apply(this,ProductInfo);

}

function Ganji (ProductInfo){
    Product.apply(this,ProductInfo);
}

let Lipstick = new Cosmetic('Glossy', 'J37434387Apply',999);

console.log(Lipstick);
console.log(Lipstick.info());

let RupaGenji= new Genji('Rupa', 'U476567465Apply', 250);
console.log(RupaGenji);
console.log(RupaGenji.info());