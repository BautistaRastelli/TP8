botonDark=document.querySelector("#modoOscuro")
botonLargerSize=document.querySelector("#largerSize")
botonSmallerSize=document.querySelector("#smallerSize")

//funciones
function SwitchMode (){
    document.querySelector("body").classList.toggle("bg-fair")
    document.querySelector("p").classList.toggle("textoBlanco")
}

function SwitchButton (){
    botonDark.classList.toggle("bg-dark")
}

function LargerSize (){
    document.querySelector("h2").classList.toggle("largerSize")
    document.querySelector("#modoPantalla").classList.toggle("largerSize")
    document.querySelector("#fuente").classList.toggle("largerSize")
    document.querySelector("#smallerSize").classList.toggle("largerSize")
    document.querySelector("#largerSize").classList.toggle("largerSize")
    document.querySelector("#parrafo").classList.toggle("largerSize")
    document.querySelector("#modoOscuro").classList.toggle("largerSize")
}

function SmallerSize (){
    document.querySelector("h2").classList.toggle("smallerSize")
    document.querySelector("#modoPantalla").classList.toggle("smallerSize")
    document.querySelector("#fuente").classList.toggle("smallerSize")
    document.querySelector("#smallerSize").classList.toggle("smallerSize")
    document.querySelector("#largerSize").classList.toggle("smallerSize")
    document.querySelector("#parrafo").classList.toggle("smallerSize")
    document.querySelector("#modoOscuro").classList.toggle("smallerSize")
}


botonDark.addEventListener("click", SwitchMode)
botonDark.addEventListener("click", SwitchButton)
botonLargerSize.addEventListener("click", LargerSize)
botonSmallerSize.addEventListener("click", SmallerSize)