const botao = document.querySelector(".button")
const audio = new Audio ("./assets/ding.mp3")  // Caminho do arquivo de som


function generateNumber(){

const min = Math.ceil (document.querySelector(".input-min").value)
const max = Math.floor (document.querySelector(".input-max").value)
const resultadoAnimado = document.querySelector("#resultadoAnimado");

// Verifica se os valores são válidos
if(isNaN(min) || isNaN(max) || min>=max){
   alert("Por favor, insira valores válidos (o mínimo deve ser menor que o máximo).");
   return;
}

 const result =  Math.floor(Math.random() * (max - min + 1)) + min;

 // Toca o som
 audio.play();



 // Atualiza o conteúdo da div e exibe com animação
 resultadoAnimado.textContent = result;
 resultadoAnimado.classList.add("mostrar");

 // Remove a classe após 3 segundos para esconder o número depois
 setTimeout(() => {
   resultadoAnimado.classList.remove("mostrar");
}, 60000);

}







botao.addEventListener("click",generateNumber)