// Animated counters
function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = +el.dataset.target;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString('pt-BR');
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// Trigger counters when "sobre" section becomes visible
const sobreSection = document.querySelector('.sobre');
if (sobreSection) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
    }
  }, { threshold: 0.3 }).observe(sobreSection);
}

// Navbar scroll shadow
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
}, { passive: true });

// Contact form
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      feedback.className = 'form-feedback form-feedback--error';
      return;
    }

    feedback.textContent = 'Enviando...';
    feedback.className = 'form-feedback';
    setTimeout(() => {
      feedback.textContent = '✅ Mensagem enviada! Entraremos em contato em breve.';
      feedback.className = 'form-feedback form-feedback--success';
      form.reset();
    }, 1200);
  });
}
