const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

function listOfColours(colours) {
  let content = document.getElementById("content");
  content.style.margin = "70 100";

  let select = document.createElement("select");
  select.style.padding = "10";
  select.style.backgroundColor = "rgb(101, 110, 115)";
  select.style.color = "white";
  select.style.fontSize = "20";
  content.appendChild(select);

  let p = document.createElement("p");
  content.appendChild(p);

  colours.forEach((elem) => {
    let option = document.createElement("option");
    option.innerText = elem;
    select.appendChild(option);
  });

  select.addEventListener("change", function () {
    p.style.color = this.value;
    p.innerHTML = `You have selected: ${this.value}`;
  });
}

listOfColours(colours);

