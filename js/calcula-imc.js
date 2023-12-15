
var titulo = document.querySelector("h1")

var pacientes = document.querySelectorAll(".paciente");

// calcular o IMC e confirmar se o peso e altura estão corretos

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        console.log("Altura inválida");
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValido && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}


// calcular o IMC e confirmar se o peso e altura estão corretos


//   titulo.addEventListener("click", function(){
//      console.log("Olá sou uma função anonima")
//   }); 


//    função para "escutar" um evento, neste caso o click


function calculaImc (peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso (peso) {
    if(peso > 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3.0 ){
        return true;
    } else {
        return false;
    }
}