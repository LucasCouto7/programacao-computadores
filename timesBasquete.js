function chefe() {
    let times = [4]
    let pontos = []
    pontos[0] = []
    pontos[1] = []
    pontos[2] = []
    pontos[3] = []


    cadastraTimes(times)
    cadastraPontos(times, pontos)
    calculaMedia(pontos, times)
    calculaTimeMaisPontosRodada(times, pontos)


}

function cadastraTimes(times) {
    let time = new Object
    time.nome = prompt("Informe o nome do time: ")
    time.cidade = prompt("Informe a cidade do time")
    time.media = 0 // define como 0

    console.log("Time cadastrado com sucesso!")

    times.push(time)
}

function cadastraPontos(times, pontos) {
    for (let i = 0; i < 4; i++) {
        console.log("Informe as pontuações do time " + (i + 1))
        for (let j = 0; j < 3; j++) {
            pontos[i][j] = Number(prompt("Rodada " + (j + 1)))
        }
    }

    console.log("Time cadastrado com sucesso! ")

}

function calculaMedia(pontos, times) {
    for (let i = 0; i < 4; i++) {
        for (let j; j < 3; j++) {
            times[i].media = times[i].media + pontos[i][j]

        }

        times[i].media = times[i].media / 3
    }
    console.log("Média de pontos: ", times)
}

function calculaTimeMaisPontosRodada(mat, vet) {
    for (let j = 0; j < 3; j++) {
        let maisPontos = mat[0][j]
        let nomeTimeMaisPontos = vet[0].nome
        for (let i = 0; i < 4; i++) {
            if (mat[i][j] > maisPontos) {
                maisPontos = mat[i][j]
                nomeTimeMaisPontos = vet[i].nome
            }
        }
        console.log("O time ", nomeTimeMaisPontos, " fez ", maisPontos, "na rodada" + (j + 1))
    }
}

chefe()