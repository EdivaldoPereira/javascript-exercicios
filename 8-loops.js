console.log(`\nTrabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18
const estaAcompanhado = false
let temPassagemComprada = false
const destino = "Rio de Janeiro"

console.log("\nDestinos possíveis: ")
console.log(listaDeDestinos)

const podeComprar =  idadeComprador >= 18 || estaAcompanhado == true
let contador = 0
while(contador < 3){
    console.log(listaDeDestinos[contador])
    contador = contador + 1
}
    