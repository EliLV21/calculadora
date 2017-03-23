var numero = [];
var resultado = [];

function mostrar(num){
  numero += num;
  document.getElementById("textoPantalla").value = numero;
};
function borrar(){
  document.getElementById("resultado").value = "";
  document.getElementById("textoPantalla").value = "";
};
function compute(){
	numero = eval(numero);
  document.getElementById("resultado").value = numero;
}
