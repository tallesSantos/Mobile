//elementos DOM
var elementList = document.querySelector('#app ul');
var elementInput = document.querySelector('#app input');
var elementButton = document.querySelector('#app button');
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


//variaveis de estilização
var vCorlink = "red";
var vCorli = "black";


//Função que renderiza a lista na tela
 function rendeTodos(){
 	elementList.innerHTML = '';

 	for (todo of todos){
 		var todoElement = document.createElement('li'); todoElement.style.color = vCorli;
 		var todoText = document.createTextNode(todo);

 		var linkElement = document.createElement('a');
 		linkElement.setAttribute('href', '#')

 		var pos = todos.indexOf(todo);
		 linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');
		 

	var linkText = document.createTextNode('Excluir');
		 linkElement.appendChild(linkText);
		 linkElement.style.cssFloat = "right";
		 linkElement.style.clear = "right;"
		 linkElement.style.color = vCorlink ;
 		

 		todoElement.appendChild(todoText);
 		todoElement.appendChild(linkElement);
 		elementList.appendChild(todoElement);
 	}
 }
rendeTodos();


//Função que adiciona mais uma variavel no array
function addTodo() {
	var todoText = elementInput.value;
	todos.push(todoText);
	elementInput.value = '';
	rendeTodos();
	saveToStorage();

}

//Evento que executa a funcao de incremento do array
elementButton.onclick = function(){
	addTodo();
}

//Função que retira uma variavel do array
function deleteTodo(pos){
	todos.splice(pos, 1);
	rendeTodos();
	saveToStorage();

}

//Função que salva o array(objeto) no localStorage do Nagegador
function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos));
}