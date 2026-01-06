# PP434 Data Science Portfolio - Repository Structure

## Organisation of the repository

```
dvegasdelcastillo.github.io/
│
├── index.html                      # Home page
├── portfolio.html                  # Portfolio page (CC1-CC10)
├── project.html                    # Project page
│
├── css/
│   └── styles.css                  # All CSS styles
│
├── js/
│   ├── main.js                     # General utilities
│   ├── portfolio-charts.js         # Portfolio chart specs (CC1-CC3)
│   └── project-charts.js           # Project chart specs
│
├── data/
│   ├── peru_time_use_2010.csv      # Peru 2010 data
│   ├── peru_time_use_2024.csv      # Peru 2024 data
│   └── uk_time_use_2024.csv        # UK 2024 data
│
├── assets/
│   ├── images/
│   │   ├── replication_original_chart.png    # CC4 original chart
│   │   └── other_images.png                  # Other images for CC4+
│   └── icons/                               # Optional icons/logos
│
└── README.md                       # Optional: Project documentation
```

## Files description

### HTML Files (Root)
- **index.html** - Home page with personal information, links to LinkedIn/GitHub
- **portfolio.html** - Portfolio´s page with the 10 coding chalenges (CC1-CC10)
- **project.html** - Final project's page: "Use of Time in Peru (2010-2024) and UK (2024)"

### CSS Folder (`css/`)
- **styles.css** - All Styling and templates of the web:
  - Header y navegación
  - Home, Portfolio y Project sections
  - Responsive design para móvil
  - Colores, tipografía, spacing

### JS Folder (`js/`)
- **main.js** - Scripts generales:
  - Active page detection
  - Smooth scroll
  - common utilities
  
- **portfolio-charts.js** -  Vega-Lite specs for CC1-CC3:
  - spec_cc1_1: UK GDP
  - spec_cc1_2: Inflation
  - spec_cc2_1: Custom bar chart
  - spec_cc2_2: Scatter plot
  - spec_cc3_1: Education spending vs GDP
  - spec_cc3_2: Regional inequality
  
- **project-charts.js** - Especificaciones Vega-Lite para el proyecto (5 visualizaciones):
  - spec_project_1: Time allocation Peru 2010 vs 2024
  - spec_project_2: Gini coefficient trend
  - spec_project_3: Gender gaps in care work
  - spec_project_4: Peru vs UK comparison
  - spec_project_5: Demographic analysis
