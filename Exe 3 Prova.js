function chefe() {
    let pessoas = []
    let imoveis = []

    do {
        opcao = Number(prompt("1-Cadastrar pessoa   2-Cadastrar imóvel   3-Calcular valor total em imóveis do cidadão     4-Mostrar pessoa com imóvel mais caro   5-Sair"))
        switch (opcao) {
            case 1: cadastraPessoa(pessoas)
                break
            case 2: cadastraImovel(imoveis, pessoas)
                break
            case 3: maiorValorImovelPessoa(pessoas, imoveis)
                break
            case 4: maiorValorImovel(imoveis)
                break
            case 5: console.log("Programa finalizado!")
                break
            default: console.log("Tente novamente")
        }
    } while (opcao != 5)
}

function cadastraPessoa(pessoas) {
    let pessoa = new Object()
    pessoa.nome = prompt("Informe o nome da pessoa")
    pessoa.rg = Number(prompt("Informe o RG"))
    pessoa.cpf = prompt("Informe o CPF")

    pessoas.push(pessoa)

    console.log("Pessoa cadastrada com sucesso!")
}

function cadastraImovel(imoveis, pessoas) {

    let imovel = new Object()
    imovel.rg = Number(prompt("Informe o RG do proprietario:"))



    imovel.cod = Number(prompt("Informe o código do imóvel"))
    imovel.endereco = (prompt("Informe o endereço do imóvel"))
    imovel.tamanho = Number(prompt("Informe o tamanho do imóvel"))
    imovel.tipo = prompt("Informe o tipo do imóvel")
    imovel.valor = Number(prompt("Informe o valor do imóvel"))


    for (let i = 0; i < pessoas.lenght; i++) {
        if (pessoas[i].rg == imovel.rg){
            imoveis.push(imovel)
            console.log("Imóvel cadastrado")
        }else{
            console.log("RG não encontrado")
        }
        
    }






}


function maiorValorImovelPessoa(imoveis, pessoas) {
    let rg = prompt("Informe um RG")
    let somaValor = 0
    let nomePessoa
    for (let i = 0; i < imoveis.lenght; i++) {
        if (imoveis[i].rg = rg) {
            somaValor = somaValor + imoveis[i].valor
        }
    }

    for (let i = 0; i < pessoas.lenght; i++) {
        if (pessoas[i].rg = rg) {
            nomePessoa = pessoas[i].rg

        }
    }



    console.log("Nome:", nomePessoa, "Soma dos valores de imóveis:", somaValor)
}

function maiorValorImovel(imoveis) {
    maiorValor = imoveis[0].valor
    for (let i = 0; i < imoveis.lenght; i++) {
        if (imoveis[i].valor > maiorValor) {
            maiorValor = imoveis[i].valor
        }



    }

    for (let i = 0; i < pessoas.lenght; i++) {
        if (maiorValor = pessoas[i].valor) {
            pessoaMaiorValor = pessoas[i].valor
        }
    }
    console.log(pessoaMaiorValor)
}



chefe()