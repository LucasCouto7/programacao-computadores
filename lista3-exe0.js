chefe()

function chefe() {
    let matriz = []
    // vamos criar uma matriz com 3 linhas
    matriz[0] = []
    matriz[1] = []
    matriz[2] = []
    cadastraNotas(matriz)
    consultaMediaAlunos(matriz)
}

function cadastraNotas(mat) {
    for (let i = 0; i < 3; i++) {
        alert("Informe 4 notas")
        for (let j = 0; j < 4; j++) {
            mat[i][j] = Number(prompt("Informe a nota "))
        }
    }
}

function consultaMediaAlunos(mat) {
    let medias = [0, 0, 0]

    for (let i = 0; i < 3; i++) { // para cada aluno
        for (let j = 0; j < 4; j++) { // para cada nota
            // soma no vetor na posição i
            medias[i] = medias[i] + mat[i][j]
        }
        // acabaram as notas do aluno i
        medias[i] = medias[i] / 4
    }
    //acabaram os alunos
    console.log("Valor das médias ", medias)


}