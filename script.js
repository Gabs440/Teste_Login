function validalogin(){

var usuario = "admin";
var senha = "admin";
var recebeu_login = document.getElementById("login").value;
var recebeu_senha=document.getElementById("senha").value;
if ((usuario == recebeu_login)&&(senha == recebeu_senha)){
window.location.href ="tela_de_login.html";
}
else{
alert("Dados incorretos.Entre com o nome do usuario e senha!");
}
}