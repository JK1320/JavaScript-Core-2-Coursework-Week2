let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let i = 0; i < arrayOfPeople.length; i++) {
    let h1 = document.createElement("h1");
    h1.innerHTML = arrayOfPeople[i].name;
    let h2 = document.createElement("h2");
    h2.innerHTML = arrayOfPeople[i].job;
    content.appendChild(h1);
    content.appendChild(h2);
  }
}

listOfNames(people);


