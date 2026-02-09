document.addEventListener("DOMContentLoaded", function () {
  let orderForm = document.getElementById("order-Form");
  orderForm.addEventListener("submit", function (event) {
    let userEl = document.getElementById("user-El").value.trim();
    let emailEl = document.getElementById("email-El").value.trim();
    let passEl = document.getElementById("pass-El").value.trim();
    let conEl = document.getElementById("con-El").value.trim();
    let numEl = document.getElementById("num-El").value.trim();
    let dateEl = document.getElementById("date-El").value.trim();
    let pdateEl = document.getElementById("pdate-El").value.trim();
    let timeEl = document.getElementById("time-El").value.trim();
    let locEl = document.getElementById("loc-El").value.trim();

    if (
      !userEl ||
      !emailEl ||
      !passEl ||
      !conEl ||
      !numEl ||
      !dateEl ||
      !pdateEl ||
      !timeEl ||
      !locEl
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (userEl === "") {
      alert("fill username");
    }
    if (emailEl === "") {
      alert("fill email");
    }
    if (passEl === "") {
      alert("fill password");
    }
    if (dateEl === "") {
      alert("fill date");
    }
    if (timeEl === "") {
      alert("fill time");
    }
    if (conEl === "") {
      alert("fill confirm password");
    }
    if (locEl === "") {
      alert("fill location");
    }
    if (userEl === "") {
      alert("fill username");
    }
    if (numEl === "") {
      alert("fill number");
    }

    if (passEl !== conEl) {
      alert("Passwords do not match");
      return;
    }
  });
});
