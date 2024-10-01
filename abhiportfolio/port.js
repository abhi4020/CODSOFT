const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').replace('/', '');
    const section = document.getElementById(sectionId);
    section.classList.add('active');
    // remove active class from other sections
    document.querySelectorAll('section').forEach((s) => {
      if (s !== section) {
        s.classList.remove('active');
      }
    });
  });
});

document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.active').forEach((section) => {
        section.classList.remove('active');
      });
      const sectionId = link.getAttribute('href').replace('/', '');
      const section = document.getElementById(sectionId);
      section.classList.add('active');
    });
  });