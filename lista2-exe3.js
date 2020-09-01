
chefe()

function chefe(){
    //(let - escopo local da função onde é declarado)

    let vetor = []
    do {

        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Média de idade \n [3]. Maior idade \n [4]. Qtde \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor)//passando uma referência da memória do vetor
                break
            case 2: calculaMedia(vetor)
                break
            case 3: calculaMaiorIdade(vetor)
                break
            case 4: calculaQtde(vetor)
                break
            case 5: calculaPercentual(vetor)
                break
            case 6: console.log("Obrigado por utilizar nosso programa")
                break
            default: console.log("Opção inválida, tente novamente")
        }
    
    }
    while (opcao != 6)
}

function entrada(vet){ // vet vai apontar para vetor
    console.log("Entrou na função entrada")
    // criar objeto
    let objeto = new Object()
    objeto.sexo = prompt("Informe M para masculino e F para feminino").toUpperCase() 
    objeto.altura = Number(prompt("Informe a altura"))
    objeto.idade = Number(prompt("Informe a idade"))
    objeto.olhos = prompt("Informe A (azuis) V (verde) C (castanho)").toUpperCase()
    // inserir em vetor em não em vet
    vet.push(objeto)
    console.log("Habitante inserido com sucesso! ")

}

function calculaMedia(vet){ //calculaMediai apontar para vetor
    console.log("Entrou na função calcular média")

    let soma = 0
    let qtde = 0

    for (let i = 0; i < vet.length; i++){
        if(vet[i].olhos == "C" && vet[i].altura > 1.60)
        soma = soma + vet[i].idade
        qtde++
    }
    console.log("A média da idade é ", soma)


}

function calculaMaiorIdade(vet){ // vet vai apontar para vetor
    console.log("Entrou na função calcular maio idade")
    let maiorIdade = vet[0].idade
    for(let i = 1; i < vet.length; i++){
        if(vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade // atualiza maior idade
        }
    }



}

function calculaQtde(vet) { // vet vai apontar para vetor
    console.log("Entrou na função calcular quantidade")


}

function calculaPercentual(vet) {
    console.log("Entrou na função calcular percentual")

}