let name=['rafayet', 'riyad','ashiq','rifat'];


//adding new item in name array

let adding =name.push('rakib');
console.log(adding);  //return length
console.log(name); //return array length

let newitem = name.unshift('rishad'); //run time consuming.all index shifting
console.log(newitem); //return length
console.log(name); //return array length


let removed = name.pop(); //if we didn't tell item name then its remove last item of array .
console.log(removed); //return removed item value
console.log(name); //return array.

let newitem1 = name.shift();   //if we didn't tell item name then its remove fist item of array .
console.log(newitem1); //return removed item value.
console.log(name); //return array.

//splice
//splice(which number of index we want add, after adding index number to delete how much index, "which value we want to add")
name.splice(3 , 0, "momtaj","rashed");
console.log(name); //return array.

//slice
//slice(starting index, ending index)
let katakati= name.slice(3, name.length);
console.log(katakati);
console.log(name); //return array


//string presentation of

console.log(name.toString()); //normal string print
console.log(name.join(' - ')); //we can change output string style 


