/* Função para Calcular Função Afim */

function calc(){
    var resposta = document.getElementById('resposta')
    var operacao = document.getElementById('operacao')
    var value = operacao.options[operacao.selectedIndex].value;
    var txta = document.getElementById('txta')
    var txtb = document.getElementById('txtb')
    var a = Number(txta.value)
    var b = Number(txtb.value)

/* Função Crescente ou Decrescente / Coeficiente Linear */
    if (a > 0){
        resposta.innerHTML += `<br>Função <strong>Crescente</strong><br> Coeficiente Linear: ${b}<br>`
    } else{
        resposta.innerHTML += `<br>Função <strong>Decrescente</strong><br> Coeficiente Linear: ${b}<br>`
    }
    
/* Condição caso valor de B estiver negativo */
    if (b < 0){
        resposta.innerHTML = `[ERRO]: Não coloque o valor de B negativo. Use o selecionamento de Mais ou Menos.`
        resposta.style.color = 'red'
    } else if (value == "mais"){
        for (var contador = -3; contador <= 3; contador++){
            var y = (a * contador) + b
            resposta.style.color = 'black'
            resposta.innerHTML += `<br> X = <strong>${contador}</strong> || Y = <strong>${y}</strong> <br>`
        }
    } else {
        for (var contador = -3; contador <= 3; contador++){
            var y = (a * contador) - b
            resposta.style.color = 'black'
            resposta.innerHTML += `<br> X = <strong>${contador}</strong> || Y = <strong>${y}</strong> <br>`
        }
    }
}



/* Função para Limpar Texto Escrito */

function limpar(){
    resposta.innerHTML = ''
}
