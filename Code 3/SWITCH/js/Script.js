alert("select an option:\n a. Option 1\n b. Option 2\n c. Option 3");
console.log("select an option:\n a. Option 1\n b. Option 2\n c. Option 3");

var choice = prompt();

switch (choice) {
     case "a":
        text = "you have selected option 1";
        break;
      case "b":
        text ="you have selected option 2";
        break;
       case "c":
        text ="you have selected option 3";
        break;
    default:
        text ="No option selected";


}
console.log(text);
alert(text);