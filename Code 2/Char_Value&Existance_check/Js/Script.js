

let text = "he is a good boy, wow";

console.log(text);
console.log(text.charAt(10));
console.log(text.charCodeAt(2));//return unicode
console.log(text.split(''));
console.log(text.split(' '));
console.log(text.split(','));


//string.indexof('searchingitem' , start searching of index number)
console.log(text.indexOf('i'));  //its searching first to last index

//string.lastIndexof('searchingitem' , start searching of index number)
console.log(text.lastIndexOf('i'));    //its searching last to first index

let food =['Rice','Dal','Mango','water','biriyani','borhani','water']
console.log(food);

console.log(food.indexOf('water'));
console.log(food.indexOf('water', 2));
console.log(food.lastIndexOf('water'));