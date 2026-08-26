const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("desktopNav");

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  menuBtn.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    menuBtn.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const style = document.createElement("style");
style.textContent = `
@media(max-width:760px){
  #desktopNav.mobile-open{
    display:flex; position:absolute; top:76px; left:0; right:0;
    flex-direction:column; gap:0; background:rgba(251,250,246,.98);
    border-bottom:1px solid rgba(21,22,22,.1); padding:8px 6%;
  }
  #desktopNav.mobile-open a{padding:15px 0}
}`;
document.head.appendChild(style);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("demoForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent("Shopify Website Project Inquiry");
  const body = encodeURIComponent(
    `Name: ${data.get("firstName")} ${data.get("lastName") || ""}\n` +
    `Email: ${data.get("email")}\n` +
    `Brand: ${data.get("company")}\n\n` +
    `Project details:\n${data.get("message")}`
  );
  window.location.href = `mailto:contact@sparkserves.com?subject=${subject}&body=${body}`;
  status.textContent = "Opening your email client...";
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
