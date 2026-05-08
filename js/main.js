/* ============================================
   KERWIN ARIAS — Portfolio JS
   Top-Nav + Typed Effect + Counters + Reveal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header Scroll Effect ---------- */
  const header = document.getElementById('header');
  function handleHeaderScroll() {
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ---------- Active Nav on Scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  function setActiveNav() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 200) {
        current = sec.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });

  /* ---------- Mobile Nav Toggle ---------- */
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navbarUl = document.querySelector('.navbar ul');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navbarUl.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      icon.classList.toggle('bi-list');
      icon.classList.toggle('bi-x');
    });
  }

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarUl.classList.contains('open')) {
        navbarUl.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        icon.classList.add('bi-list');
        icon.classList.remove('bi-x');
      }
    });
  });

  /* ---------- Typed Text Effect ---------- */
  const typedEl = document.getElementById('typed-text');
  let words = (typeof I18N !== 'undefined') ? I18N.get('_typedWords') : ['Ingeniero de Software', 'Gerente de Proyectos', 'Consultor Senior', 'Arquitecto de Datos'];
  let wordIdx = 0, charIdx = 0, deleting = false, speed = 100;
  let typedTimeout = null;

  function typeEffect() {
    const word = words[wordIdx];
    if (deleting) {
      typedEl.textContent = word.substring(0, --charIdx);
      speed = 35;
    } else {
      typedEl.textContent = word.substring(0, ++charIdx);
      speed = 90;
    }
    if (!deleting && charIdx === word.length) {
      speed = 2500;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 500;
    }
    typedTimeout = setTimeout(typeEffect, speed);
  }
  if (typedEl) typeEffect();

  // Listen for language change to update typed words
  window.addEventListener('langChanged', (e) => {
    if (typeof I18N !== 'undefined') {
      words = I18N.get('_typedWords');
      // Reset typing to first word
      if (typedTimeout) clearTimeout(typedTimeout);
      wordIdx = 0;
      charIdx = 0;
      deleting = false;
      speed = 100;
      if (typedEl) {
        typedEl.textContent = '';
        typeEffect();
      }
    }
  });

  /* ---------- Skill Bars Animation ---------- */
  let skillsAnimated = false;
  function animateSkills() {
    if (skillsAnimated) return;
    const skillSection = document.querySelector('.skill-section');
    if (!skillSection) return;
    const rect = skillSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
      skillsAnimated = true;
      document.querySelectorAll('.progress-bar').forEach((bar, i) => {
        const w = bar.dataset.width;
        setTimeout(() => { bar.style.width = w + '%'; }, 200 + i * 100);
      });
    }
  }
  window.addEventListener('scroll', animateSkills, { passive: true });
  animateSkills();

  /* ---------- Counter Animation ---------- */
  let countersAnimated = false;

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function animateCounters() {
    if (countersAnimated) return;
    const counterSection = document.querySelector('.counter-section');
    if (!counterSection) return;
    const rect = counterSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
      countersAnimated = true;
      document.querySelectorAll('.counter-value').forEach(el => {
        const target = +el.dataset.target;
        const duration = 2200;
        const startTime = performance.now();
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutExpo(progress);
          const current = Math.floor(easedProgress * target);
          el.textContent = current.toLocaleString();
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }
        requestAnimationFrame(updateCounter);
      });
    }
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  /* ---------- Scroll Reveal ---------- */
  const revealEls = document.querySelectorAll('.about-box, .counter-box, .contact-box, .title-box.text-center, .timeline-item, .edu-card, .competencies-box, .blog-card, .cert-item, .lang-item');
  revealEls.forEach(el => el.classList.add('reveal-el'));

  function scrollReveal() {
    document.querySelectorAll('.reveal-el').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('revealed');
      }
    });
  }
  window.addEventListener('scroll', scrollReveal, { passive: true });
  scrollReveal();

  /* ---------- Back to Top ---------- */
  const btt = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (btt) btt.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  if (btt) {
    btt.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact Form ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-send');
      const orig = btn.innerHTML;
      const sentText = (typeof I18N !== 'undefined') ? I18N.get('contact.sent') : '¡Enviado!';
      btn.innerHTML = '<i class="fas fa-check"></i> ' + sentText;
      btn.style.background = '#28a745';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  /* ---------- Smooth Anchor Scroll ---------- */
  /* ---------- Dynamic Footer Year ---------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Smooth Anchor Scroll ---------- */
  document.querySelectorAll('a.scrollto, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

});
