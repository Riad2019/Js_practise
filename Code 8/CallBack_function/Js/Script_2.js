function prothomkaj (obj,obj1){

      ditiokaj(obj.name,obj.email,obj1.phone)    
}

function ditiokaj (obj,obj1,obj2){
    console.log(obj,obj1, obj2)
}

prothomkaj({name: 'riad' , email: 'mrahman@binaryquest.com'},{phone: '0193709****'})

// setTimeout(
//     ()=>{
//         prothomkaj(ditiokaj, {name: 'riad' , email: 'mrahman@binaryquest.com'})
//     }
//     ,2000)