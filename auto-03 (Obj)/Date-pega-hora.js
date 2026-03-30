let horas = new Date().getHours()

if (horas >= 5 && horas < 12) {
console.log("Bom dia!")
} else if(horas >= 12 && horas < 18){
    console.log("Boa tarde!")

} else{
    console.log("Boa noite!")
}