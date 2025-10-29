# 🌐 Sanjana Satheesh — Personal Portfolio

[![Deploy Portfolio to GitHub Pages](https://github.com/Sanjana-quad/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Sanjana-quad/portfolio/actions/workflows/deploy.yml)
![GitHub last commit](https://img.shields.io/github/last-commit/Sanjana-quad/portfolio)
![GitHub repo size](https://img.shields.io/github/repo-size/Sanjana-quad/portfolio)
![GitHub stars](https://img.shields.io/github/stars/Sanjana-quad/portfolio?style=social)

Welcome to my personal portfolio website — built with **React**, **Vite**, and **TailwindCSS**, designed to reflect my skills, projects, and professional journey in an aesthetic and tech-inspired way.

---

## 🚀 Project Overview

This portfolio showcases:
- A dynamic **multi-page layout** with smooth routing
- **Dark/Light theme toggle** with auto-detection
- **Featured projects carousel** + all-projects grid view
- **Interactive skill visualization** using progress rings/bars
- **About, Experience, Certifications, AI Learning & Contact sections**
- **Fully automated deployment** using GitHub Actions → GitHub Pages

---

## 🧱 Tech Stack

| Category | Tools & Libraries |
|-----------|-------------------|
| Frontend Framework | [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Routing | [React Router DOM](https://reactrouter.com/en/main) |
| Deployment | [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://docs.github.com/en/actions) |
| Icons & Animations | [Lucide React](https://lucide.dev/) • [Framer Motion](https://www.framer.com/motion/) |
| Data Handling | Local `.json` files for skills, projects, certifications |

---

## 🧭 Features Breakdown

### 🎨 **Theme System**
- Manual theme toggle (🌙 Dark / ☀️ Light) with persistent state.
- Smooth transition animations for mode switch.
- Aesthetic but minimal professional color palette.

### 🏠 **Home Page**
- Hero section with name, role tagline, and professional profile photo.
- Subtle motion effects using Framer Motion.

### 👩‍💼 **About Page**
- Personal introduction with professional tone.
- Includes interests, goals, and personal story.

### 💼 **Experience Section**
- Vertical cards layout (switchable to timeline layout later).
- Displays past work, roles, and learnings.

### 💡 **Projects Page**
- Featured Projects Carousel (Framer Motion + Tailwind).
- All Projects Grid layout — easily extensible via `/src/data/projects.json`.

### ⚙️ **Skills & Tools**
- Two visualization modes:
  - Progress Rings (circular)
  - Progress Bars (horizontal)
- Small tooltips/descriptions appear on hover.
- “Switch View” button to toggle modes dynamically.

### 🏅 **Certifications / Achievements**
- Grid-based display for credentials, badges, and links.

### 🤖 **AI Learning / Research Section**
- Space for documenting ML, AI, or personal learning projects.

### 📬 **Contact & Footer**
- Contact form with social media links.
- Footer integrated globally.

---

## ⚙️ Folder Structure

src/
┣ components/
┃ ┣ Navbar.jsx
┃ ┣ Footer.jsx
┃ ┣ ProjectCard.jsx
┃ ┣ SkillProgress.jsx
┃ ┗ ThemeToggle.jsx
┣ pages/
┃ ┣ Home.jsx
┃ ┣ About.jsx
┃ ┣ Experience.jsx
┃ ┣ Projects.jsx
┃ ┣ Skills.jsx
┃ ┣ Certifications.jsx
┃ ┣ AILearning.jsx
┃ ┗ Contact.jsx
┣ data/
┃ ┣ projects.json
┃ ┣ skills.json
┃ ┗ certifications.json
┣ assets/
┃ ┗ images, logos, icons
┣ App.jsx
┣ main.jsx
┗ index.css


---

## 🧩 Environment & Setup

### 🪄 Clone and Run Locally
```bash
git clone https://github.com/Sanjana-quad/portfolio.git
cd portfolio
npm install
npm run dev
```

The project will run at http://localhost:5173

## 🚀 Build and Deploy (Manual Option)
npm run build
npm run deploy

## ⚡ Automated Deployment (GitHub Actions)

Pushing to the main branch triggers:
Build → Upload → Deploy to GitHub Pages automatically.


## 🌈 Customization Guide

| Feature                | Where to Edit                     |
| ---------------------- | --------------------------------- |
| Profile Name / Tagline | `/src/pages/Home.jsx`             |
| Color Palette          | `tailwind.config.js`              |
| Projects Data          | `/src/data/projects.json`         |
| Skills Data            | `/src/data/skills.json`           |
| Certifications         | `/src/data/certifications.json`   |
| Theme Behaviour        | `/src/components/ThemeToggle.jsx` |
| Routing                | `/src/App.jsx`                    |

## 🧠 Future Enhancements

Add Blog / Article page.

Integrate EmailJS for live form submissions.

Include GSAP animations for section transitions.

Optimize SEO metadata dynamically per route.

## 🤝 Connect with Me

💼 LinkedIn: linkedin.com/in/sanjana-satheesh

💻 GitHub: github.com/Sanjana-quad

📧 Email: sanjanasatheesh.ss@gmail.com


