let indice = 0;
let letras = document.querySelectorAll(".letra");
let preguntas = [
  "Empieza por A: País más grande de América del Sur",
  "Empieza por B: País europeo cuya capital es Bruselas",
  "Empieza por C: País asiático con la mayor población del mundo",
  "Empieza por D: País europeo con capital en Copenhague",
  "Empieza por E: País africano famoso por sus pirámides",
  "Empieza por F: País europeo conocido por la Torre Eiffel",
  "Empieza por G: País europeo cuya capital es Atenas",
  "Empieza por H: País europeo cuya capital es Budapest",
  "Empieza por I: País europeo con forma de bota",
  "Empieza por J: País asiático conocido como el imperio del sol naciente",
  "Empieza por K: País de Asia Central cuya capital es Astaná",
  "Empieza por L: País europeo que es un Gran Ducado",
  "Empieza por M: País norteamericano famoso por sus tacos y mariachis",
  "Empieza por N: País europeo famoso por sus fiordos y auroras boreales",
  "Contiene la Ñ: País europeo donde se habla español",
  "Contiene la O: País del norte de África cuya capital es Rabat",
  "Empieza por P: País sudamericano cuya capital es Lima",
  "Empieza por Q: País árabe que organizó el mundial de fútbol 2022",
  "Empieza por R: El país más extenso del mundo",
  "Empieza por S: País europeo cuya capital es Berna",
  "Empieza por T: País asiático famoso por sus templos y elefantes",
  "Empieza por U: País sudamericano cuya capital es Montevideo",
  "Empieza por V: País sudamericano con las mayores reservas de petróleo",
  "Contiene la X: País norteamericano (su nombre lleva la x)",
  "Contiene la Y: País africano cuya capital es Trípoli",
  "Empieza por Z: País africano cuya capital es Lusaka"
];

let respuestasCorrectas = [
  "argentina", // A
  "belgica",   // B
  "china",     // C
  "dinamarca", // D
  "egipto",    // E
  "francia",   // F
  "grecia",    // G
  "hungria",   // H
  "italia",    // I
  "japon",     // J
  "kazajistan",// K
  "luxemburgo",// L
  "mexico",    // M
  "noruega",   // N
  "españa",    // Ñ
  "marruecos", // O
  "peru",      // P
  "qatar",     // Q
  "rusia",     // R
  "suiza",     // S
  "tailandia", // T
  "uruguay",   // U
  "venezuela", // V
  "mexico",    // X
  "libia",     // Y
  "zambia"     // Z
];
letras.forEach((letra, i) => {
  let angulo = (360 / letras.length) * i - 90;

  letra.style.transform = 
    "rotate(" + angulo + "deg) translate(150px) rotate(" + (-angulo) + "deg)";
});

function normalizar(texto) {
  return texto
    .toLowerCase()
    .trim()
    .normalize("NFD") // separa letras y tildes
    .replace(/[\u0300-\u036f]/g, ""); // elimina tildes 
}
function activarLetra() {
  letras.forEach(l => l.classList.remove("activa"));
  letras[indice].classList.add("activa");
   document.getElementById("pregunta").textContent = preguntas[indice];
}

function comprobar() {
  let respuesta = normalizar(document.getElementById("respuesta").value);
  let correcta = normalizar(respuestasCorrectas[indice]);
  let mensajeDiv = document.getElementById("mensaje");
  if(respuesta === correcta) {
    mensajeDiv.textContent = "¡Correcto! ✅";
    letras[indice].style.backgroundColor = "green";
  } else {
  mensajeDiv.textContent = "Incorrecto ❌, la respuesta era: " + correcta;
    letras[indice].style.backgroundColor = "red";
  }
  indice++;
  if (indice >= letras.length) indice = 0;

  activarLetra();  
  //limpia el input
  document.getElementById("respuesta").value = "";
  setTimeout(() => { mensajeDiv.textContent = ""; }, 4000);
}

function pasar() {
  indice++;
  if (indice >= letras.length) indice = 0;

  activarLetra();
}

// activar la primera al cargar
activarLetra();
