/* ===== Mobile menu ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
  });
});

/* ===== Active nav link on scroll ===== */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
  let current = '';
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(function (item) {
    item.classList.remove('active');
    if (item.getAttribute('href') === '#' + current) {
      item.classList.add('active');
    }
  });
});

/* ===== Typing effect in hero ===== */
const typedText = document.getElementById('typedText');
const phrases = ['Frontend Developer', 'React & Next.js Enthusiast', 'UI/UX Focused Coder'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();

/* ===== Cursor glow follow ===== */
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', function (e) {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

/* ===== Scroll reveal animation ===== */
const revealElements = document.querySelectorAll('.reveal-up');

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(function (el) {
  revealObserver.observe(el);
});

/* ===== Skill bar animation ===== */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

skillFills.forEach(function (fill) {
  skillObserver.observe(fill);
});

/* ===== Contact form ===== */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  formMessage.textContent = 'Thank you! Your message has been sent.';
  contactForm.reset();
  setTimeout(function () {
    formMessage.textContent = '';
  }, 4000);
});
