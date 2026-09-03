document.querySelectorAll(".lesson > button").forEach((button) => {
  button.addEventListener("click", () => {
    const lesson = button.closest(".lesson");
    const detail = lesson.querySelector(".lesson-detail");
    const control = button.querySelector("b");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    lesson.classList.toggle("is-open", !isOpen);
    detail.hidden = isOpen;
    control.textContent = isOpen ? "+" : "−";
  });
});
