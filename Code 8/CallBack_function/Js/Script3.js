function prothomkaj1 (){
       console.log("working 1st one")
         ditiokaj1() 
}

function ditiokaj1 (){
    console.log("working 2nd")
    tritio1();
}

function tritio1 (){
    console.log("this code is running after first and second function working.")
}


setTimeout(
    ()=>{
        // prothomkaj1( {name: 'riad' , email: 'mrahman@binaryquest.com'})
        prothomkaj1()
    }
    ,2000)


document.getElementById('ClickKoro').addEventListener('click', ()=>{
          console.log("Moja paiso??")
})