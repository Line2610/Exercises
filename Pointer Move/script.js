const bgpointer = document.querySelector("body");
bgpointer.addEventListener("mousedown", mouseMMove);

function mouseMMove(evt) {
  const procenter = ((evt.clientX / window.innerWidth) * 100).toFixed(2);
  console.log(procenter);
  bgpointer.style.setProperty("--pointerX", procenter);
}
