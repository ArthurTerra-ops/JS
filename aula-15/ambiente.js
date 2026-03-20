let num = [5 , 2 , 8 , 9 , 3]

console.log(` nosso vetor é o ${num} e seu tamanho é ${num.length} e seu numero da posição 3 é ${num[3]}`)
// ordenando o num ficaria
num.sort()
console.log(`${num} este é o num ordenado...`)
//adicionando um valor ao nosso array

num.push(10)
console.log(num)

for (let pos = 0; pos< num.length; pos++){
    console.log(num[pos])
}

// forma mais simplificada, já feita para arrays
console.log("aqui será executado uma forma mais simples que é recomendada para usar em vetores!")
for( let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
// é posivel pesquisar dentro de vetores

console.log("pesquisando valores dentro de um vetor")
let posicao = num.indexOf(8)
console.log(`o numero 8 está na posição: ${posicao}, e quando pesquisar por aqlgo que não exite no array ele resultará em: ${num.indexOf(4)} por não ter encontrado nada`)
