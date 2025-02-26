// Set current year
const year = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = year;

// Make mobile navigation work
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
