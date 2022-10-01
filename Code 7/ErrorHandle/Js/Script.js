

console.log('Before Error');
try {
    //test();   //creating error
    undefined.test(); //
}
catch (err) {

    console.log(err);
    console.log(err.name);
    console.log(err.message);

}
finally{
    console.log('Jaa kori problem nai code ti cholbe');
}

console.log('After error');