//katakati 

let Ketefelbo= "Toke ami kete felbo";
//string.slice(start , end);

console.log('slice');
console.log(Ketefelbo.slice(5, 19)); //started after 5 and end 19th number. 

//string.substring(start , end);

console.log("substring");
console.log(Ketefelbo.substring(5 , 19)); // Same ad like slice .


//string.substr(start , after start total number print ) 

console.log('substr');
console.log(Ketefelbo.substr(5,14))

//string replacement

//string.replace(KakeKatbo, kiDharaReplaceKorbo)

let jomiRegestry = "Sona mia kemon acho . eita Sona mia r Jomi";
console.log(jomiRegestry);
// i = using i flag does not effect any Case sensitive issue .but replace at a time one word.

let RevisedJomiRegester = jomiRegestry.replace(/sona/i, "lal");
console.log(RevisedJomiRegester);
//g = using g flag is case sensitive. but its replace globally . Means all those word.
let RevisedJomiRegester1 = jomiRegestry.replace(/Sona/g, "lal");
console.log(RevisedJomiRegester1);