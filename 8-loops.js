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
    if (listaDeDestinos[contador] == destino){
        
        destinoExiste = true
        break
    }
    contador = contador + 1
}
console.log("Destino existe", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe, tivemos um erro.")
}
    
for(let cont=0; cont < 3; cont++){
    if (listaDeDestinos[contador] == destino){
        
        destinoExiste = true
    }   
}