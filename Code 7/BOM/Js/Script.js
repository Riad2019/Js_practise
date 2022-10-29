

var WindowManagement = function(open){
   let gmail;
    if(open){
      gmail= window.open("https://google.com",'_blank',"width=600,height=400");
    }

    else{
        gmail.close();
    }
   

}