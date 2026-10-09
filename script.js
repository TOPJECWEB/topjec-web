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
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();
  // Replace this address with your real business email before publishing.
  const recipient = 'hello@yourdomain.com';
  const subject = encodeURIComponent(`New website enquiry — ${service}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`
  );
  const status = document.querySelector('#form-status');
  status.textContent = 'Opening your email app. Replace hello@yourdomain.com in script.js with your real email before launch.';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
