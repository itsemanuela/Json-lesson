const email = document.getElementById("exampleInputEmail1");
const salvabtn = document.getElementById("saveBtn");
const removebtn = document.getElementById("removebtn");

//verifico dati presenti in memoria

const verifico = function () {
  let datiinmemoria = localStorage.getItem("dati presenti");
  if (datiinmemoria) {
    console.log("ho trovato" + datiinmemoria);
  } else {
    console.log("non ho trovato niente");
  }
};

salvabtn.addEventListener("click", function () {
  let salvadati = email.value;
  localStorage.setItem("dati presenti", salvadati);
  verifico();
});
