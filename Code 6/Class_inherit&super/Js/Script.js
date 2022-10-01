class MobilePhone{
     constructor( Brand, Model){
        this.brand=Brand;
        this.model=Model;

     }

     getBrand(){
        return this.brand;
     }
      getModel(){
        return this.model;
      }

}

class smartphone extends MobilePhone{

     constructor( Brand, Model, videoCall){
        super(Brand, Model);
        this.VideoCall=videoCall;
     }


}
let IsSmartphone = new smartphone("nokia","1100","Disable");
console.log(IsSmartphone);
console.log(IsSmartphone.brand);