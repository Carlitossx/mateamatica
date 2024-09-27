function calcular(){
    var txtnumber = document.getElementById('txtnumber')
    var resultado = document.getElementById('resultado')
    var number = Number(txtnumber.value)

    for (var contador = 1; contador <= 10; contador++){
        var tabuada = number * contador
        resultado.innerHTML += `<br> ${number} <i>x</i> ${contador} = <strong>${tabuada}</strong> <br>`
    }
}

/* Função para Limpar Texto Escrito */
function limpar(){
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
}