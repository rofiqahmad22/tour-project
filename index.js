const tourFormElement = document.getElementById("tour-form");
const tourListElement = document.getElementById("tour-list");

tourFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const tourInputTextElement = document.getElementById("tour-input-text");
  const tourText = tourInputTextElement.value;
  addNewTodo(tourText);
});

function addNewTodo(tourText) {
  const newTourElement = document.createElement("li");
  const newTourTextNode = document.createTextNode(tourText);

  newTourElement.append(newTourTextNode);
  tourListElement.append(newTourElement);
}
