const button = document.querySelectorAll(".accordion-btn");
const text = document.querySelectorAll(".accordion-text");
const image = document.querySelectorAll('.image');

button.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.toggle('btn-active');
    image[index].classList.toggle('img-rotate');

    if (!text[index].classList.contains("active")) {
      text[index].classList.add("active");
      text[index].style.height = "auto";
      let height = text[index].clientHeight + "px";
      text[index].style.height = "0px";
      setTimeout(() => {
        text[index].style.height = height;
      }, 0);
    } else {
      text[index].style.height = "0px";
      text[index].addEventListener(
        "transitionend",
        (e) => {
          text[index].classList.remove("active");
        },
        {
          once: true,
        }
      );
    }
  });
});
