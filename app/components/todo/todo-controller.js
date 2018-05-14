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
	function draw(todos) {
		var template = '<ul class="list">';
		for (let i = 0; i < todos.length; i++) {
			const todo = todos[i];
			if(!todo.completed){template += `
			<li><input onclick='app.controllers.todoController.toggleTodoStatus("${todo._id}")'id="checkBox" type="checkbox">${todo.description}
			<button class="btn2" onclick="app.controllers.todoController.removeTodo('${todo._id}')">x</button>
			</li>
			`
		}else{
			template += `
			<li><input onclick='app.controllers.todoController.toggleTodoStatus("${todo._id}")'id="checkBox" type="checkbox" checked><strike>${todo.description}</strike>
			<button class="btn2" onclick="app.controllers.todoController.removeTodo('${todo._id}')">x</button>
			</li>
			`
		}
	}
		template += '</ul>'
	document.getElementById('todo').innerHTML = template
	console.log(todos)
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
		todoService.toggleTodoStatus(todoId, getTodos)
		
	}

	this.removeTodo = function (todoId) {
		todoService.removeTodo(todoId,getTodos)
		
	}
	

}
