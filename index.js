//      ::NO METHOD CHAINING::
let userName=window.prompt("Enter your username:");
// userName=userName.trim();
// let letter=userName.charAt(0);
// letter=letter.toUpperCase();
// let extraCharacters=userName.slice(1);
// extraCharacters=extraCharacters.toLowerCase();
// userName=letter+extraCharacters;
// console.log(userName);

// ---------METHOD CHAINING----------
 userName=userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);