var todos = ["Buy eggs"];
//to prevent from JS loading before page content has finished loading
window.setTimeout(function () {
	// ask user, store as var-input
	var input = prompt("what would you like to do?");
	// put input prompt into a while loop unless user input is "quit"
	while (input !== "quit") {
		if (input === "list") {
			listTodo();
		} else if (input === "new") {
			addTodo();
		} else if (input === "delete") {
			deleteTodo();
		}
		//ask again for new input
		input = prompt("what would you like to do?");
	}
	console.log("You've quit the app !!!!");

	function listTodo() {
		console.log("*********")
		todos.forEach(function (todo, i) {
			console.log(i + ":" + todo);
		});
		console.log("**********")
	}

	function addTodo() {
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//ask to todos array
		todos.push(newTodo);
		// shows the new list on console
		console.log("Added Todo");
	}

	function deleteTodo() {
		// ask for index of todo to e deleted
		var index = prompt("Enter index of todo to delete");
		//delete that todo
		//splice()
		todos.splice(index, 1);
		console.log("Deleted Todo");
	}
}, 500);