var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");

for(var i = 0; i< pacientes.lenght ; i++){

var paciente = paciente[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;


if (!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
}
 if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
}

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}
}
function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
