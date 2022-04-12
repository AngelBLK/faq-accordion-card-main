const button = document.querySelectorAll(".accordion-btn");
const text = document.querySelectorAll(".accordion-text");

button.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    if (!text[index].classList.contains("active")) {
      text[index].classList.add('active');
      text[index].style.height = "auto";
      let height = text[index].clientHeight + "px";
      text[index].style.height = '0px';
      setTimeout(() => {
        text[index].style.height = height;
      }, 0);
    } else {
      text[index].style.height = '0px';
      text[index].addEventListener(
        "transitionend",
        (e) => {
          text[index].classList.remove('active');
        },
        {
          once: true,
        }
      );
    }
  });
});
