const user={
    name: 'Riad Rahman',
    NamDekhao : function(){
      console.log(this.name);

    }

}

let CheckUser = user.NamDekhao.bind(user);   //user and NameDekhao Object ta bind kore ditesi 

//console.log(CheckUser());

setTimeout(CheckUser , 5000);