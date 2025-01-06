const botaoSortear = document.querySelector(".button")


function gerandoNumeros(){
    const inputMin = Math.ceil (document.querySelector(".input-min").value)
    const inputMax = Math.floor(document.querySelector(".input-max").value)

    if(inputMax > inputMin){
        const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;
        alert (result)
    }
    else {
        alert("O valor minimo tem que ser MENOR que o valor maximo")
    }
    

}

botaoSortear.addEventListener("click", gerandoNumeros)

