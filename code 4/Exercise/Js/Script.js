var n = parseInt(prompt("enter Your number"));
var sum =0;
var series="";


for (var i = 1; i <= n; i++){
    
    sum += i**2;
    series +=(i**2).toString();
    if(i==n){continue;}

    series += " + ";

    
}
console.log(`${series}= ${sum}`);

