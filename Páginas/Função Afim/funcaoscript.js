// Função para Calcular Função Afim

function calc(){
    var resposta = document.getElementById('resposta')
    var operacao = document.getElementById('operacao')
    var value = operacao.options[operacao.selectedIndex].value;
    var txta = document.getElementById('txta')
    var txtb = document.getElementById('txtb')
    var a = Number(txta.value)
    var b = Number(txtb.value)

// Limpa Texto
    resposta.innerText = ''

// Função Crescente, Decrescente ou Nula caso seja uma Função Constante
    if (a == 0){
        resposta.innerHTML += ''
    } else if (a > 0){
        resposta.innerHTML += `<br>Função <strong>Crescente</strong><br>`
    } else{
        resposta.innerHTML += `Função <strong>Decrescente</strong><br>`
    }

// Função Constante, Identidade ou Linear
    if (a == 0){
        resposta.innerHTML += `Função <strong>Constante</strong><br>`
    } else if (a == 1 && b == 0){
        resposta.innerHTML += `Função <strong>Identidade</strong><br>`
    } else if (b == 0){
        resposta.innerHTML += `Função <strong>Linear</strong><br>`
    }

// Coeficiente Linear
    if (value == "menos"){
        resposta.innerHTML += `Coeficiente Linear: <strong>-${b}</strong><br>`
    } else{
        resposta.innerHTML += `Coeficiente Linear: <strong>${b}</strong><br>`
    }

// Erro, caso valor de 'B' seja Negativo.
    if (b < 0){
        resposta.innerHTML = `[ERRO]: Não coloque o valor de B negativo. Use o selecionamento de Mais ou Menos.`
        resposta.style.color = 'red'
    } 

// Função Afim
    else if (value == "mais"){
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

// Função para Limpar Texto Escrito

function limpar(){
    resposta.innerHTML = ''
}
