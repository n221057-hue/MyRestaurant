document.addEventListener("DOMContentLoaded", function () {
  let orderForm = document.getElementById("order-Form");
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // let userEl = document.getElementById("user-El").value.trim();
    let emailEl = document.getElementById("email-El").value.trim();
    let passEl = document.getElementById("pass-El").value.trim();

    if (!emailEl || !passEl) {
      alert("Please fill all the fields");
      return;
    }
    if (emailEl === "") {
      alert("fill email");
    }
    if (passEl === "") {
      alert("fill password");
    }
  });
});
