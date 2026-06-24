const scrollButtons = document.querySelectorAll(".footer-scroll-btn[data-scroll-target]");

for (const button of scrollButtons) {
  button.addEventListener("click", () => {
    const target = String(button.dataset.scrollTarget || "");
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (target === "bottom") {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  });
}
