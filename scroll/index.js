const items = document.querySelectorAll(".item");
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(items);
  items.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) item.classList.add("show");
    else item.classList.remove("show");
  });
}
