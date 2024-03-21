
var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");

function alertar(event){
    //alert("Você clicou no botão!!!!" + event);
    saida.innerText = "Nome: " + nome.value;
}