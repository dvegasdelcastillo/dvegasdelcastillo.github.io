/* project-charts.js - Vega-Lite specifications for Project Visualizations */
document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // EMBED ALL PROJECT CHARTS
    // ============================================
    
    vegaEmbed('#viz-project-1', spec_project_1);
    vegaEmbed('#viz-project-2', spec_project_2);
    vegaEmbed('#viz-project-3', spec_project_3);
    vegaEmbed('#viz-project-4', spec_project_4);
    vegaEmbed('#viz-project-5', spec_project_5);

    console.log('✅ All 5 project visualizations loaded successfully');
});