function contar()
{
var NumeroI = Number( document.getElementById("InumeroI").value)
var NumeroF = Number( document.getElementById("InumeroF").value)
var NumeroQ = Number( document.getElementById("InumeroQ").value)
var resultado = document.getElementById("resultado")

//apagando resultado anterior


if (document.getElementById("InumeroI").value.length == 0 || document.getElementById("InumeroF").value.length == 0 || document.getElementById("InumeroQ").value.length == 0){alert("impossivel contar")} else {
//testando se é crescente
    if(NumeroI < NumeroF){
         for(let c = NumeroI; c <= NumeroF ; c = NumeroQ + c )
            {resultado.innerText = resultado.innerText + `  ${c} \u{1f449}`}

    resultado.innerHTML += `\u{1f3C1}`
    //testando se é decrescente
}else  {
    for(let c = NumeroI; c >= NumeroF ; c -= NumeroQ) {
        resultado.innerText = resultado.innerText + `  ${c} \u{1f449}`
        }

    resultado.innerHTML += `\u{1f3C1}`}
}

}
