const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");
const submit = document.getElementById("submit");
// console.log(dateEl);

let countdownTitle = "";
let countdownDate = "";
//Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
// console.log(today);
dateEl.setAttribute("min", today);

//Take values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  console.log(e);
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
}

//Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
// console.log(countdownForm);
