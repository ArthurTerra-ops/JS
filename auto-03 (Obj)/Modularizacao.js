export function obterSaudacao(){
    let horas = new Date().getHours()

if (horas >= 5 && horas < 12) {
return"Bom dia!"}
 else if(horas >= 12 && horas < 18){
    return"Boa tarde!"}

 else{
    return"Boa noite!"}
}

var mensagem = obterSaudacao()
console.log(mensagem)