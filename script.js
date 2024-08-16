let formulario = document.getElementById("formularioIMC");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const altura = parseFloat(document.getElementById("altura").value) / 100;
  const peso = parseFloat(document.getElementById("peso").value);

  if (altura > 0 && peso > 0) {
    const imc = peso / (altura * altura);
    let textoResultado = `Tu IMC es ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
      textoResultado += "Estás bajo de peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
      textoResultado += "Tienes un peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
      textoResultado += "Estás en sobrepeso.";
    } else {
      textoResultado += "Tienes obesidad.";
    }

    resultado.innerText = textoResultado;
  } else {
    resultado.innerText = "Por favor ingresa valores válidos.";
  }
});
