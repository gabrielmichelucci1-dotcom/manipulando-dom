const form = document.getElementById("todo-form")
const input = document.getElementById("tarefa")
const lista = document.getElementById("todo-list")

form.addEventListener("submit", adicionarTarefa)

function adicionarTarefa(event) {

    event.preventDefault()

    const textoTarefa = input.value.trim()
    
    if(textoTarefa === ""){
        alert("digite uma tarefa")
        input.focus()
        return
    }


    //criando um li
    const itemLista = document.createElement("li")
itemLista.classList.add("todo-item")

//criando uma span para texto
const texto = document.createElement("span")
texto.textContent = textoTarefa


//criando o botão de concluir
const btnConcluir = document.createElement ("button")

btnConcluir.setAttribute("aria-label", "concluir tarefa")
btnConcluir.classList.add("concluir")


//criando o icone de concluir
const iconConcluir = document.createElement("i")
iconConcluir.classList.add("bi", "bi-check-lg")

btnConcluir.append(iconConcluir)


//criando o botão de remover
const btnRemover = document.createElement("button")

btnRemover.setAttribute("aria-label", "remover tarefa")
btnRemover.classList.add("remover")


//criando o icone de remover
const iconRemover = document.createElement("i")
iconRemover.classList.add("bi", "bi-trash3")

btnRemover.append(iconRemover)


//container para os botões
const acoes = document.createElement("div")
acoes.classList.add("acoes")


//adicionando os botões na div
acoes.append(btnConcluir)
acoes.append(btnRemover)

// monta o item da lista
itemLista.append(texto)
itemLista.append(acoes)


//adicionando o item da lista montado dentro da lista
    lista.append(itemLista)


    //limpando o campo input
    input.value = ""

    //voltando o foco para o input
    input.focus()


    //criando o evento dos botões
// removendi tarefa
btnRemover.addEventListener("click", function(){
    itemLista.remove()
})

//concluindo a tarefa
btnConcluir.addEventListener("click",()=>{
itemLista.classList.toggle("tarefa-concluida")

if(texto.classList.contains("tarefa-concluida")){
    iconConcluir.classList.remove("bi-check-lg")
    iconConcluir.classList.add("bi-arrow-clockwise")

    btnConcluir.setAttribute("aria-label", "desmarcar tarefa")
} else {
    iconConcluir.classList.remove("bi-arrow-clockwise")
    iconConcluir.classList.add("bi-check-lg")
    btnConcluir.setAttribute("aria-label", "concluir tarefa")
}
})
}

