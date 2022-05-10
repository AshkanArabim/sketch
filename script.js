function canvas(l) {
  if (l > 100) {
    console.warn("Length of canvas is more than 100");
    return;
  }

  let a = l * l;
  let container = document.querySelector(".container");

  while (document.querySelector(".container div")) {
    container.removeChild(document.querySelector(".container div"));
  }

  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${l}, 1fr); grid-template-rows: repeat(${l}, 1fr)`
  );

  for (i = 1; i <= a; i++) {
    let pixel = document.createElement("div");
    container.appendChild(pixel);
    // container.appendChild(pixel);
  }
}
