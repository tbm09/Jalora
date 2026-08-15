/**
 * JALORA – Premium Interactive Website
 * Handles: navbar, mobile menu, hero label rotation,
 * interactive customizer, showcase tabs, quote form → WhatsApp
 */

(function () {
  'use strict';

  // ========== CONFIG ==========
  const WHATSAPP_NUMBER = '918707304081';
  const PHONE_NUMBER = '+918707304081';

  // ========== NAVBAR ==========
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  function updateNavbar() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // ========== HERO LABEL ROTATION ==========
  const heroLabels = [
    { name: 'JALORA', tagline: 'हर अवसर पर, आपकी पहचान।', accent: '#0ea5e9' },
    { name: 'THE ROYAL HOTEL', tagline: 'Hospitality Redefined', accent: '#0369a1' },
    { name: 'SHARMA WEDDING', tagline: 'A Celebration of Love', accent: '#e11d48' },
    { name: 'GRAND PALACE', tagline: 'Fine Dining Experience', accent: '#b45309' },
    { name: 'YOUR BRAND NAME', tagline: 'Custom Label Preview', accent: '#0f172a' },
  ];

  let heroIndex = 0;
  const labelNameEl = document.getElementById('label-name');
  const labelTaglineEl = document.getElementById('label-tagline');
  const bottleLabel = document.getElementById('bottle-label');

  function rotateHeroLabel() {
    if (!labelNameEl || !labelTaglineEl) return;
    bottleLabel.style.opacity = '0';
    bottleLabel.style.transform = 'scale(0.96)';
    setTimeout(() => {
      heroIndex = (heroIndex + 1) % heroLabels.length;
      const next = heroLabels[heroIndex];
      labelNameEl.textContent = next.name;
      labelTaglineEl.textContent = next.tagline;
      bottleLabel.style.opacity = '1';
      bottleLabel.style.transform = 'scale(1)';
    }, 400);
  }

  // Start rotation after a short delay, then every 4.5s
  setTimeout(() => {
    setInterval(rotateHeroLabel, 4500);
  }, 3000);

  // ========== INTERACTIVE CUSTOMIZER ==========
  const brandInput = document.getElementById('brand-input');
  const customLabelName = document.getElementById('custom-label-name');
  const customLabelType = document.getElementById('custom-label-type');
  const orderThisDesign = document.getElementById('order-this-design');
  let currentOccasion = 'event';

  const occasionLabels = {
    wedding: 'Wedding Special',
    hotel: 'Hotel Collection',
    restaurant: 'Restaurant Edition',
    corporate: 'Corporate Branding',
    birthday: 'Birthday Celebration',
    event: 'Custom Label',
  };

  function updateCustomLabel() {
    const name = (brandInput?.value || 'YOUR BRAND').trim().toUpperCase() || 'YOUR BRAND';
    if (customLabelName) customLabelName.textContent = name.length > 22 ? name.slice(0, 20) + '…' : name;
    if (customLabelType) customLabelType.textContent = occasionLabels[currentOccasion] || 'Custom Label';
  }

  if (brandInput) {
    brandInput.addEventListener('input', updateCustomLabel);
  }

  document.querySelectorAll('.occasion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.occasion-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentOccasion = btn.dataset.type;
      updateCustomLabel();
    });
  });

  // ========== GO TO QUOTE FORM (scroll + prefill) ==========
  function goToQuote(opts) {
    const size = opts && opts.size;
    const business = opts && opts.business;
    const form = document.getElementById('quote-form');
    const section = document.getElementById('quote');
    if (form) {
      if (size) {
        const sizeSelect = form.querySelector('[name="size"]');
        if (sizeSelect) sizeSelect.value = size;
      }
      if (business) {
        const biz = form.querySelector('[name="business"]');
        if (biz) biz.value = business;
      }
    }
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const first = form && form.querySelector('[name="name"]');
        if (first) first.focus();
      }, 500);
    }
  }

  document.querySelectorAll('.js-go-quote').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const size = this.getAttribute('data-size') || '';
      let business = '';
      if (this.id === 'order-this-design' && brandInput) {
        business = (brandInput.value || '').trim();
      }
      goToQuote({ size, business });
    });
  });

  // ========== SHOWCASE TABS ==========
  const showcaseData = {
    wedding: { title: 'Sharma Wedding', sub: 'Wedding Special', tagline: 'A celebration of love', color: '#e11d48' },
    hotel: { title: 'The Royal Hotel', sub: 'Hotel Collection', tagline: 'Hospitality redefined', color: '#0369a1' },
    restaurant: { title: 'Grand Palace', sub: 'Restaurant Edition', tagline: 'Fine dining experience', color: '#b45309' },
    corporate: { title: 'Apex Solutions', sub: 'Corporate Branding', tagline: 'Professional excellence', color: '#0f172a' },
    birthday: { title: 'Happy Birthday', sub: 'Birthday Special', tagline: 'Make it memorable', color: '#db2777' },
    event: { title: 'Special Event', sub: 'Event Edition', tagline: 'Your moment, your brand', color: '#0284c7' },
  };

  const showcaseName = document.getElementById('showcase-name');
  const showcaseLabel = document.getElementById('showcase-label');

  document.querySelectorAll('.showcase-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.showcase-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.label;
      const data = showcaseData[key];
      if (!data || !showcaseName || !showcaseLabel) return;

      showcaseLabel.style.opacity = '0';
      setTimeout(() => {
        showcaseName.textContent = data.title;
        const subEl = showcaseLabel.querySelector('p:first-child');
        const tagEl = showcaseLabel.querySelector('p:last-child');
        if (subEl) {
          subEl.textContent = data.sub;
          subEl.style.color = data.color;
        }
        if (tagEl) tagEl.textContent = data.tagline;
        showcaseLabel.style.opacity = '1';
      }, 280);
    });
  });

  // ========== QUOTE FORM → WHATSAPP ==========
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const fd = new FormData(quoteForm);
      const name = (fd.get('name') || '').trim();
      const phone = (fd.get('phone') || '').trim();
      if (!name || !phone) {
        alert('Please fill Name and Phone Number.');
        return;
      }
      const lines = [
        'Hello JALORA, I want to order customized water bottles.',
        '',
        '—— ORDER DETAILS ——',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `WhatsApp: ${(fd.get('whatsapp') || phone).trim()}`,
        `Business / Event: ${(fd.get('business') || '').trim() || '—'}`,
        `Bottle Quantity: ${fd.get('quantity') || '—'}`,
        `Bottle Size: ${fd.get('size') || '—'}`,
        `Delivery Location: ${(fd.get('location') || '').trim() || '—'}`,
        `Required Delivery Date: ${fd.get('date') || '—'}`,
        `Custom Label Required: ${fd.get('custom') || 'Yes'}`,
        `Additional Requirements: ${(fd.get('notes') || '').trim() || 'None'}`,
        '',
        'Please share pricing and available options. Thank you!',
      ];
      const text = encodeURIComponent(lines.join('\n'));
      // WhatsApp on mobile opens app; on desktop opens web
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    });
  }

  // ========== SCROLL REVEAL (lightweight) ==========
  const revealEls = document.querySelectorAll('.product-card, #how-it-works .group, #about .p-6');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  // ========== Update all placeholder WhatsApp / Phone links on load ==========
  // (keeps the HTML clean; real numbers live only in this file)
  document.querySelectorAll('a[href*="wa.me/91XXXXXXXXXX"]').forEach(a => {
    a.href = a.href.replace('91XXXXXXXXXX', WHATSAPP_NUMBER);
  });
  document.querySelectorAll('a[href^="tel:+91XXXXXXXXXX"]').forEach(a => {
    a.href = a.href.replace('+91XXXXXXXXXX', PHONE_NUMBER);
  });

})();
