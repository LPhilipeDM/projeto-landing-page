var setaParaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaParaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex" 
    setaParaDireita.style ="display:none"
    SetaParaEsquerda.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    SetaParaEsquerda.style ="display:flex; margin-top:55px"
    Bruna.style ="display:none"
    setaParaDireita.style ="display:flex"
}