const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];


function todoList(todos) {
   let content = document.getElementById("content");
let ul = document.createElement("ul");
content.appendChild(ul);

todos.forEach(elem => {
  let li = document.createElement("li");
  li.innerHTML = elem.todo;
  ul.appendChild(li);
})

let listItem = document.querySelectorAll("li");
listItem.forEach(elem => {
  elem.addEventListener("click", function(){
    if(elem.style.textDecoration === "line-through"){
      elem.style.textDecoration = "";
    }
    else {
      elem.style.textDecoration = "line-through";
    }
  })
})
}

todoList(todos);