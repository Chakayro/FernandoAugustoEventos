calcular.addEventListener("click", (e) => {
    e.preventDefault();
    let peso = document.getElementById("validationDefault02").value;
    let altura = document.getElementById("validationDefault01").value;
    let imc = peso / (altura / 100) ** 2;
    let resultado = document.getElementById("exampleFormControlInput3");
    resultado.placeholder = imc.toFixed(2);
  });                                              // dolar

  let dolarPeso = document.getElementById("validationDefault04");

  dolarPeso.addEventListener("keyup", (event) => {
    let peso = document.getElementById("validationDefault05").value = "";
    let dolar = event.target.value;
    dolar = dolar * 17.8;
    let resultado = document.getElementById("validationDefault05");
    resultado.placeholder = dolar.toFixed(2);
  });
  
  let pesoDolar = document.getElementById("validationDefault05");
  pesoDolar.addEventListener("keyup", (event) => {
    let dolar = document.getElementById("validationDefault04").value = "";
    let peso = event.target.value;
    peso = peso / 17.8;
    let resultado = document.getElementById("validationDefault04");
    resultado.placeholder = peso.toFixed(2);
  });










  let resetForm = document.getElementById("reset");
  resetForm.addEventListener("click", (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulos").value = "";
    let texto = document.getElementById("exampleFormControlTextarea1").value = "";
  });







  

  let tarjeta = document.getElementsByClassName("card");
  let copia = tarjeta[0];
  let num = 1
  let toggle = false

  while (num === 1) {
    num++
    let copia2 = copia.cloneNode(true);
    let nuevasTarjetas = copia2;
    nuevasTarjetas.querySelector("h5").innerHTML = "Tercera nota";
    nuevasTarjetas.querySelector("ol").remove();
    nuevasTarjetas.querySelector("button").removeAttribute("disabled");
    let parrafo = document.createElement('p')
    parrafo.setAttribute("class", "card-text")
    nuevasTarjetas.querySelector(".pb-4").appendChild(parrafo).innerHTML = "que tal";
    copia = nuevasTarjetas;
    console.log("hola");

  }

  console.log(copia);

  let crearForm = document.getElementById("guardar");
  crearForm.addEventListener("click", (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulos").value;
    let texto = document.getElementById("exampleFormControlTextarea1").value;
    if (titulo === "" || texto === "") {
      alert("Debe completar todos los campos");
    } else {
      let copia2 = copia.cloneNode(true);
      let nuevasTarjetas = document.getElementById("tarjetas").appendChild(copia2); 
      nuevasTarjetas.setAttribute("id", num);
      nuevasTarjetas.querySelector("h5").innerHTML = titulo;
      nuevasTarjetas.querySelector("p").innerHTML = texto;
      nuevasTarjetas.querySelector("label").setAttribute("for", "cB"+num);
      nuevasTarjetas.querySelector("input").setAttribute("id", "cB"+num);
      nuevasTarjetas.querySelector("label").innerHTML = num;
        let reseTitulo = document.getElementById("titulos").value = "";
        let reseTextoa = document.getElementById("exampleFormControlTextarea1").value = "";
        console.log(nuevasTarjetas);
        num++
    }
  });

  let rayarTitulo = document.getElementsByClassName("card");
  for (let i = 0; i < rayarTitulo.length; i++) {

    rayarTitulo[i].addEventListener("click", (e) => {
      let titulo = e.target.closest(".card").querySelector(".toggle");
      titulo.classList.toggle("rayado");
      console.log("rayado");
    });
  }
