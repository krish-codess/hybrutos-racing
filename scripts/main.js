// ========================================
// THEME TOGGLE
// ========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => { themeToggle.style.transform = ''; }, 300);
});

// ========================================
// TAB NAVIGATION SYSTEM
// ========================================
const TAB_ORDER = ['home', 'about', 'technology', 'team', 'achievements', 'gallery', 'contact'];

function getTabIndex(tabId) {
    return TAB_ORDER.indexOf(tabId);
}

let currentTab = null;

function switchTab(tabId, pushState = true) {
    if (!tabId || tabId === currentTab) return;

    const panels   = document.querySelectorAll('.tab-panel');
    const navLinks = document.querySelectorAll('.tab-nav-link[data-tab]');
    const oldIndex = getTabIndex(currentTab);
    const newIndex = getTabIndex(tabId);

    // Direction for slide animation
    const direction = (oldIndex === -1 || newIndex > oldIndex) ? 'forward' : 'backward';

    panels.forEach(panel => {
        const id = panel.id.replace('tab-', '');
        if (id === currentTab) {
            panel.classList.add(direction === 'forward' ? 'slide-out-left' : 'slide-out-right');
            panel.classList.remove('active');
            setTimeout(() => {
                panel.classList.remove('slide-out-left', 'slide-out-right');
            }, 400);
        }
        if (id === tabId) {
            panel.classList.add(direction === 'forward' ? 'slide-in-right' : 'slide-in-left');
            panel.classList.add('active');
            // Trigger AOS-style animations inside newly active panel
            setTimeout(() => {
                panel.classList.remove('slide-in-right', 'slide-in-left');
                panel.querySelectorAll('[data-aos]').forEach(el => el.classList.add('aos-animate'));
            }, 50);
        }
    });

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.tab === tabId);
    });

    // Move the glowing tab indicator
    updateTabIndicator(tabId);

    currentTab = tabId;

    // Update URL hash without scrolling
    if (pushState) {
        history.pushState({ tab: tabId }, '', `#${tabId}`);
    }

    // Trigger counters on home tab
    if (tabId === 'home') {
        setTimeout(initCounters, 200);
    }

    // Scroll panel to top
    window.scrollTo({ top: 0 });
}

function updateTabIndicator(tabId) {
    const indicator = document.getElementById('tabIndicator');
    if (!indicator) return;
    const activeLink = document.querySelector(`.nav-menu .tab-nav-link[data-tab="${tabId}"]`);
    if (!activeLink) return;
    const navMenu = document.getElementById('navMenu');
    const menuRect = navMenu.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    indicator.style.left  = (linkRect.left - menuRect.left + navMenu.scrollLeft) + 'px';
    indicator.style.width = linkRect.width + 'px';
}

// Bind all .tab-nav-link elements
document.addEventListener('click', (e) => {
    const link = e.target.closest('.tab-nav-link[data-tab]');
    if (!link) return;
    e.preventDefault();
    const tabId = link.dataset.tab;
    if (tabId) switchTab(tabId);
    // Close mobile menu if open
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
});

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
    const tabId = (e.state && e.state.tab) || 'home';
    switchTab(tabId, false);
});

// Initial tab from URL hash
const initialHash = window.location.hash.replace('#', '') || 'home';
const validInitial = TAB_ORDER.includes(initialHash) ? initialHash : 'home';
switchTab(validInitial, false);

// Update indicator on resize
window.addEventListener('resize', () => {
    if (currentTab) updateTabIndicator(currentTab);
});

// ========================================
// NAVIGATION
// ========================================
const navbar    = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.pageYOffset > 50);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// ANIMATED COUNTERS
// ========================================
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? target : target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
        }
    }, 16);
}

function initCounters() {
    document.querySelectorAll('.stat-number:not(.counted)').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-count'));
        animateCounter(counter, target);
        counter.classList.add('counted');
    });
}

// ========================================
// SCROLL ANIMATIONS (AOS)
// ========================================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -80px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('aos-animate');
    });
}, observerOptions);

// Observe all [data-aos] elements that are inside the currently active panel
function observeAOS() {
    document.querySelectorAll('.tab-panel.active [data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Also observe on tab switch (handled in switchTab via direct add)
observeAOS();

// ========================================
// GALLERY FILTER
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        galleryItems.forEach((item, i) => {
            const show = filter === 'all' || item.dataset.category === filter;
            item.style.transition = `opacity 0.3s ease ${i * 30}ms, transform 0.3s ease ${i * 30}ms`;
            if (show) {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.style.display = '';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    if (btn.classList.contains('active') && item.dataset.category !== btn.dataset.filter && btn.dataset.filter !== 'all') {
                        item.style.display = 'none';
                    }
                }, 350);
            }
        });
    });
});

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.background = 'linear-gradient(135deg, #00d4aa 0%, #00d4ff 100%)';
        contactForm.reset();
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    }, 1500);
});

// Newsletter form
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button');
    btn.textContent = 'Subscribed! ✓';
    btn.disabled = true;
    e.currentTarget.reset();
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.disabled = false; }, 3000);
});

// ========================================
// TECH CARD TILT EFFECT
// ========================================
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const rotateX = ((e.clientY - rect.top)  / rect.height - 0.5) * 15;
        const rotateY = ((e.clientX - rect.left) / rect.width  - 0.5) * -15;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ========================================
// ACCESSIBILITY
// ========================================
const skipLink = document.createElement('a');
skipLink.href = '#';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = 'position:absolute;top:-40px;left:0;background:var(--accent-primary);color:white;padding:8px;text-decoration:none;z-index:10000;';
skipLink.addEventListener('focus', () => { skipLink.style.top = '0'; });
skipLink.addEventListener('blur',  () => { skipLink.style.top = '-40px'; });
document.body.prepend(skipLink);

// ========================================
// LOADING FADE IN
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => { document.body.style.opacity = '1'; });
});

// ========================================
// CONSOLE EASTER EGG
// ========================================
console.log('%c🏎️ HYBRUTOS RACING', 'font-size:30px;font-weight:bold;background:linear-gradient(135deg,#662d91,#9d4edd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;');
console.log('%cEngineering the future of racing.', 'font-size:14px;color:#666;');