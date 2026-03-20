var idade = 19
console.log(`Você tem ${idade} anos`)
if( idade < 18){
    console.log('O usuario é de menor')
}
 else if(idade >= 16 && idade < 18 || idade > 65){
            console.log(`O usuario pode votar mas não obrigatoriamente. por você ter ${idade}  anos`)
        
    } else {
        console.log('Voto obrigatório!')
    }