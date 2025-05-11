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

/* ========== Testimonials Slider ========== */
const dots = document.querySelectorAll(".testimonial-dot");
const testimonials = document.querySelectorAll(".testimonial-item");

dots.forEach(dot =>
  dot.addEventListener("click", () => {
    const idx = +dot.dataset.index;
    setActiveTestimonial(idx);
  })
);

let testimonialIdx = 0;
const rotateTestimonials = () => {
  testimonialIdx = (testimonialIdx + 1) % testimonials.length;
  setActiveTestimonial(testimonialIdx);
};

const setActiveTestimonial = index => {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
};

setInterval(rotateTestimonials, 5000);

/* ========== Contact Form (demo only) ========== */
const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData.entries());

  // For demo: just log and reset
  console.table(entries);
  alert("Thanks for reaching out! We'll reply shortly.");

  form.reset();
});
