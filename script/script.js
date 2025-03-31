document.addEventListener("DOMContentLoaded", function () {
  // Accordion para a seção de projetos
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      // Fecha todos os outros itens
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion-content").style.display = "none";
        }
      });

      // Alterna o item atual
      const content = item.querySelector(".accordion-content");
      const isActive = item.classList.contains("active");

      if (isActive) {
        content.style.display = "none";
        item.classList.remove("active");
      } else {
        content.style.display = "block";
        item.classList.add("active");
      }
    });
  });
});