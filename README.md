# 🍽️ Restaurant Page

A dynamic single-page restaurant website with tabbed navigation, built using vanilla JavaScript, Webpack, and ES6 modules.

[🌐 **Live Demo**](https://k7le-777.github.io/restaurant-page/) | [📝 **View Code**](https://github.com/k7le-777/restaurant-page)

---

## 📋 About

Built as part of **The Odin Project's Full Stack JavaScript curriculum**, this project introduced me to modern JavaScript build tools and module systems. The entire site is generated dynamically using JavaScript—no static HTML content.

This was my **first experience with Webpack**, teaching me how modern web applications are bundled and deployed.

---

## ✨ Features

- 📑 **Tabbed Navigation** - Seamlessly switch between Home, Menu, and Contact pages
- 🎨 **Fully Dynamic** - All content generated with JavaScript DOM manipulation
- 📦 **Webpack Bundled** - Modern build process with module bundling
- 📱 **Responsive Design** - Mobile-first approach works on all devices
- ⚡ **Fast Loading** - Optimized bundle for quick page loads
- 🎯 **ES6 Modules** - Clean code organization with import/export

---

## 🛠️ Technologies

- **JavaScript (ES6+)** - Modules, DOM manipulation, event handling
- **Webpack 5** - Module bundling and build automation
- **HTML5** - Minimal shell for JavaScript injection
- **CSS3** - Modern styling and responsive layout
- **npm** - Package management
- **Git/GitHub** - Version control and deployment

---

## 🧠 Key Learnings

### Webpack Fundamentals

This project was my introduction to build tools. I learned:

**Configuration from Scratch**
- Setting up `webpack.config.js`
- Configuring entry points and output
- Setting up loaders for different file types
- Managing development vs. production builds

**Module System**
- How modern JavaScript modules work
- Import/export syntax for organizing code
- Benefits of modular architecture
- Dependency management with npm

**Build Process**
- Transpiling modern JavaScript for browser compatibility
- Bundling multiple files into optimized output
- Asset management (images, fonts, CSS)
- Source maps for debugging

### Dynamic Content Generation

**DOM Manipulation at Scale**
```javascript
// Everything is created with JavaScript
function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content
  
  const homeSection = document.createElement('section');
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant';
  
  homeSection.appendChild(heading);
  content.appendChild(homeSection);
}
```

**Benefits Learned:**
- Complete control over page structure
- Easy to update content programmatically
- Prepares for future framework use (React, Vue)
- Understanding of how SPAs work

### Project Structure

Organizing a modular JavaScript application:
```
restaurant-page/
├── dist/              # Built files
├── src/
│   ├── index.js       # Entry point
│   ├── home.js        # Home page module
│   ├── menu.js        # Menu page module
│   ├── contact.js     # Contact page module
│   └── styles.css     # Styling
├── package.json
└── webpack.config.js
```

---

## 💡 Code Highlights

### Webpack Configuration
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

### ES6 Module Pattern
```javascript
// home.js
export function loadHome() {
  // Create home page content
}

// index.js
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

// Initialize with home page
loadHome();

// Set up tab navigation
document.getElementById('home-btn').addEventListener('click', loadHome);
document.getElementById('menu-btn').addEventListener('click', loadMenu);
document.getElementById('contact-btn').addEventListener('click', loadContact);
```

### Dynamic Content Creation
```javascript
export function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const menu = document.createElement('div');
  menu.classList.add('menu');
  
  const items = [
    { name: 'Pizza', price: '$12', desc: 'Fresh ingredients' },
    { name: 'Pasta', price: '$10', desc: 'Homemade sauce' },
    // ... more items
  ];
  
  items.forEach(item => {
    const card = createMenuCard(item);
    menu.appendChild(card);
  });
  
  content.appendChild(menu);
}
```

---

## 🚀 Getting Started

### View Online
Visit the [**live demo**](https://k7le-777.github.io/restaurant-page/) to see it in action!

### Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/k7le-777/restaurant-page.git
cd restaurant-page
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
# Opens at localhost:8080
```

4. **Build for production**
```bash
npm run build
```

---

## 🔮 Future Enhancements

- 🛒 **Online Ordering** - Add cart and checkout functionality
- 🗺️ **Interactive Map** - Show restaurant location
- 📸 **Image Gallery** - Showcase food and ambiance
- 🌐 **Multi-language** - Support for different languages
- 🌙 **Dark Mode** - Toggle between light/dark themes
- ⭐ **Reviews Section** - Customer testimonials
- 📅 **Reservations** - Book tables online

---

## 📚 Reflections

### Why This Project Matters

This was a **pivotal learning experience** that bridged the gap between basic JavaScript and modern web development:

**Before this project:**
- Wrote all code in single files
- Manually linked scripts with `<script>` tags
- Limited understanding of build processes
- Worked with static HTML content

**After this project:**
- Understood module systems and code organization
- Comfortable with build tools and npm
- Ready to learn frameworks like React
- Appreciated benefits of dynamic rendering

### Key Insight

> "Webpack seemed intimidating at first—configuration files, loaders, plugins. But breaking it down step by step, I realized it's just a tool that takes your modular code and packages it for the browser. Understanding *why* we need build tools made learning *how* to use them much easier."

### The Learning Curve

**Challenges Faced:**
- Understanding Webpack documentation (it's dense!)
- Debugging build errors
- Managing file paths correctly
- Balancing between development and production configs

**Breakthroughs:**
- Realizing modules make code more maintainable
- Seeing how bundling optimizes performance
- Understanding the foundation for React/Vue
- Appreciating npm ecosystem

---

## 🙏 Acknowledgments

- **[The Odin Project](https://www.theodinproject.com/)** - Structured curriculum
- **Webpack Documentation** - Comprehensive guides
- **Developer community** - Troubleshooting help

---

## 🤝 Connect

Interested in discussing web development or Webpack?

- 💼 [LinkedIn](https://www.linkedin.com/in/ryan-burns-rb/)
- 🌐 [Portfolio](https://k7le-777.github.io/ryan-burns-portfolio-DEMO-/)
- 📧 [Email](mailto:kyleburns7.kb@yahoo.com)
- 💻 [More Projects](https://github.com/k7le-777)

---

<div align="center">

**The Odin Project - Full Stack JavaScript Path**

First Webpack Project | Completed November 2024

[View My Journey](https://github.com/k7le-777?tab=repositories)

⭐ Star if this helped you learn Webpack!

</div>