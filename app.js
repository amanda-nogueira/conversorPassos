let passos, comprimento, distancia
function calcular() {
    passos = Number(frmPassos.inputPassos.value)
    comprimento = 0.76
    distancia = passos * comprimento
    frmPassos.txtResultado.value = distancia.toFixed(2)
    document.getElementById('passos').src = 'img/passos.png'
    return false
}
function limpar(){
    document.getElementById('passos').src = 'img/tenis-de-corrida.png'
}