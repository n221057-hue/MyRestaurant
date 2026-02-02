let fname = prompt("what is your firstname?");
let lname = prompt("what is your lastname?");
let conName = confirm(`${fname} ${lname}`);
console.log(fname);
console.log(lname);
console.log(`${fname} ${lname}`);
alert(`${fname} ${lname}`);
var websiteName = "Nandhu's kitchen";
const password = "sowmya";
let breakfastitems = 80;
let snackitems = 90;
let TotalEl = document.getElementById("Total-El");
let SignUPEl = document.getElementById("SignUP-El");

let nameEl = document.getElementById("name-El");
nameEl.textContent = `Welcome ${fname} ${lname}`;
function TotalItems(breaki, snack) {
  let Total = breaki + snack;
}
TotalItems(breakfastitems, snackitems);
TotalEl.textContent = `total items are ${Total}`;
SignUPEl.addEventListener(click, function () {
  alert("signup clicked");
});
