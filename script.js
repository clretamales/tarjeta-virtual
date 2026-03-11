const serviceCards = document.querySelectorAll(".service-card");
const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scrollTarget ?? "");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href") || "";
    if (targetId.startsWith("#")) {
      event.preventDefault();
      const targetSection = document.querySelector(targetId);
      targetSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.35 }
  );

  serviceCards.forEach((card) => observer.observe(card));
} else {
  serviceCards.forEach((card) => card.classList.add("visible"));
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.namedItem("name")?.value.trim();
  const company = form.elements.namedItem("company")?.value.trim();
  const email = form.elements.namedItem("email")?.value.trim();
  const message = form.elements.namedItem("message")?.value.trim();

  if (!name || !company || !email || !message || !emailPattern.test(email)) {
    feedback.textContent =
      "Por favor completa todos los campos con información válida antes de enviar.";
    feedback.classList.remove("success");
    return;
  }

  feedback.textContent = "Listo. Gracias por tu consulta. Te responderé pronto.";
  feedback.classList.add("success");
  form.reset();
});
