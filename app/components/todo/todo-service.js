function TodoService() {
	var todoList = []
	var baseUrl = 'https://bcw-sandbox.herokuapp.com/api/Cody/todos'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
	}

	


	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) {
				draw(res.data) 
			})
			.fail(logError)
			
	}
	this.addTodo = function (todo,cb) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(function(res){
				cb(res) //
			}) 
			.fail(logError)

	}

	this.toggleTodoStatus = function (todoId) { 
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var todoList = todo.completed = !todo.completed

		//STEP 2: Change the completed flag to the opposite of what it is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoList)
		})
			.then(function (res) {
				cb(res)
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function (id,cb) {
		$.ajax({
            method: 'DELETE',
            url: baseUrl + '/' + id
        }).then(res => {
          cb(res)
	})

}

}
