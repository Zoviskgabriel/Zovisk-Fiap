// Uma livraria está fazendo uma promoção para os livros do Harry Potter: de R$ 22 por R$ 15,
// isso se levar 7 livros (ou mais)

// Faça um programa para ajudar o vendedor a informar o preço total com base no número de arquivos

function pegarDados(){
    let livros = Number(prompt("Quantos livros vc está comprando?"))
    return livros
}

function calcular(livros){
    let valor
    if (livros < 7){
        valor = livros * 22
    }

    else{
        valor = livros * 15
    }

    return valor
}

function main(){
    let livros = pegarDados()
    let valor = calcular(livros)
    console.log(`O valor deu ${valor}`)
}
main()