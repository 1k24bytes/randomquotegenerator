const genBtn = document.getElementById("newquote");
function generatePastelColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = "60%";
  const lightness = "80%";
  const pastel = `hsl(${hue}, ${saturation}, ${lightness})`;
  return pastel;
}
genBtn.addEventListener("click", () => {
  document.body.style.background = generatePastelColor();
});
