document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Reveal Animations (Replacing useReveal Hook)
  const revealElements = document.querySelectorAll(".fade-up");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach((el) => revealObserver.observe(el));


  // 2. Active Section Highlighting in Navbar
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");
        
        // Remove active class from all links
        navLinks.forEach((link) => {
          link.classList.remove("active");
          // Add active class if the href matches the section ID
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.3 }); // Triggers when 30% of the section is visible

  sections.forEach((sec) => {
    if (sec.id) navObserver.observe(sec);
  });


  // 3. Smooth Scrolling for Navigation Links
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
