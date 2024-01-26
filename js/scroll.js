const scrollBtn = document.querySelector(".btn-up");

const btnVisibilaty = () => {
  if (window.scrollY > 500) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
};
document.addEventListener("scroll", () => {
  btnVisibilaty();
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
