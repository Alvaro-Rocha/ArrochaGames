
function exibeM() {
    
    document.getElementById("imgMemoria").style.backgroundImage = "url('img/zoomMemoria.png')"
}
function exibeV() {

}
function ocultaM() {

}
function ocultaV() {

}

function pesquisar() {
    var busca = document.getElementById("buscar").value
    if (busca == "memoria" || busca == "Memoria" || busca == "Memória" || busca == "memória" || busca == "jogo da memoria" || busca == "Jogo da Memoria" || busca == "jogo da Memoria" || busca == "Jogo da Memória" || busca == "jogo da Memória" || busca == "jogo da memória") {
        document.getElementById("memoria").style.display = "block"
        document.getElementById("velha").style.display = "none"


    }
    if(busca == "Velha" || busca == "velha" || busca == "Jogo da Velha" || busca == "jogo da Velha" || busca == "jogo da velha" || busca == "jogoVelha" || busca == "JogoVelha") {
        document.getElementById("velha").style.display = "block"
        document.getElementById("memoria").style.display = "none"
    }

    if(busca.length == 0){
        document.getElementById("memoria").style.display = "block"
        document.getElementById("velha").style.display = "block"
    }

}


