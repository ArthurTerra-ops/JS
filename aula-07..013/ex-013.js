var Agora = new Date()
var hora = Agora.getHours()
var Minuto = Agora.getMinutes()
console.log(`Agora são ${hora} horas e ${Minuto} minutos!`)

if(hora > 12){
    console.log(`Bom Dia`)
} else if(hora > 18) {
    console.log(`Boa Tarde `)
} else{
    console.log(`Boa Noite `)
}