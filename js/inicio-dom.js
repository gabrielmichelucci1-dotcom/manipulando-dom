// acessando um elemento
// document - representa toda a página/arquivo
// getElementById - é um método (função, ação) q busca um elemento pelo atributo ID
const paragrafo = document.getElementById("paragrafo")
console.log(paragrafo)

// 2 - alterando o conteúdo de um elemento
paragrafo.textContent = "alterando o texto do paragrafo com JS"


// 3 - alterando o estilo
paragrafo.style = "blue"
paragrafo.style.fontSize = "2rem"


// 4 - criando elementos
// createElement - serve pa ra criar um novo elemento HTML
const paragrafoJavaScript = document.createElement("p")

// 4.1  atualizando o conteudo do paragrafo
paragrafoJavaScript.textContent = "este paragrafo foi criado com JS"
paragrafoJavaScript.style.fontFamily = "sans-serif"
paragrafoJavaScript.style.fontSize = "1.5rem"
paragrafoJavaScript.style.backgroundColor = "deeppink"
paragrafoJavaScript.style.color = "#111"
aragrafoJavaScript.style.psdding = ".5rem"
aragrafoJavaScript.style.borderRadius = "1rem"
aragrafoJavaScript.style.textAlign = "center"

// 4.2 -  inserindo o paragrafo na página
// appendchild - serve para adicionar um item ao final da página
document.body.appendChild(paragrafoJavaScript)

// 5 - removendo um elemento de titulo do HTML
//capturando elemento de titulo pelo ID
const titulo = document.getElementById("titulo")

// 5.1 - removendo
titulo.remove()