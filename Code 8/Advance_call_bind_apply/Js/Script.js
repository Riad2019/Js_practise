
//call
function Product(Title,Sku,Price){

   this.title = Title;
   this.sku = Sku;
   this.price=Price;
   this.info = function(){

    return `Product Er nam Hocche ${this.title} and product er Barcode ${this.sku} . product ${this.price}tk`
   }


}


function Cosmetic (Title,Sku,Price){
    Product.call(this,Title,Sku,Price);

}
function Genji (Title,Sku,Price){
    Product.call(this,Title,Sku,Price);
}

let lipstick = new Product('lipLocker','E545454654Call',499);
console.log(lipstick);
console.log(lipstick.info());

let rupaGenji = new Product('Rupa Soft', 'I43567865Call', 199);
console.log(rupaGenji);
console.log(rupaGenji.info());
