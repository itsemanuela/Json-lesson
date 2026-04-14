const email = document.getElementById("exampleInputEmail1");
const bottonechesalva = document.getElementById("saveBtn");
const bottonecherimuove = document.getElementById("removebtn");

//verifico i dati interni
const memoria = function () {
  let datiinterni = localStorage.getItem("memoria dati");
  if (datiinterni) {
    nuovoelemento.innerText = "il risultato è :" + datiinterni;
  } else {
    nuovoelemento.innerText = "non ci sono dati in memoria";
  }
};

//ora i bottone

bottonechesalva.addEventListener("click", function () {
  let datodainserire = email.value;
  localStorage.setItem("memoria dati", datodainserire);
  memoria();
});
bottonecherimuove.addEventListener("click", function () {
  let datodarimuovere = email.value;
  localStorage.removeItem("memoria dati");
  memoria();
});

// ora creo il quadro per appendere i dati

const nuovoelemento = document.createElement("p");
const form = document.querySelector("form");
form.appendChild(nuovoelemento);

nuovoelemento.style.marginTop = "40px";
nuovoelemento.style.backgroundColor = "blue";
nuovoelemento.style.padding = "50px";
nuovoelemento.style.color = "white";
nuovoelemento.style.fontSize = "40px";
memoria();
