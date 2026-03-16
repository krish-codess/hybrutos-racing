# Development Guide - Hybrutos Racing Website

## 🔧 Development Setup

### Prerequisites
- Modern web browser
- Code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, JavaScript

### Recommended VS Code Extensions
- Live Server
- Prettier - Code formatter
- CSS Peek
- HTML CSS Support
- JavaScript (ES6) code snippets

## 📂 File Structure Explained

### index.html
Main HTML document containing:
- **Header**: Navigation and theme toggle
- **Sections**: Hero, About, Technology, Team, Achievements, Contact
- **Footer**: Links and newsletter
- All content is semantic and accessible

### styles/main.css
Complete stylesheet organized by:
1. CSS Variables (theme system)
2. Reset & base styles
3. Component styles (navbar, hero, sections)
4. Animations
5. Responsive breakpoints

### scripts/main.js
JavaScript functionality:
- Theme management
- Navigation interactions
- Scroll animations
- Counter animations
- Form handling
- Performance optimizations

## 🎨 Design Principles

### 1. Minimalism
- Clean layouts with generous white space
- Limited color palette
- Clear visual hierarchy
- Focus on content

### 2. Racing Aesthetic
- Bold typography (Orbitron)
- Speed-inspired gradients
- Angular design elements
- Performance metrics showcase

### 3. Interactivity
- Smooth animations
- Hover effects
- Scroll-triggered reveals
- Responsive feedback

## 🔄 Theme System

### How It Works

```javascript
// Check saved preference
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply theme
html.setAttribute('data-theme', currentTheme);

// CSS variables update automatically
[data-theme="dark"] {
    --bg-primary: #0a0a0a;
    --text-primary: #ffffff;
}
```

### Adding New Theme Variables

1. Define in `:root` for light mode
2. Override in `[data-theme="dark"]` for dark mode
3. Use variables throughout CSS: `var(--variable-name)`

## 🎭 Animation System

### Scroll Animations

Using Intersection Observer API:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, { threshold: 0.1 });
```

### Adding Custom Animations

1. Add `data-aos="fade-up"` to HTML element
2. Define animation in CSS
3. Observer automatically triggers

### Available Animations
- `fade-up`: Fade in from bottom
- `fade-right`: Fade in from left
- `fade-left`: Fade in from right
- `zoom-in`: Scale up animation

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 480px)  { /* Mobile */ }
@media (max-width: 768px)  { /* Tablet */ }
@media (max-width: 1024px) { /* Small Desktop */ }
```

### Best Practices
- Start with mobile styles
- Use relative units (rem, em, %)
- Test on real devices
- Optimize images for different sizes

## 🚀 Performance Optimization

### CSS Optimization
```css
/* Use CSS Grid for layouts */
.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

/* Prefer CSS animations over JS */
@keyframes slideIn {
    from { transform: translateX(-50px); }
    to { transform: translateX(0); }
}
```

### JavaScript Optimization
```javascript
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

window.addEventListener('scroll', debounce(myFunction, 100));
```

### Loading Performance
- Minimize HTTP requests
- Use CSS sprites for icons
- Defer non-critical JavaScript
- Lazy load images

## 🧩 Component Development

### Adding a New Section

1. **HTML Structure**
```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <span class="section-label">Label</span>
            <h2 class="section-title">Title</h2>
        </div>
        <!-- Content -->
    </div>
</section>
```

2. **CSS Styling**
```css
.new-section {
    padding: 8rem 0;
    background: var(--bg-secondary);
}
```

3. **Navigation Link**
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### Creating Interactive Cards

```html
<div class="card" data-aos="zoom-in">
    <div class="card-icon"><!-- Icon --></div>
    <h3>Title</h3>
    <p>Description</p>
</div>
```

```css
.card {
    padding: 3rem;
    background: var(--bg-secondary);
    transition: all var(--transition-base);
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}
```

## 🔍 Debugging Tips

### Common Issues

**Theme not persisting:**
- Check localStorage in DevTools
- Verify theme attribute on `<html>`

**Animations not triggering:**
- Check Intersection Observer setup
- Verify threshold and rootMargin
- Ensure data-aos attributes are correct

**Mobile menu not working:**
- Check JavaScript event listeners
- Verify hamburger class toggling
- Test on actual mobile device

### Browser DevTools

```javascript
// Check theme
localStorage.getItem('theme')

// Test animations
document.querySelectorAll('[data-aos]').forEach(el => {
    console.log(el.classList.contains('aos-animate'));
});

// Monitor scroll position
window.addEventListener('scroll', () => {
    console.log('Scroll Y:', window.pageYOffset);
});
```

## 🧪 Testing Checklist

### Functionality
- [ ] Theme toggle works and persists
- [ ] Navigation links scroll to sections
- [ ] Mobile menu opens/closes
- [ ] Forms submit correctly
- [ ] Counters animate on scroll
- [ ] All links work

### Responsive
- [ ] Mobile (< 480px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)
- [ ] Ultra-wide (1920px+)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG
- [ ] Focus indicators visible
- [ ] Alt text for images

### Performance
- [ ] Page loads < 3 seconds
- [ ] Smooth animations (60fps)
- [ ] No console errors
- [ ] Images optimized

## 🎓 Learning Resources

### CSS
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### JavaScript
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### Web Design
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

## 🔐 Security Best Practices

### Form Handling
```javascript
// Sanitize user input
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Validate email
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### Content Security
- Never trust user input
- Validate on both client and server
- Use HTTPS for production
- Implement CORS properly

## 📈 Future Enhancements

### Potential Features
- Blog section with articles
- Gallery with racing photos
- Video showcase
- Sponsor section
- Team member profiles
- Live race results
- 3D car viewer
- Interactive timeline

### Technical Improvements
- Service Worker for offline support
- Progressive Web App (PWA)
- Image lazy loading
- Code splitting
- CDN integration
- Analytics integration

## 🐛 Bug Reporting

When reporting bugs, include:
1. Browser and version
2. Device type
3. Steps to reproduce
4. Expected vs actual behavior
5. Console errors (if any)
6. Screenshots

## 💡 Tips & Tricks

### VS Code Snippets
Create custom snippets for faster development:

```json
{
    "Section Template": {
        "prefix": "section",
        "body": [
            "<section id=\"$1\" class=\"$1\">",
            "    <div class=\"container\">",
            "        <div class=\"section-header\" data-aos=\"fade-up\">",
            "            <span class=\"section-label\">$2</span>",
            "            <h2 class=\"section-title\">$3</h2>",
            "        </div>",
            "        $0",
            "    </div>",
            "</section>"
        ]
    }
}
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "Add new section"

# Push to remote
git push origin feature/new-section
```

### Quick Testing
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

## 📞 Support

For development questions:
- Check documentation first
- Review code comments
- Search existing issues
- Ask in community forums

---

**Happy Coding! 🏎️💨**