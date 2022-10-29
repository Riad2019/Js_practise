let data={

name : 'Riad',
email : 'riad@gmail.com',
phone : '019370999999'

}

localStorage.setItem('userInfo', JSON.stringify(data));  //set localstorage in userInfo which is convert object to string
//here data is is string.
let lsUserInfo = localStorage.getItem('userInfo');       //get data from localStorage
lsUserInfo = JSON.parse(data);
//here data is object.
console.log(lsUserInfo);
 //localStorage.clear(); //clear localStorage

sessionStorage.setItem('userInfo', JSON.stringify(lsUserInfo));   // convert object to string and set value to userInfo
sessionStorage.setItem('jwt',"dgdrt23t238edg3ger7823e48t23883dr87819y2y")
//let SsUserInfo = sessionStorage.getItem('userInfo');
console.log(sessionStorage.getItem('userInfo'));
console.log(sessionStorage.getItem('jwt'))