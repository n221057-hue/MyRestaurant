alert("Welcome to Food Haven");
let FirstName = prompt("What is your FirstName?");
let LastName = prompt("What is your LastName?");
let FullName = `${FirstName} ${LastName} `;
confirm(FullName);
alert(`WElcome to Food Haven ${FullName}`);
alert("You can order by OrderNow ,Watch our Popular Dishes,Chef's Specials");
let nameEl = document.getElementById("name-El");
let offEl = document.getElementById("off-El");
let ratEl = document.getElementById("rat-El");
let btnEl = document.getElementById("btn-El");
nameEl.textContent = `${FullName}`;
function order() {
  alert("Welcome to Menu Page");
}
btnEl.addEventListener("click", function (event) {
  ratEl.textContent = 5.5;
  offEl.textContent = "30% OFF";
});

document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll("strong");
  elements.forEach(function (el) {
    el.textContent = el.textContent.replace("20%", "30%");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelectorAll("del");
  element.forEach(function (el) {
    el.textContent = el.textContent.replace("₹150", "₹250");
  });
});
const reviewEl = document.getElementById("review-El");
const totalEl = document.getElementById("total-El");
const imgEl = document.getElementById("img-El");
const newImagePath = "clean.jfif";

imgEl.addEventListener("click", function (event) {
  imgEl.src = newImagePath;
});
reviewEl.addEventListener("mouseenter", () => {
  reviewEl.style.backgroundColor = "rgba(77, 61, 61, 0.23)";
});
reviewEl.addEventListener("mouseleave", () => {
  reviewEl.style.backgroundColor = "rgb(255,255,255)";
});
console.log(FullName);
let popular;
let special;
const TotalProducts = (popular, special) => {
  let Total = popular + special;
  return Total;
};
totalEl.innerHtml = "products are " + TotalProducts(8, 8);
