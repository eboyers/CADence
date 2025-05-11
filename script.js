/* ========== Navigation ========== */
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileToggle.textContent = "☰";
  });
});

/* ========== Smooth Scrolling ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

/* ========== Back‑to‑Top ========== */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.pageYOffset > 300);
});

backToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

/* ========== Contact Form ========== */
const form      = document.getElementById("contactForm");
const statusBox = document.getElementById("formStatus");
const submitBtn = form.querySelector(".submit-button");

emailjs.init("5HhT0MvIWc0BTo9L4");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.disabled  = true;
  submitBtn.textContent = "Sending…";

  emailjs.sendForm("service_d7p0vlr", "template_ym3afwg", form)
    .then(() => {
      form.style.display = "none";                       // only the form
      showStatus("Thanks for reaching out! We'll reply shortly.", true);
      form.reset();
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      showStatus("Uh‑oh! Something went wrong. Please try again.", false);
    })
    .finally(() => {
      submitBtn.disabled  = false;
      submitBtn.textContent = "Send Message";
    });
});

function showStatus(msg, ok) {
  statusBox.textContent = msg;
  statusBox.className   = `form-status ${ok ? "success" : "error"} show`;
}