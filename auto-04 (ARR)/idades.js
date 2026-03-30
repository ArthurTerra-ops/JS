const pessoas = [
    {nome: "A", idade: 18},
    {nome: "B", idade: 19},
    {nome: "C", idade: 11},
    {nome: "D", idade: 30},
]

const dmaior = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(dmaior)