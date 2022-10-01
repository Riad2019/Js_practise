function Calculator(){
     this.results = 0;

     this.add=function(newNumber){
        this.results += newNumber;
           return this;
     }

     this.subStruct=function(newNumber){
        this.results -= newNumber;
        return this;
     }
    this.getResults =function(){
        return this.results;
    }

     
}

let newCalculator =new Calculator();

console.log(newCalculator.add(10).add(20).add(50).subStruct(20).add(10).getResults());
