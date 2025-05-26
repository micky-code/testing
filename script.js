// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Projects data
  const projects = [
    {
      title: "Project One - Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills. Built with HTML, CSS, and JavaScript.",
      link: "#"
    },
    {
      title: "Project Two - Task Manager App",
      description: "A full-stack task management app using React and Node.js with user authentication and CRUD functionality.",
      link: "#"
    },
    {
      title: "Project Three - E-commerce Platform",
      description: "An online store with product listings, cart functionality, and payment integration.",
      link: "#"
    }
  ];

  // Load projects dynamically
  const projectsContainer = document.querySelector('.projects-container');
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}">View Project</a>
    `;
    projectsContainer.appendChild(projectCard);
  });

  // Smooth scrolling for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "#1abc9c";
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 3 seconds
    setTimeout(() => {
      formMessage.textContent = "";
    }, 3000);
  });

  // Animation on scroll
  const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Run on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});