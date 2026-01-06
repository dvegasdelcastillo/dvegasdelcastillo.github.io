# Diego Vegas Professional Portfolio - File Structure Guide

## 📁 Complete File Organization

```
dvegasdelcastillo.github.io/
│
├── index.html                 # MAIN - Single-page portfolio with all sections
├── CSS/
│   └── style.css             # Main stylesheet (responsive, color-coded)
├── JS/
│   └── script.js             # Navigation and scroll behavior
│
└── pp434/                     # Subfolder for Time Use Analysis Project
    ├── index.html            # PP434 project page
    ├── portfolio.html        # Coding challenges (CC1-CC10)
    └── CSS/
        └── index.css         # PP434 specific styles
```

---

## 📄 FILE DESCRIPTIONS & CONTENTS

### 1. **index.html** (MAIN FILE)
**Location:** Root directory (`dvegasdelcastillo.github.io/index.html`)

**Structure:**
- **Navigation Bar** - Sticky header with smooth scroll navigation
  - Home | Portfolio | Projects | Contact
  - Responsive hamburger menu (CSS-based)
  
- **Home Section** (#home)
  - Hero header with gradient background
  - Social links (LinkedIn, GitHub, Email)
  - About Me section
  - Research interests
  - Current focus area
  
- **Portfolio Section** (#portfolio)
  - 6 portfolio items in responsive grid
  - Impact Evaluation, Data Visualization, Policy Analysis, Web Development, Statistical Analysis, Research Writing
  - Skills badges and descriptions
  - Education & credentials
  
- **Projects Section** (#projects)
  - PP434: Use of Time Analysis (with link to subfolder)
  - Data Science Portfolio (10 coding challenges)
  - Impact Evaluation Research
  - Project cards with key features and links
  
- **Contact Section** (#contact)
  - Contact grid with location, email, social
  - Current affiliations
  - Quick links to projects
  
- **Footer** - Copyright and social links

**Key Features:**
- One-page design with section navigation
- Responsive grid layouts
- Smooth scroll behavior
- Active link highlighting
- Gradient headers with purple theme

---

### 2. **CSS/style.css** (MAIN STYLESHEET)
**Location:** `CSS/style.css`

**Main Sections:**
1. **Color Palette** (CSS Variables)
   - Primary: #667eea (purple-blue)
   - Accent: #764ba2 (purple)
   - Background: #f5f7fa (light blue-gray)
   
2. **Typography**
   - Font Family: System fonts (-apple-system, Segoe UI, etc.)
   - Font Weights: 400-700
   
3. **Spacing System**
   - xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px
   
4. **Component Styles**
   - Navigation bar (.navbar, .nav-link)
   - Page sections (.page-section)
   - Content cards (.content-card, .portfolio-item, .project-card)
   - Buttons (.btn-primary, .btn-secondary)
   - Contact grid (.contact-grid)
   
5. **Responsive Breakpoints**
   - Desktop: Full layout
   - Tablet (768px): Adjusted spacing, single-column grids
   - Mobile (480px): Minimal spacing, full-width elements

**Color Applications:**
- Primary (#667eea): Main headings, links, borders
- Accent (#764ba2): Hover states, secondary headings
- Background (#f5f7fa): Page background, light sections
- Surface (#ffffff): Cards, content areas

---

### 3. **JS/script.js** (INTERACTIVITY)
**Location:** `JS/script.js`

**Functionality:**
1. **Navigation Initialization**
   - Smooth scroll to sections
   - Active link highlighting
   - Click event handlers
   
2. **Scroll Detection**
   - Detect current section on scroll
   - Update active nav link automatically
   - Offset-aware (200px for header)
   
3. **Intersection Observer** (Optional)
   - Fade-in animations for cards
   - Triggered when cards enter viewport
   
4. **Utilities**
   - Scroll-to-top button (optional)
   - Smooth scroll behavior

---

### 4. **pp434/index.html** (PROJECT PAGE)
**Location:** `pp434/index.html`

**Contains:**
- Time use analysis project overview
- 4 interactive Vega-Lite charts
- Gender analysis section
- Peru trends (2010-2024)
- Leisure time comparison
- Key findings
- Methodology & data notes

**Key Charts:**
1. Daily time allocation by country
2. Gender gap in care & household work
3. Peru trends 2010-2024
4. Leisure time composition

---

### 5. **pp434/portfolio.html** (CHALLENGES PAGE)
**Location:** `pp434/portfolio.html`

**Contains:**
- Portfolio overview (10 challenges, 20% grade)
- CC1-CC10 detailed descriptions
- Requirements for each challenge
- Resources and links
- Tools and technologies

**Challenges Covered:**
- CC1-CC2: Hosting & visualization
- CC3-CC4: Policy debate & chart replication
- CC5-CC6: APIs & data scraping
- CC7: Geographic data
- CC8: Big data handling
- CC9-CC10: Interactive charts & ML

---

## 🚀 DEPLOYMENT INSTRUCTIONS

### Step 1: File Organization
```bash
# Create directory structure
mkdir -p CSS JS pp434/CSS

# Place files
- Copy index.html to root
- Copy style.css to CSS/
- Copy script.js to JS/
- Copy pp434 files to pp434/ subfolder
```

### Step 2: GitHub Pages Setup
1. Push all files to GitHub repository
2. Repository name: `dvegasdelcastillo.github.io`
3. GitHub Pages will automatically serve from this repo
4. Access at: `https://dvegasdelcastillo.github.io`

### Step 3: Verify Links
- ✅ Navigation links (#home, #portfolio, #projects, #contact)
- ✅ Social links (LinkedIn, GitHub, Email)
- ✅ Project link to pp434/
- ✅ Internal pp434 links

---

## 🎨 CUSTOMIZATION GUIDE

### Change Colors
Edit CSS variables in `style.css` (lines 8-23):
```css
:root {
    --color-primary: #667eea;      /* Change this */
    --color-accent: #764ba2;       /* And this */
    /* ... */
}
```

### Add Content
Edit `index.html`:
- Add portfolio items in `.portfolio-grid`
- Add projects in the Projects section
- Update contact information

### Modify Styling
- `.page-section`: Section backgrounds and padding
- `.content-card`: Card styling
- `.portfolio-item`, `.project-card`: Grid items
- Responsive: Media queries at bottom of CSS

### Navigation
Update links in navbar:
```html
<li><a href="#your-section" class="nav-link">Label</a></li>
```

---

## ✨ FEATURES INCLUDED

✅ One-page responsive portfolio
✅ Smooth navigation and scroll behavior
✅ Purple gradient color scheme
✅ Mobile-optimized design
✅ Accessible semantic HTML
✅ Fast-loading CSS (no dependencies)
✅ Active link highlighting
✅ Hover effects and transitions
✅ Professional typography
✅ Contact information
✅ Project showcases
✅ Social media links

---

## 📱 RESPONSIVE BREAKPOINTS

| Device | Width | Changes |
|--------|-------|---------|
| Desktop | >1000px | Full layout, all features |
| Tablet | 480-768px | Single-column grids, adjusted padding |
| Mobile | <480px | Minimal spacing, full-width buttons, vertical menus |

---

## 🔗 KEY INTERNAL LINKS

**From index.html:**
- `#home` → Home section
- `#portfolio` → Portfolio section
- `#projects` → Projects section
- `#contact` → Contact section
- `pp434/` → Time use project
- External: LinkedIn, GitHub, Email

**From pp434/index.html:**
- `portfolio.html` → Portfolio challenges
- Back to main: `../index.html`

---

## 💻 QUICK START

1. Create folder structure
2. Add all files
3. Update your information in index.html
4. Customize colors in CSS variables
5. Push to GitHub
6. Access your portfolio at GitHub Pages URL

**Total Files: 5**
- 1 HTML (index) + 1 CSS + 1 JS = Main portfolio
- 2 HTML (pp434) = Project pages
- Supporting CSS in pp434/CSS/

---

## 📊 SEO & META TAGS

All meta tags included:
- Title: "Diego Vegas del Castillo | Portfolio"
- Description: Professional portfolio
- Viewport: Mobile responsive
- Charset: UTF-8

---

**Last Updated:** January 2025
**Version:** 1.0
**Status:** Ready to Deploy