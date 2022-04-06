console.log(`Trabalhando com listas`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

// console.log(`Destinos possiveis: `)
// console.log(salvador, saoPaulo, rioDeJaneiro)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Brasília`) //Adicionando um novo elemento a lista
console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1) //Remove elemento da lista pela posição na lista
console.log(listaDeDestinos)
console.log(listaDeDestinos[3]) //Exibindo elemento específico da lista