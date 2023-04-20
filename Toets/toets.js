const container = document.querySelector(".container");
const addButton = document.querySelector(".button");

let counter = 0;

addButton.addEventListener("click", () => {
  if (counter >= 49) {
    alert("Maximum number of elements reached!");
  } else {
    const newItem = document.createElement("div");
    newItem.classList.add("container__item");
    newItem.textContent = `Element ${counter + 1}`;
    container.appendChild(newItem);
    counter++;
  }
});
