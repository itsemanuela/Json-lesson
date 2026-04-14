const email = document.getElementById("exampleInputEmail1");
const salvabtn = document.getElementById("saveBtn");
const removebtn = document.getElementById("removebtn");

//verifico dati presenti in memoria

const verifico = function () {
  let datiinmemoria = localStorage.getItem("dati presenti");
  if (datiinmemoria) {
    quadro.innerText = "ho trovato:" + "" + datiinmemoria;
  } else {
    quadro.innerText = "non c'è nulla";
  }
};

salvabtn.addEventListener("click", function () {
  let salvadati = email.value;
  localStorage.setItem("dati presenti", salvadati);
  verifico();
});

removebtn.addEventListener("click", function () {
  localStorage.removeItem("dati presenti");
  verifico();
});

const quadro = document.createElement("p");
quadro.style.marginTop = "50px";
quadro.style.backgroundColor = "blue";
quadro.style.color = "white";
quadro.style.fontSize = "30px";
quadro.innerText = "sono il form";
const form = document.querySelector("form");
form.appendChild(quadro);

verifico();
