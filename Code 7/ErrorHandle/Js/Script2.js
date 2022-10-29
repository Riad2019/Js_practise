


class NotFoundError extends Error {    // here  Error is built in .
     constructor(name,message){
        super(message);  // send message to built in Error object.
         this.Name = name;
    }
      toJSON(){
        let name = this.Name;
        let message = this.message;
        return{name,message};
      }

}

try{
    throw new NotFoundError('NotFoundError' ,'This user Not Found!' )     // send message to built in Error object

}
catch(err){
    if (err instanceof NotFoundError){  // is it NotFoundType error.
        console.log('ohh yeah');
    
    }
    else
    {
        console.log('ohh,no!')
    }
    console.log(err.toJSON());                 // those send messages which one we can send to built in.

}