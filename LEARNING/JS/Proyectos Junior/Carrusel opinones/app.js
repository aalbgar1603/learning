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

var autor = document.querySelector("autor");
var trabajo = document.querySelector("trabajo");
var info = document.querySelector("info");
var item = reviews[1];
autor.textContent = item.name;
trabajo.textContent = item.job;
info.textContent = item.text;
