console.log("DOM Manipulation");

// Selection by ID
const first = document.getElementById("first");

first.style.color = "blue";
first.style.fontSize = "20px";

// fontSize
// backgroundColor
// backgroundImage

// Selection by ClassName
const elements = document.getElementsByClassName("para");

elements[0].innerHTML = "This is a modified paragraph";

function changeTextColor() {
  const selectedText = document.getElementById("text");

  selectedText.style.fontWeight = "bold";
  selectedText.style.color = "blue";
  selectedText.style.fontSize = "40px";
}

function welcome() {
  console.log("You are welcome!!");
}
