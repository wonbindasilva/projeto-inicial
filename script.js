
var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var log = document.getElementById("log");
var num = document.getElementById("num");
var comp = document.getElementById("comp");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var uf = document.getElementById("uf");

function alertar(event){
    //alert("Você clicou no botão!!!!" + event);

    const url = `http://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
    .then(resposta=>resposta.json())
    .then(dados=>alert(dados.bairro))

    saida.innerText = "Nome: " + nome.value +
            "\n Email: " + email.value +
            "\n Telefone: " + telefone.value +
            "\n CEP: " + cep.value +
            "\n Logradouro: " + log.value +
            "\n Numero: " + num.value +
            "\n Complemento: " + comp.value +
            "\n Bairro: " + bairro.value +
            "\n Cidade: " + cidade.value +
            "\n Estado:" + uf.value;

}