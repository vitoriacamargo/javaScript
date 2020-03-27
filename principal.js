var  paciente  =  documento . querySelector ( "# primeiro-paciente" ) ;
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inv�lido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inv�lido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inv�lida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inv�lida";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}