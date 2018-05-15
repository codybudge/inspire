function TodoService() {
	var todoList = []
	var baseUrl = 'https://bcw-sandbox.herokuapp.com/api/Cody/todos'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
	}

	


	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) {
				todoList = res.data
				draw(res.data) 
			})
			.fail(logError)
			
	}
	this.addTodo = function (todo,cb) {
		$.post(baseUrl, todo)
			.then(function(res){
				cb(res) //
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, cb) { 
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var checkedTodo
	 for (let i = 0; i < todoList.length; i++) {
		 const todo = todoList[i];
		 if(todoId == todo._id){
			 checkedTodo = !todo.completed
		 }
		 
	 }
		//STEP 2: Change the completed flag to the opposite of what it is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify({completed: checkedTodo})
		})
			.then(function (res) {
				console.log(res)
				cb(res)
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function (id, cb) {
		$.ajax({
            method: 'DELETE',
            url: baseUrl + '/' + id
        }).then(res => {
          cb(res)
	})

}

}
