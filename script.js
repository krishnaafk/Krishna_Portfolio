const body = document.body;
const btn = document.getElementById("themeBtn");
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") body.classList.add("dark");
else body.classList.add("light");

btn.onclick = () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
};

const skills = document.querySelectorAll(".progress");
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.width = e.target.getAttribute("data-width");
        }
    });
});
skills.forEach(s => observer.observe(s));

const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("input[placeholder='Enter your name']").value;
    const email = form.querySelector("input[placeholder='Enter your email']").value;
    const message = form.querySelector("input[placeholder='Message']").value;
    if (name && email && message) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("message", message);
        window.location.href = "form-details.html";
    }
});

// Project cards no longer redirect to external pages by default.
// If you want clickable cards later, add a `data-link` and re-enable navigation here.

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);

let index = 0;
const slides = document.querySelectorAll(".slide");
document.getElementById("next").onclick = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
};
document.getElementById("prev").onclick = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
};

const topBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
