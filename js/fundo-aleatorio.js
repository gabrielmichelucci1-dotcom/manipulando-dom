// trocando o fundo do site com base no horário

const date = new Date()
const hora = date.getHours()

console.log(hora)
//pegando outros recursos
const minutos = date.getMinutes()
const minutos = date.getFullYear()

// se for de manhã, o background da página vai ser um

// se for de tarde, o background da página vai ser outro

// se for de noite, o background da página vai ser outro


if(hora >=6&& hora < 12){
 document.body.style.background = "linear-grsdient(135deg, #FAff65, #ffd180, #90CAF9)"

 document.body.style.backgroundImage = "url(../assets/manha.jpg)"

} else if(hora >= 12 && hora < 18){
  document.body.style.background = "linear-gradient(145deg, #ff8a65, #ffb74d, #64b5f6)"

  document.body.style.backgroundImage = "url(../assets/terde.jpg)"

} else if(hora >= 18 && hora < 24){
  document.body.style.background = "linear-gradient(155deg, #000428, #211132, #004e92)"

  document.body.style.backgroundImage = "url(../assets/noite.jpg)"

} else if(hora >= 18 && hora < 24){
  document.body.style.background = "linear-gradient(155deg, #0b7c51, #3f0d74, #183f60)"

}

