// Cursor glow
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav on scroll
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) link.classList.add('active');
  });
});

// Typing effect — Full Stack Developer version
const phrases = [
  'Full Stack Developer',
  'Frontend Specialist',
  'Backend Engineer',
  'API & AI Integrator',
  'Problem Solver'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    typedText.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  } else {
    typedText.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  }
  setTimeout(type, isDeleting ? 40 : 90);
}
type();

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate skill bars
      if (entry.target.classList.contains('skill-item')) {
        const fill = entry.target.querySelector('.skill-fill');
        fill.style.width = fill.dataset.width + '%';
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

// Contact form
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMessage');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = '✓ Thanks for your message! I will get back to you soon.';
  form.reset();
  setTimeout(() => formMsg.textContent = '', 5000);
});
