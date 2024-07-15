// calcular.addEventListener("click", () => {
//   let peso = document.getElementById("validationDefault01").value;
//   let altura = document.getElementById("altura").value;
//   let imc = peso / (altura / 100) ** 2;
//   let resultado = document.getElementById("resultado");
//   resultado.innerHTML = imc.toFixed(2);
// });
calcular.addEventListener("click", (e) => {
    e.preventDefault();
    let peso = document.getElementById("validationDefault02").value;
    let altura = document.getElementById("validationDefault01").value;
    let imc = peso / (altura / 100) ** 2;
    let resultado = document.getElementById("exampleFormControlInput3");
    resultado.placeholder = imc.toFixed(2);
  });
  
  
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
  
  let notitas = document.getElementById("guardar");
  notitas.addEventListener("click", (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulos").value;
    let texto = document.getElementById("exampleFormControlTextarea1").value;
    let titulos = document.getElementById("titulos").value = "";
    let textoa = document.getElementById("exampleFormControlTextarea1").value = "";
  }
  );
  let resetNotas = document.getElementById("borrar");
  resetNotas.addEventListener("click", (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulos").value = "";
    let texto = document.getElementById("exampleFormControlTextarea1").value = "";
  });
  
  // let notas = {
  //   id: 0,
  //   titulo: "",
  //   texto: "",
  //   realizado: false,
  
  // }
  
  
  // let calc = false;
  // calcular.addEventListener("click", (e) => {
    
  //   let peso = document.getElementById("validationDefault02").value;
  //   let altura = document.getElementById("validationDefault01").value;
  //   let imc = peso / (altura / 100) ** 2;
  //   calc = true;
    
  // });
  
  // if (calcular.calc) {
  //   let resultado = document.getElementById("exampleFormControlInput3");
  //   console.log(resultado);
  // }