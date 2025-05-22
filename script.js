// Highlight active navbar item based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav#navbar ul li a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
