/* portfolio-charts.js - Vega-Lite specifications for Portfolio CC1-CC3 */

// ============================================
// CC1: HOSTING CHARTS
// ============================================

// CC1 Chart 1: UK GDP Growth
const spec_cc1_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "UK GDP Growth Rate",
    "data": {
        "values": [
            {"year": 2019, "GDP": 2.4},
            {"year": 2020, "GDP": -11.0},
            {"year": 2021, "GDP": 7.4},
            {"year": 2022, "GDP": 4.3},
            {"year": 2023, "GDP": 0.5},
            {"year": 2024, "GDP": 1.1}
        ]
    },
    "mark": "line",
    "encoding": {
        "x": {"field": "year", "type": "temporal", "axis": {"title": "Year"}},
        "y": {"field": "GDP", "type": "quantitative", "axis": {"title": "GDP Growth %"}},
        "tooltip": [
            {"field": "year", "type": "temporal"},
            {"field": "GDP", "type": "quantitative"}
        ]
    },
    "width": 500,
    "height": 300
};

// CC1 Chart 2: Inflation Trends
const spec_cc1_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "UK Inflation Rate",
    "data": {
        "values": [
            {"month": "Jan 2022", "inflation": 4.4},
            {"month": "Jul 2022", "inflation": 10.1},
            {"month": "Jan 2023", "inflation": 10.5},
            {"month": "Jul 2023", "inflation": 6.8},
            {"month": "Jan 2024", "inflation": 4.0},
            {"month": "Oct 2024", "inflation": 2.3}
        ]
    },
    "mark": {"type": "area", "point": true},
    "encoding": {
        "x": {"field": "month", "type": "ordinal", "axis": {"title": "Month"}},
        "y": {"field": "inflation", "type": "quantitative", "axis": {"title": "Inflation %"}},
        "tooltip": [
            {"field": "month", "type": "ordinal"},
            {"field": "inflation", "type": "quantitative"}
        ]
    },
    "width": 500,
    "height": 300
};

// ============================================
// CC2: BUILDING CHARTS
// ============================================

// CC2 Chart 1: Custom Bar Chart
const spec_cc2_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Sample Custom Visualization",
    "data": {
        "values": [
            {"category": "A", "value": 28},
            {"category": "B", "value": 55},
            {"category": "C", "value": 43},
            {"category": "D", "value": 91},
            {"category": "E", "value": 81},
            {"category": "F", "value": 53}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "category", "type": "ordinal"},
        "y": {"field": "value", "type": "quantitative"},
        "color": {"field": "category", "type": "nominal", "legend": false}
    },
    "width": 500,
    "height": 300
};

// CC2 Chart 2: Scatter Plot
const spec_cc2_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Sample Scatter Plot",
    "data": {
        "values": [
            {"x": 10, "y": 28}, 
            {"x": 20, "y": 55}, 
            {"x": 30, "y": 43},
            {"x": 40, "y": 91}, 
            {"x": 50, "y": 81}, 
            {"x": 60, "y": 53}
        ]
    },
    "mark": "point",
    "encoding": {
        "x": {"field": "x", "type": "quantitative"},
        "y": {"field": "y", "type": "quantitative"},
        "size": {"value": 100}
    },
    "width": 500,
    "height": 300
};

// ============================================
// CC3: DEBATE CHARTS
// ============================================

// CC3 Chart 1: Education Spending vs GDP Growth
const spec_cc3_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Education Spending vs GDP Growth",
    "data": {
        "values": [
            {"country": "Peru", "spending": 3.9, "gdp_growth": 2.3},
            {"country": "Chile", "spending": 5.1, "gdp_growth": 3.2},
            {"country": "Colombia", "spending": 4.5, "gdp_growth": 2.9},
            {"country": "UK", "spending": 5.9, "gdp_growth": 1.5},
            {"country": "Germany", "spending": 6.2, "gdp_growth": 2.1}
        ]
    },
    "mark": "point",
    "encoding": {
        "x": {"field": "spending", "type": "quantitative", "title": "Education Spending (% GDP)"},
        "y": {"field": "gdp_growth", "type": "quantitative", "title": "GDP Growth %"},
        "color": {"field": "country", "type": "nominal"},
        "size": {"value": 200}
    },
    "width": 500,
    "height": 300
};

// CC3 Chart 2: Regional Inequality & Investment
const spec_cc3_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Education Investment vs Regional Inequality",
    "data": {
        "values": [
            {"region": "Lima", "inequality": 0.45, "investment": 4.2},
            {"region": "Arequipa", "inequality": 0.52, "investment": 2.1},
            {"region": "Cusco", "inequality": 0.58, "investment": 1.8},
            {"region": "Iquitos", "inequality": 0.62, "investment": 1.2},
            {"region": "Trujillo", "inequality": 0.55, "investment": 2.5}
        ]
    },
    "mark": "point",
    "encoding": {
        "x": {"field": "investment", "type": "quantitative", "title": "Education Investment"},
        "y": {"field": "inequality", "type": "quantitative", "title": "Inequality Index"},
        "color": {"field": "region", "type": "nominal"},
        "size": {"value": 150}
    },
    "width": 500,
    "height": 300
};

// ============================================
// EMBED ALL CHARTS
// ============================================

vegaEmbed('#viz-cc1-1', spec_cc1_1);
vegaEmbed('#viz-cc1-2', spec_cc1_2);
vegaEmbed('#viz-cc2-1', spec_cc2_1);
vegaEmbed('#viz-cc2-2', spec_cc2_2);
vegaEmbed('#viz-cc3-1', spec_cc3_1);
vegaEmbed('#viz-cc3-2', spec_cc3_2);

