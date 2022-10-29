var a;
a=10;//(no error)

const b;//we cannot change this value and its also initalized when we declear it
b=20; //(error)

const c=10; //(no error)
c=30; //(error)
console.log(c);