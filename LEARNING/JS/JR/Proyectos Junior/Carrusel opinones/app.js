const reviews = [
  {
    id: 1,
    name: "Antonio",
    job: "desarollador junior",
    text: "Está bien",
  },
  {
    id: 2,
    name: "Miguel",
    job: "desarollador senior",
    text: "Está mal",
  },
  {
    id: 3,
    name: "Alba",
    job: "desarollador pro",
    text: "Está regular",
  },
  {
    id: 4,
    name: "Garcia",
    job: "desarollador proaso",
    text: "Está regulin",
  },
];

///////////////////////
/////// STARTER
document.addEventListener("DOMContentLoaded", function name() {
  var autor = document.querySelector(".autor");
  var trabajo = document.querySelector(".trabajo");
  var info = document.querySelector(".info");

  const btn_next = document.querySelector(".next");
  const btn_random = document.querySelector(".random");
  const btn_prev = document.querySelector(".prev");

  ////

  function randomNumber() {
    let cant = reviews.length;
    let number = Math.floor(Math.random() * cant);
    return number;
  }
  ////

  var currentItem = 0;
  const item = reviews[currentItem];

  autor.textContent = item.name;
  trabajo.textContent = item.job;
  info.textContent = item.text;

  ///

  ///////////////////////////////////////////////////

  btn_next.addEventListener("click", function name() {
    var autor = document.querySelector(".autor");
    var trabajo = document.querySelector(".trabajo");
    var info = document.querySelector(".info");
    if (currentItem >= reviews.length - 1) {
      currentItem = 0;
    } else {
      currentItem++;
    }
    const item = reviews[currentItem];

    autor.textContent = item.name;
    trabajo.textContent = item.job;
    info.textContent = item.text;
  });

  btn_prev.addEventListener("click", function name() {
    var autor = document.querySelector(".autor");
    var trabajo = document.querySelector(".trabajo");
    var info = document.querySelector(".info");
    if (currentItem <= 0) {
      currentItem = reviews.length - 1;
    } else {
      currentItem--;
    }
    const item = reviews[currentItem];

    autor.textContent = item.name;
    trabajo.textContent = item.job;
    info.textContent = item.text;
  });

  btn_random.addEventListener("click", function name() {
    var autor = document.querySelector(".autor");
    var trabajo = document.querySelector(".trabajo");
    var info = document.querySelector(".info");

    const item = reviews[randomNumber()];

    autor.textContent = item.name;
    trabajo.textContent = item.job;
    info.textContent = item.text;
  });
});
