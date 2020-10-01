function chefe() {
    let carros = []
    let notas_carros = []
    notas_carros[0] = []
    notas_carros[1] = []
    notas_carros[2] = []
    notas_carros[3] = []
    do {
        opcao = Number(prompt("[1] - Cadastrar Carro   [2] - Calcular média de notas [3]-  Calcular carro com menor nota em cada critério     [4] -  Sair"))
        switch (opcao) {
            case 1: cadastraNotas2(notas_carros, carros)
                break
            case 2: calculaMediaNotas(notas_carros, carros)
                break
            case 3: calculaMenorNota(notas_carros, carros)
                break
            case 4: console.log("Programa finalizado")
                break
            default: console.log("Tente novamente")
        }
    } while (opcao != 4)
}

function cadastraCarro(carros) {
    let carro = new Object()
    carro.marca = prompt("Informe a marca do carro")
    carro.modelo = prompt("Informe o modelo do carro")
    carro.ano = prompt("Informe o ano de fabricação do carro")
    carro.valor = Number(prompt("Informe o valor do carro"))

    carros.push(carro)

    console.log("Carro castrado com sucesso!")

}


function cadastraNotas2(mat, carros) {

    // rodar a matriz para cadastro das notas de 4 carros em 5 critérios
    for (let i = 0; i < 4; i++) {
        cadastraCarro(carros)
        alert("Informe as 5 notas do " + (i + 1) + "º carro")
        for (let j = 0; j < 5; j++) {
            mat[i][j] = Number(prompt("Informe a " + (j + 1) + "ª nota"))
        }

    }
    console.log("Notas cadastradas com sucesso! ")
}

function calculaMediaNotas(mat) {

    let somaNotas1, somaNotas2, somaNotas3, somaNotas4, media1, media2, media4

    for (let j = 0; j < 5; j++) {
        somaNotas1 = somaNotas1 + mat[0, j]
    }

    media1

    for (let j = 0; j < 5; j++) {
        somaNotas2 = somaNotas2 + mat[1, j]
    }

    for (let j = 0; j < 5; j++) {
        somaNotas3 = somaNotas3 + mat[2, j]
    }

    for (let j = 0; j < 5; j++) {
        somaNotas4 = somaNotas4 + mat[3, j]
    }

}

function calculaMediaNotas(mat, carros) {

    let medias = [0, 0, 0, 0]

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 5; j++) {
            medias[i] = medias[i] + mat[i][j]
        }

        medias[i] = medias[i] / 5

    }

    for (let i = 0; i < 4; i++) {
        console.log("Marca:", carros[i].marca, "Modelo:", carros[i].modelo, "Média de notas:", medias[i])
    }

}

function calculaMenorNota(mat, carros) {
    for (let j = 0; j < 5; j++) {
        let menorNota = mat[0][j]
        let modeloMenorNotas = carros[0].modelo
        for (let i = 0; i < 4; i++) {
            if (mat[i][j] < menorNota) {
                menorNota = mat[i][j]
                modeloMenorNotas = carros[i].modelo
            }
        }
        console.log("O carro", modeloMenorNotas, " obteve a ", menorNota, "no critério" + (j + 1))
    }
}



chefe()
