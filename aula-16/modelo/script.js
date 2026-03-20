// variaveis básicas para trabalhar aqui

let num = document.getElementById("txtn")
let add = document.getElementById("add")
var sel = document.getElementById("sel")
let fin = document.getElementById("fin")
var vetor = []

function Adicionar(){
    let num = document.getElementById("txtn")
let n = Number(num.value)
if(n <= 0 || n > 100 || vetor.indexOf(n) != -1){alert("numero fora do padrão ou já existente na lista")}else{
vetor.push(n)
let item = document.createElement(`Option`)
item.innerHTML = `O valor ${n} foi adicionado!`
sel.appendChild(item)
num.focus()
num.value = ""
    return vetor
}
}

function Finalizar(){
    if(vetor.length == 0){alert("sem valores suficientes, adicione algo!")}else{
        sel.innerHTML = ""
    vetor.sort()
    
    for(c = 0; c < vetor.length; c++ ){
let item = document.createElement(`Option`)
if(c == 0){ item.innerHTML = `Total de valores é ${vetor.length}`; sel.appendChild(item)} else if(c == 1){ item.innerHTML = `O maior valor é ${vetor[vetor.length-1]}`; sel.appendChild(item)}
    }
let item = document.createElement(`Option`)
item.innerHTML = `O menor valor é ${vetor[0]}`
sel.appendChild(item)
let res = 0
for(i = 0;i < vetor.length ; i++){
    let actual = vetor[i]
    
    res = actual + res

}
let result = document.createElement(`Option`)
result.innerHTML = `A soma de todos os valores é ${res}`
sel.appendChild(result)
return vetor = []
    }
    
}