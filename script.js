function canvas(l) {
  if (!(0 <= l && l <= 100)) {
    console.log("Length of canvas should be between 0 and 100");
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
