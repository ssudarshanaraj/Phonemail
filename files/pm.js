const faqButtons = document.querySelectorAll("#faq button");

faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const parent = button.parentElement;
    const content = parent.querySelector(".overflow-hidden");
    const arrow = button.querySelector("svg");

    // Close all other FAQs
    document.querySelectorAll("#faq .overflow-hidden").forEach(c => {
      if (c !== content) c.classList.remove("active");
    });

    // Reset all other arrows
    document.querySelectorAll("#faq button svg").forEach(a => {
      if (a !== arrow) a.classList.remove("rotate");
    });

    // Toggle this FAQ
    content.classList.toggle("active");
    arrow.classList.toggle("rotate");
  });
});