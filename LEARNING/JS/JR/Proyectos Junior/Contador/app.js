function mas() {
  var value = parseInt(document.querySelector(".number").textContent);
  var number = document.querySelector(".number");

  value = value + 1;
  number.textContent = value;
}
function menos() {
  var value = parseInt(document.querySelector(".number").textContent);
  var number = document.querySelector(".number");

  value = value - 1;
  number.textContent = value;
}
function reset() {
  var value = parseInt(document.querySelector(".number").textContent);
  var number = document.querySelector(".number");

  value = 0;
  number.textContent = value;
}
