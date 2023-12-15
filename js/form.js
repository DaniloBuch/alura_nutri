var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    //  ----   Previne que o evento use a ação padrão   

    event.preventDefault();
    
    //   ----   extrai valores do form quando clica o botao ---

    var form = document.querySelector("#form-adiciona");
    obtemPacienteDoFormulario (form);


    var erros = validaPaciente(paciente);

    //   ----     Cria a <Tr> e <Td> do paciente  e  Adiciona o paciente na tabela

    if(erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagens-erro");
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
});


function adicionaPacienteNaTabela (paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario (form) {

    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr (paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado,classe) {

    var td = document.createElement("td");
    td.textContent = dado
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente) {

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode estar em branco.")
    }
    if(!validaPeso(paciente.peso)){
        erros.push("O peso é invalido.");}

    if(!validaAltura(paciente.altura)){
    erros.push("Altura é invalida.");
    }

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode estar em branco.")
    }
    
    return erros;
}

function exibeMensagensDeErro (erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement ("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}
