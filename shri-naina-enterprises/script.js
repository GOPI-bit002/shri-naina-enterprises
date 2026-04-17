/* ==========================================================
   Shri Naina Enterprises — Scripts
   - Mobile nav toggle
   - Sticky header shadow on scroll
   - Smooth reveal on scroll
   - Contact form UX
   - Dynamic footer year
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- MOBILE MENU TOGGLE ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  // Close mobile menu on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  });

  /* ---------- STICKY HEADER SHADOW ---------- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));

  /* ---------- CONTACT FORM ---------- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const phone   = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !phone || !message) {
      note.textContent = 'Please fill in all fields.';
      note.className = 'form-note error';
      return;
    }

    // Open default mail client with prefilled content
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:eshrinaina@gmail.com?subject=${subject}&body=${body}`;

    note.textContent = 'Thank you! Opening your email to send the enquiry.';
    note.className = 'form-note success';
    form.reset();
  });

  /* ---------- FOOTER YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
