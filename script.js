const botao = document.querySelector(".button")
const resultadoAnimado = document.getElementById("resultadoAnimado");

function botaoClicado (){
  const inputEntre = Math.ceil (document.querySelector(".input-min").value  )
  const inputE = Math.floor (document.querySelector(".input-max").value)
  
 if(inputEntre>inputE){
    alert ("O valor inicial deve ser menor que o valor final")
    return
 }

 const numeroSorteado = Math.floor(Math.random() * (inputE - inputEntre + 1)) + inputEntre;

 resultadoAnimado.textContent = numeroSorteado;
 resultadoAnimado.classList.add("mostrar");
 
 
 setTimeout(() => {
     resultadoAnimado.classList.remove("mostrar");
   }, 90000);
 
}







botao.addEventListener("click", botaoClicado)