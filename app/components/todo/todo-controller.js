function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	
	function getTodos(){
		todoService.getTodos(draw)
	}
	getTodos()

function clock(){
	var time = new Date(),

	hours = time.getHours(),
	minutes = time.getMinutes();

	document.querySelectorAll('.clock')[0].innerHTML=harold(hours) + ":" + harold(minutes);
	function harold(standIn){
		if(standIn < 10) {
			standIn = '0' + standIn
		}
		return standIn;
	}
}
setInterval(clock, 1000);

	function draw(todos) {
		var template = '<ul>';
		for (let i = 0; i < todos.length; i++) {
			const todo = todos[i];
			template += `
			<li type="checkbox">${todo.description}
			<button onclick="app.controllers.todoController.removeTodo('${todo._id}')">delete</button>
			</li>
			`
		}
		template += '</ul>'
	document.getElementById('todo').innerHTML = template
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}

		
		todoService.addTodo(todo, getTodos)
		                        
	}

	this.toggleTodoStatus = function (todoId,get) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		todoService.removeTodo(todoId,getTodos)
		
	}
	

}
