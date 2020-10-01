function exe1() {
    // declarando matriz de notas
    let matrizNotas = []
    // declarando vetor de estudantes
    let alunos = []
    // atribuindo tamanho da matriz
    matrizNotas[0] = []
    matrizNotas[1] = []
    matrizNotas[2] = []
    // Chamada da função de cadastro de dados dos alunos
    cadastraNotas(matrizNotas, alunos)
    calculaMediaProva(matrizNotas)
    calculaMaiorNotaProva(matrizNotas)

}

function cadastraAluno(alunos) {
    // Declarando objeto que recebera RG e CPF do aluno
    let aluno = new Object()
    aluno.RG = prompt("Informe o RG do aluno")
    aluno.CPF = prompt("Informe o CPF do aluno")

    alunos.push(aluno)
    console.log("Aluno cadastrado com sucesso!")

}

function cadastraNotas(mat, alunos) {

    // rodar a matriz para cadastro das notas de 3 alunos em 4 provas
    for (let i = 0; i < 3; i++) {
        cadastraAluno(alunos)
        alert("Informe as 4 notas do " + (i + 1) + "º aluno")
        for (let j = 0; j < 4; j++) {
            mat[i][j] = Number(prompt("Informe a " + (j + 1) + "ª nota"))
        }

    }
    console.log("Notas cadastradas com sucesso! ")
}

function calculaMediaProva(mat) {
    //declarar vetor de que receberá as médias
    let medias = [0, 0, 0, 0]
    //rodar a matriz para atribuição das médias
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
            medias[j] = medias[j] + mat[i][j]
        }
        // após somadas as notas, divido por 3 para as médias
        medias[j] = medias[j] / 3

    }

    console.log("Média das provas:", medias)



}

function calculaMaiorNotaProva(mat) {
    // atribuindo o valor de Maior Nota para a primeira posição da matriz
    let maiorNota = [0, 0, 0, 0]

    // rodar a matriz para atribuição das maiores notas de cada prova
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
            // se 
            if (mat[i][j] > maiorNota[j]) {
                maiorNota[j] = mat[i][j]
            }
        }

    }

    console.log("Maiores notas de cada prova:", maiorNota)
}



exe1()