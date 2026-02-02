/*
var a = 23;
var b = 45;
let sum = 0;
let diff = 0;
let div = 0;

function add() {
  sum = a + b;
}
function sub() {
  diff = a - b;
}

const multrrow = (a, b) => a * b;
const divrrow = (a, b) => {
  div = a / b;
  return div;
};

add();
sub();

console.log(sum);
console.log(diff);
console.log(multrrow(a, b));
console.log(divrrow(a, b));

let sumEl = document.getElementById("sum-El");
let btnEl = document.getElementById("btn-El");
sumEl.textContent = "sum: " + sum;

btnEl.addEventListener("click", function () {
  sumEl.textContent =
    "button is clicked so content changed from sum to sub: " + diff;
});
btnEl.addEventListener("click", function () {
  btnEl.style.backgroundColor = "blue";
  btnEl.style.fontSize = "50px;";
  sumEl.style.color = "red";
});
btnEl.addEventListener("click", function () {
  sumEl.classList.toggle("style1");
  sumEl.classList.toggle("style2");
});
*/
let firstname = prompt("what is your first name?");
let lastname = prompt("what is your last name?");
let conName = confirm(`${firstname} ${lastname}`);
alert(`welcome ${firstname} ${lastname}`);

var websiteName = "MyShoe";
const password = "sowmya";
/*let textForm = document.querySelector("#textForm");
textForm.addEventListener("submit", function (event) {
  event.preventDefault();
});*/

let user = document.querySelector("#user");
user.addEventListener("input", function () {
  userText.textContent = this.value;
});

console.log(password);
console.log(websiteName);
let type1 = 50;
let type2 = 30;
let income = 50000;
let budget = 30000;
console.log(`welcome to ${websiteName}  ${firstname}${lastname}`);
let nameEl = document.getElementById("name-El");
let sizeEl = document.getElementById("size-El");
let colorEl = document.getElementById("color-El");
let typeEl = document.getElementById("type-El");
let totalEl = document.getElementById("total-El");
let totalP = document.getElementById("totalP-El");
nameEl.textContent = `welcome to ${websiteName}  ${firstname}${lastname}`;
function details() {
  sizeEl.textContent = "6s";
  colorEl.textContent = "blue";
  typeEl.textContent = "heels";
}
details();
console.log(sizeEl);
console.log(colorEl);
console.log(typeEl);
let btnEl = document.getElementById("btn-El");
let btnEl1 = document.getElementById("btn-El1");
let userEl = document.getElementById("user-El");
let style1El = document.get;
let TotalPr;
const TotalProducts = (type1, type2) => {
  Total = type1 + type2;
  return Total;
};
const TotalProfit = (income, budget) => {
  TotalPr = income - budget;
  return TotalPr;
};

totalEl.textContent = "products are " + TotalProducts(50, 30);
totalP.textContent = "profit is " + TotalProfit(50000, 30000);
console.log(totalEl);
console.log(totalP);
let know = prompt("what is your requirements?");
alert("your requirements are: " + know);
let answer = confirm("Do you like MyShoe?");
alert("my answer is: " + answer);
btnEl.addEventListener("click", function () {
  totalEl.textContent = "all products sold";
  btnEl.style.backgroundColor = "pink";
  totalEl.style.color = "red";
  totalEl.style.fontSize = "30px";
  nameEl.classList.toggle("style1");
  nameEl.classList.toggle("style2");
});
btnEl.addEventListener("mouseover", function () {
  typeEl.style.backgroundColor = "lime";
  typeEl.style.color = "pink";
  btnEl.textContent = "mouseover";
});
btnEl.addEventListener("mouseout", function () {
  typeEl.style.backgroundColor = "orange";
  typeEl.style.color = "blue";
  btnEl.textContent = "mouseout";
});
// TASK 7: Form validation + submit event
let orderForm = document.getElementById("orderForm");
let formMsg = document.getElementById("formMsg");

orderForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  let orderName = document.getElementById("orderName").value;
  let orderQty = document.getElementById("orderQty").value;

  if (orderName === "" || orderQty === "") {
    formMsg.textContent = "Please fill all fields";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Order placed successfully by " + orderName;
    formMsg.style.color = "green";
    console.log("Form submitted");
  }
});
