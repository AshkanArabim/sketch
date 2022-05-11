const canvasser = document.querySelector("#canvasser");

function canvas() {
  let length = prompt("Enter length of canvas side: (from 0 to 100)");
  if (!(0 <= length && length <= 100)) {
    alert("Error: Length of canvas should be between 0 and 100");
    return;
  }

  let area = length * length;
  let container = document.querySelector(".container");

  while (document.querySelector(".container div")) {
    container.removeChild(document.querySelector(".container div"));
  }

  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${length}, 1fr); grid-template-rows: repeat(${length}, 1fr)`
  );

  for (i = 1; i <= area; i++) {
    let pixel = document.createElement("div");
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "#000000";
    });
    container.appendChild(pixel);
  }
}

canvasser.addEventListener("click", canvas);
