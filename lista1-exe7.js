function ex7() {
    var num = 0
    var soma = 0
    var i = 0




    do {
        num = Number(prompt("Insira o número(informe num negativo para encerrar o programa"))
        if (num > 0) {
            soma = soma + num
            i++
        }

    } while (num > 0)

    var result = media(soma, i)
    console.log("Média dos números:", result)
}



function media(soma, i) {
    var media = soma / i
    return media
}

ex7();