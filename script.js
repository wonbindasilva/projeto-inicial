
var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var comp = document.getElementById("comp");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var uf = document.getElementById("uf");

function alertar(event){
    //alert("Você clicou no botão!!!!" + event);

    const url = `http://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
        .then (function (resposta) {
            return resposta.json()
    })
        .then(function (dados){
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            uf.value = dados.uf;
    })

}

function saidaDeDados(){
    saida.innerText = "Nome: " + nome.value +
            "\n Email: " + email.value +
            "\n Telefone: " + telefone.value +
            "\n CEP: " + cep.value +
            "\n Logradouro: " + logradouro.value +
            "\n Numero: " + numero.value +
            "\n Complemento: " + comp.value +
            "\n Bairro: " + bairro.value +
            "\n Cidade: " + cidade.value +
            "\n Estado:" + uf.value;
}