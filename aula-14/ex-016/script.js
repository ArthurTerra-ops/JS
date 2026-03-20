

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if( fano.value.length == 0 || fano.value > ano){
        alert("Erro verifique as caixas e marque corretamente!")
    } else{
        var fsex = document.getElementsByName("radsexo")
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = "homen"
            // aqui vai o questionamento do estrato de idade
            if( idade <= 10){
                //criança
                res.innerHTML = `Identifiquei um menino de ${idade}`
            } else if(idade <= 21){
                //jovem
                res.innerHTML = `Identifiquei um jovem de ${idade}`
            } else if(idade <= 50){
                //adulto
                res.innerHTML = `Identifiquei um adulto de ${idade}`
            } else {
                //idoso
                res.innerHTML = `Identifiquei um idoso de ${idade}`
                }
        } else {
            genero = "mulher"
            // aqui vai o questionamento do estrato de idade
            if( idade <= 10){
                //criança
                res.innerHTML = `Identifiquei um menino de ${idade}`
            } else if(idade <= 21){
                //jovem
                res.innerHTML = `Identifiquei um jovem de ${idade}`
            } else if(idade <= 50){
                //adulto
                res.innerHTML = `Identifiquei um adulto de ${idade}`
            } else {
                //idoso
                res.innerHTML = `Identifiquei um idoso de ${idade}`
                } 


        }
    }
}