let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList() {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((elem, index) => {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = elem.task;

    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    let iconCheck = document.createElement("i");
    iconCheck.className = "fa fa-check";
    iconCheck.setAttribute("aria-hidden", true);

    iconCheck.addEventListener("click", () => {
      if (li.style.textDecoration !== "line-through") {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "";
      }
    });

    let iconTrash = document.createElement("i");
    iconTrash.className = "fa fa-trash";
    iconTrash.setAttribute("aria-hidden", true);

    iconTrash.addEventListener("click", () => {
      delete todos[index];
      populateTodoList();
    });

    span.appendChild(iconCheck);
    span.appendChild(iconTrash);
    li.appendChild(span);
    list.appendChild(li);
  });
}

populateTodoList();

function addNewTodo(event) {
  event.preventDefault();
  let input = document.getElementById("todoInput");
  let newToDo = { task: input.value, completed: false };
  if (input.value) {
    todos.push(newToDo);
    input.value = "";
  }
  populateTodoList();
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {

  
}
