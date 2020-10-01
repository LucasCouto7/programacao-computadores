chefe()

function chefe() {
    // declarar a matriz de notas
    let matriz = [] // uma matriz é um vetor - banco de dados centralizado
    // vamos criar o vetor de alunos
    let vetor = []
    cadastra(matriz, vetor) // cadastra 3 alunos
    consultaMediaAlunos(matriz, vetor) // calcula a média das notas
}

// mat representa a matriz na função chefe()
// vet representa o vetor na função chefe()
function cadastra(mat, vet) { // 
    for (let i = 0; i < 3; i++) { // são 3 alunos
        let objeto = new Object()
        objeto.nome = prompt(`Informe nome`)
        objeto.rg = prompt(`Informe RG`)
        objeto.media = 0 // vamos considerar que no cadastro a média do aluno é 0
        // insere o objeto em vet
        vet.push(objeto)
        mat[i] = [] // cada linha da matriz é um vetor
        alert(`Informe 4 notas do aluno ${objeto.nome}`)
        for (let j = 0; j < 4; j++) { // são 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j + 1}`))
        }
    }
}

function consultaMediaAlunos(mat, vet) { // mat representa a matriz na função chefe()
    for (let i = 0; i < 3; i++) { // para cada aluno
        for (let j = 0; j < 4; j++) { // para cada nota
            // soma no vetor na posição i
            vet[i].media = vet[i].media + mat[i][j]
        }
        // acabaram as notas do aluno i
        vet[i].media = vet[i].media / 4
    }
    // acabaram os alunos
    console.log(vet)
}


