const botao = document.querySelector(".button")

function botaoClicado (){
  const inputEntre = Math.ceil (document.querySelector(".input-min").value  )
  const inputE = Math.floor (document.querySelector(".input-max").value)
  
 if(inputEntre>inputE){
    alert ("O valor inicial deve ser menor que o valor final")
    return
 }

 const numeroSorteado = Math.floor(Math.random() * (inputEntre - inputE + 1)) + inputE;
 alert (numeroSorteado)
}






botao.addEventListener("click", botaoClicado)