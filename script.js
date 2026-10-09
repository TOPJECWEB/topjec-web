const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const counter = document.querySelector('.counter');
if (counter && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    const target = Number(counter.dataset.target || 0);
    const start = performance.now();
    const duration = 1100;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    observer.disconnect();
  });
  observer.observe(counter);
}

const form = document.querySelector('#lead-form');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.innerHTML;

  if (status) status.textContent = 'Sending your enquiry…';
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
  }

  try {
    const response = await fetch('https://formsubmit.app/f/7984qvnzu7', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });

    let result = {};
    try { result = await response.json(); } catch (_) {}

    if (!response.ok || result.success === false || result.error) {
      throw new Error(result.message || result.error || 'Submission failed');
    }

    form.reset();
    if (status) status.textContent = 'Thank you! Your enquiry has been submitted. TOPJEC WEB will get back to you soon.';
  } catch (error) {
    if (status) status.textContent = 'Sorry, your enquiry could not be sent right now. Please try again in a moment or email info@topjecweb.com directly.';
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText || 'Send enquiry ↗';
    }
  }
});


// Small, accessible interactions shared by the homepage and service pages.
(() => {
  const progress = document.querySelector('.scroll-progress');
  const topButton = document.querySelector('.back-to-top');
  const updateScrollUI = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const amount = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${amount}%`;
    if (topButton) topButton.classList.toggle('visible', window.scrollY > 420);
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();
  topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.service-card, .process-step, .detail-step, .faq-item, .about-panel, .contact-form, .included-panel');
  if (!reduceMotion && 'IntersectionObserver' in window && revealTargets.length) {
    document.documentElement.classList.add('reveal-ready');
    revealTargets.forEach((el) => el.classList.add('reveal'));
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  // Keep FAQ accordions tidy: opening one closes the others on the same page.
  document.querySelectorAll('.faq-list').forEach((list) => {
    list.querySelectorAll('details').forEach((item) => {
      item.addEventListener('toggle', () => {
        if (item.open) list.querySelectorAll('details').forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  });
})();
