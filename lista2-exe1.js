chefe()

function chefe() {

    // vetor de escopo local
    let vendedores = []
    let vendas = []
    let opcao
    do {
        opcao = Number(prompt("Escolha[1]. Cadastrar Vendedor [2]. Cadastrar Venda[3]. Sair"))
        switch (opcao) {
            case 1: cadastraVendedor(vendedores) // essa passagem é por referência e torna o vetor de escopo global
                break
            case 2: cadastraVendas(vendas, vendedores)
                break
            case 3: consultaVendasFuncionario(vendas)
                break
            case 4: consultasVendasTotal(vendas)
                break
            case 5: consultaVendedorMes(vendas)
                break
            case 6: mesMaisVendas(vendas)
                break
            case 7: console.log("Tchau")
            default: console.log("Tente novamente")
        }
    } while (opcao != 3)

}

function cadastraVendedor(vended) { // vended representa o vetor vendedores
    let objeto = new Object()
    objeto.cod = Number(prompt("Informe código do vendedor"))
    objeto.nome = prompt("Informe nome do vendedor")
    // verifica se o código existe
    for (let i = 0; i < vended.length; i++) {
        if (vended[i].cod == objeto.cod) {
            console.log("Cadastro cancelado pois já exite um vendedor com este código")
            return 0 // sai da função pois não iremos cadastrar
        }
    }

    //insere no vended, mas na verdade insere no vetor vendedores
    vended.push(objeto)

}

function cadastraVendas(vdas, vdes) { // vdas representa o vetor vendas e vdes representa os vendedores
    let objeto = new Object()
    objeto.cod = Number(prompt("Informe código da venda"))
    objeto.vendedor = Number(prompt("Informe código do vendedor"))
    objeto.mes = Number(prompt("Informe mês da venda"))
    objeto.valor = Number(prompt("Informe valor da venda"))

    //verifica se o vendedor existe
    //percorre o vetor de vendedores
    for (let i = 0; i < vdes.length; i++) {
        if (objeto.vendedor == vdes[i].codigo) {
            // verifica se existe venda para este vendedor no mesmo mês - não podemos registrar a venda
            // percorre o vetor de vendas
            for (let j = 0; vdas.length; j++) {
                if (objeto.mes == vdas[i].mes && objeto.vendedor == vdas[i].vendedor) {
                    console.log("Não podemos registrar a venda")
                    return 0;// sai da função
                }
            }
            // já percorreu o vendedor, então vamos inserir
            // insere a venda em vdas, que na verdade é vendas

            vdas.push(objeto)
            console.log("Venda registrada")
            return 0

        }
    }

    console.log("Vendedor não existe")



}

function consultaVendasFuncionario(vendas) {
    // atribuição da variável que receberá o código para consulta do objeto vendedor
    let codVended = Number(prompt("Informe o código do vendedor que deseja consulta"))
    // atribuição da variável que receberá o mês para consulta do objeto vendedor
    let mesVended = Number(prompt("Informe o mês que deseja consultar as vendas"))

    // rodar o vetor de vendas para encontrar as vendas dos vendedores informados
    for (let i = 0; i < vendas.length; i++) {
        if (vendas[i].cod == codVended && vendas[i].mes.getMonth() == mesVended) {
            console.log("Nome do vendedor: ", vendas[i].nome, " Valor da venda: ", vendas[i].valor)
            return;// sai da função
        }
    }
    console.log("Não existe venda cadastra segundo os critérios")
}

function consultaVendasTotal(vendas) {
    let codVended = Number(prompt("Informe o código do vendedor"))
    let valorTotal = 0

    // rodar o vetor vendas para atribuir as vendas totais do vendedor

    for (let i = 0; i < vendas.lenght; i++) {
        if (vendas[i].cod == codVended)
            valorTotal = valorTotal + vendas[i].valor
    }

    console.log("Valor total: ", valorTotal)

}

function consultaVendedoresMes(vendas) {
    let mes = Number(prompt("Informe o mês"))
    let maiorVenda = 0
    let vendedorMaisVendeu = 0

    for (let i = 0; i < vendas.length) {
        if (vendas[i].mes == mes) {
            if (vendas[i].lenght > maiorVenda) {
                maiorVenda = vendas[i].valor
                vendedorMaisVendeu = vendas[i].cod
            }
        }
    }
    console.log("Vendedor com mais vendas: ", vendedorMaisVendeu, " e valor: ", maiorVenda)
}

function mesMaisVendas(vendas) {
    let meses = []
    for (let i = 0; i < vendas.lenght; i++) {
        let posicao = vendas[i].mes - 1 // descubro o valor para colocar
        meses[posicao] = meses[posicao] + vendas[i].valor // acumule o valor
    }

    let maiorValor = meses[0]
    for (let i = 0; i < meses.length; i++) {
        if (meses[i] > maiorValor)
            maiorValor - mes[i]
    }
    // encontramos a posição do maior valor vendido
    let posicao = meses.indexOf(maiorValor)
    console.log("O mês que mais vendeu", posicao + 1)
}