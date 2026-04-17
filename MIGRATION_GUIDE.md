# Hybrutos Racing - React + Vite + Tailwind CSS Migration

This project has been successfully converted from a static HTML/CSS/JavaScript website into a modern React application with Vite and Tailwind CSS.

## 🚀 Project Setup

### Tech Stack
- **React 19.2.4** - UI framework
- **Vite 8.0.4** - Build tool and dev server
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **React Router DOM 7.14.1** - Client-side routing

### Key Features
- ✅ Hot Module Replacement (HMR) for fast development
- ✅ Dark theme with racing aesthetic
- ✅ Custom fonts: Orbitron (headings) and Rajdhani (body)
- ✅ Responsive design with Tailwind CSS
- ✅ Theme toggle functionality
- ✅ Gradient text effects
- ✅ Smooth animations and transitions
- ✅ SEO-friendly component structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout wrapper
│   ├── Header.jsx          # Header with logo and theme toggle
│   ├── Navigation.jsx      # Navigation menu with dropdown
│   └── Footer.jsx          # Footer component
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Profile.jsx         # Team profile page
│   ├── CompetitionDetail.jsx  # Competition info page
│   └── teams/
│       ├── TeamAerodynamics.jsx
│       ├── TeamBusiness.jsx
│       ├── TeamChassis.jsx
│       ├── TeamElectronics.jsx
│       ├── TeamPowertrain.jsx
│       └── TeamSuspension.jsx
├── App.jsx                 # Main app with routing
├── index.css              # Global styles with Tailwind
└── main.jsx               # Entry point

public/
├── index.html             # HTML template

Configuration Files:
├── vite.config.js         # Vite configuration
├── postcss.config.js      # PostCSS with Tailwind
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Tailwind CSS Configuration

Custom extensions configured in `tailwind.config.js`:
- Custom color palette for racing theme
- Custom font families (Orbitron, Rajdhani)
- Responsive breakpoints
- Custom gradients and effects

### Custom CSS Classes

Located in `src/index.css`:
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.card` - Card component styling
- `.gradient-text` - Gradient text effect
- `.section-heading` - Section heading styling
- `.tab-nav-link` - Navigation link styling

## 🔧 Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

## 🌓 Theme System

The application includes a theme toggle feature that persists to localStorage:
- Click the sun/moon icon in the top-right corner to toggle themes
- Theme preference is saved and restored on subsequent visits
- CSS variables can be used for theme-specific styling

## 📄 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with team overview |
| `/profile` | Profile | Team profile and departments |
| `/team/aerodynamics` | TeamAerodynamics | Aerodynamics department |
| `/team/business` | TeamBusiness | Business & Operations |
| `/team/chassis` | TeamChassis | Chassis engineering |
| `/team/electronics` | TeamElectronics | Electronics and controls |
| `/team/powertrain` | TeamPowertrain | Powertrain systems |
| `/team/suspension` | TeamSuspension | Suspension design |
| `/competition` | CompetitionDetail | Competition information |

## 🎯 Component Hierarchy

```
App (React Router)
├── Layout
│   ├── Header
│   ├── Navigation
│   ├── Routes (Page Components)
│   └── Footer
```

## 📦 Dependencies

### Production
- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Routing and navigation

### Development
- **@vitejs/plugin-react** - React plugin for Vite
- **tailwindcss** - CSS framework
- **@tailwindcss/postcss** - Tailwind PostCSS plugin
- **postcss** - CSS transformation
- **autoprefixer** - CSS vendor prefixes
- **eslint** - Code linting

## 🚀 Performance Optimizations

- Lazy loading with React Router
- Code splitting by route
- CSS purging with Tailwind (only used styles included)
- Optimized CSS with @tailwindcss/postcss

## 🎓 Migration Notes

### What Changed
1. **HTML → JSX Components**: All HTML files converted to reusable React components
2. **CSS → Tailwind Classes**: Custom CSS migrated to Tailwind utility classes
3. **JavaScript → React Hooks**: Event handlers and state management using React
4. **Routing**: Added React Router for multi-page navigation

### Key Improvements
- Better code organization and reusability
- Faster development with HMR
- Smaller CSS bundles with Tailwind purging
- Improved maintainability with component structure
- Type-safe with JSX

## 💡 Tips for Development

1. **Adding New Pages**: Create a new `.jsx` file in `src/pages/` and add a route in `App.jsx`
2. **Creating Components**: Reusable components go in `src/components/`
3. **Styling**: Use Tailwind classes directly in JSX. For complex styles, add to `src/index.css`
4. **Routing**: Update routes in `App.jsx` and navigation links in `Navigation.jsx`

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## 👥 Team Structure

The application showcases 6 main departments:
- **Aerodynamics** - CFD and aerodynamic optimization
- **Business & Operations** - Strategic planning and financials
- **Chassis** - Structural design and materials
- **Electronics** - Control systems and battery management
- **Powertrain** - Motor and drivetrain engineering
- **Suspension** - Handling dynamics and tuning

## 📝 License

This project is part of the Hybrutos Racing team initiative.

---

**Happy coding! 🏁**
