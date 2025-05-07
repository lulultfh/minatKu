window.addEventListener("scroll", function () {
  const boxes = document.querySelectorAll(".box");
  const triggerBottom = window.innerHeight * 0.9;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
