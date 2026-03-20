

function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas e ${data.getMinutes()} minutos`

if( hora <= 12 && hora >= 6){
document.body.style.background = "white"
img.src = "manha.jpg"
} else if( hora >= 13 && hora <= 18){
document.body.style.background = "orange"
img.src = "tarde.jpg"
}   else {
document.body.style.background = " black"
img.src = "noite.png"
}
}