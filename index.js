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
  let tarjeta1 = tarjeta[0];
  let tarjeta2 = tarjeta[1];
  let primera  = tarjeta[2];
  let num =2
  let toggle = false
  let pruebs = false

  
  let tarjetasArray = [
{id: 0, titulo: "Primera nota", texto: "Esta es otra nota de prueba El boton de Borrar nota esta deshabilitado EL boton ID # es un checkbox", realizado: false},
{id: 1, titulo: "Segunda nota", texto: "Esta es otra nota de prueba El boton de Borrar nota esta deshabilitado EL boton ID # es un checkbox", realizado: false},
  ]

  while (tarjeta.length > 0) {
    tarjeta[0].parentNode.removeChild(tarjeta[0]);
  }

  do {
    let copia2 = tarjeta1.cloneNode(true);
    let nuevasTarjetas = document.getElementById("tarjetas").appendChild(copia2); 
    copia2= tarjeta2.cloneNode(true);
    nuevasTarjetas = document.getElementById("tarjetas").appendChild(copia2);
  } while (tarjeta.length === 0);


  let crearForm = document.getElementById("guardar");
  crearForm.addEventListener("click", (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulos").value;
    let texto = document.getElementById("exampleFormControlTextarea1").value;
    if (titulo === "" || texto === "") {
      alert("Debe completar todos los campos");
    } else {
      let copia2 = primera.cloneNode(true);
      let nuevasTarjetas = document.getElementById("tarjetas").appendChild(copia2); 
      nuevasTarjetas.setAttribute("id", num);
      nuevasTarjetas.querySelector("h5").innerHTML = titulo;
      nuevasTarjetas.querySelector("p").innerHTML = texto;
      nuevasTarjetas.querySelector("label").setAttribute("for", "cB"+num);
      nuevasTarjetas.querySelector("input").setAttribute("id", "cB"+num);
      nuevasTarjetas.querySelector("label").innerHTML = num;
        let reseTitulo = document.getElementById("titulos").value = "";
        let reseTextoa = document.getElementById("exampleFormControlTextarea1").value = "";
        num++
    }
  });



  let cheboxSubrayarTexto = document.getElementById("tarjetas");
  cheboxSubrayarTexto.addEventListener("click", (e) => {
    let check = e.target;
    if (check.type === "checkbox") {
      let tarjeta = check.parentElement.parentElement.parentElement.parentElement;
      tarjeta.querySelector("h5").classList.toggle("text-decoration-line-through");
      if (tarjeta.querySelector("p")) {
        tarjeta.querySelector("p").classList.toggle("text-decoration-line-through");
      } else {   
        tarjeta.querySelector("ol").classList.toggle("text-decoration-line-through");
      }
    }
  });

