
// Array iteration using Mapping

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];



let arr_map = function(item){
    return `item is ${item}`

}
var arr1_map =foods.map(arr_map);
console.log(arr1_map);

//Square number
function Square(num){
    return num*num;


}
var sqr_num =numbers.map(Square);
console.log(sqr_num);
