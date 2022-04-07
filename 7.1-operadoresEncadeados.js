console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15
const estaAcompanhado = true
const temPassagemComprada = true

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

if (
    idadeComprador >= 18 ||
    estaAcompanhado == true
    ) {
    console.log("Boa viagem!")
    listaDeDestinos.splice(1,1)
}else{
        console.log("Comprador não é maior de idade. Compra não concluída")
    }

    console.log("Embraque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem")
}else{
    console.log("Você não pode embarcar")
    }

console.log(listaDeDestinos)