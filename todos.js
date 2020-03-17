var listElement = document.querySelector('#app ul')
var inputElement =document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')



var todos = JSON.parse(localStorage.getItem('list_todos')) || []


function renderTodos(){  //cria um Todo
   
    listElement.innerHTML =''  //limpa os elementos para nao ficarem duplicados

    for(todo of todos){ //mapeia elementos do array
        var todoElement = document.createElement('li')     //cria uma linha 
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')      //cria um link
        linkElement.setAttribute('href','#')              //cria um atributo
        var pos = todo.indexOf(todo)                      //obtem o indice do array
        linkElement.setAttribute('onclick', 'remover('+ pos +')')  //seta o atributo
        var linkText = document.createTextNode(' Excluir')
        
        linkElement.appendChild(linkText)


        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }

}
renderTodos()

function adicionar(){ //adiciona um novo Todo
    var todoText = inputElement.value;
    todos.push(todoText)
    inputElement.value ='';
    renderTodos()
    saveToStorage()
}
buttonElement.onclick = adicionar



function remover(pos){
    todos.splice(pos, 1);
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos))

}