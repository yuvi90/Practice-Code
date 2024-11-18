const king = document.querySelector("#king");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

// Source Drag Events
king.addEventListener("dragstart", dragstart);
king.addEventListener("drag", dragging);
king.addEventListener("dragend", dragend);

let beingDragged;

function dragstart(e) {
  beingDragged = e.target;
}

function dragging(e) {
  infoDisplay.textContent = `You are dragging ${beingDragged.id}`;
}

function dragend(e) {
  setTimeout(() => (infoDisplay.textContent = ""), 2000);
}

// Destination Drag Events
squares.forEach((square) => {
  square.addEventListener("dragover", dragover);
  square.addEventListener("dragenter", dragenter);
  square.addEventListener("dragleave", dragleave);
  square.addEventListener("drop", drop);
  square.addEventListener("dragend", dragend);
});

function dragover(e) {
  e.preventDefault(); // It is important to prevent the default behavior and it is used to allow dropping.
  console.log(`You are dragging over the ${e.target.id}`);
}
function dragenter(e) {
  console.log(`You are entering the ${e.target.id}`);
  e.target.classList.add("highlight");
}
function dragleave(e) {
  console.log(`You are leaving the ${e.target.id}`);
  e.target.classList.remove("highlight");
}
function drop(e) {
  infoDisplay.textContent = `You have dropped on ${e.target.id}`;
  e.target.append(beingDragged);
  e.target.classList.remove("highlight");
}
