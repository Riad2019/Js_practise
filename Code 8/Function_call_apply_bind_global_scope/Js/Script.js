 

 function JogKoro ( peramitter ){

    return this.num + peramitter;
           



 }

 let Number = {

      num : 200

 }

 console.log( JogKoro.call(Number,20));
  console.log( JogKoro.apply(Number,[20]));
  let Answer=JogKoro.bind(Number,20)
   console.log(Answer() );