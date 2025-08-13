let section = document.querySelector("section"),
icons = document.querySelector(".icons")

icons.onclick = () => {
  section.classList.toggle("dark");
}
