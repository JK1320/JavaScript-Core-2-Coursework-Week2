let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

function shoppingList(arrayOfPeople) {
  let content = document.querySelector("#content");
  let createUl = document.createElement("ul");
  content.appendChild(createUl);

arrayOfPeople.forEach(item => {
let createLi = document.createElement("li");
 createLi.innerHTML = item;
createUl.appendChild(createLi);
})

}

shoppingList(shopping);
