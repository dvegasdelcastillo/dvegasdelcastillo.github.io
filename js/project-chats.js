/* project-charts.js - Vega-Lite specifications for Project Visualizations */

// ============================================
// PROJECT VISUALIZATION 1
// ============================================
// Time Allocation by Activity - Peru 2010 vs 2024

const spec_project_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Time Allocation by Activity - Peru 2010 vs 2024",
    "data": {
        "values": [
            {"year": "2010", "activity": "Work", "hours": 9.2},
            {"year": "2010", "activity": "Leisure", "hours": 4.5},
            {"year": "2010", "activity": "Care", "hours": 2.1},
            {"year": "2010", "activity": "Personal", "hours": 8.2},
            {"year": "2024", "activity": "Work", "hours": 8.8},
            {"year": "2024", "activity": "Leisure", "hours": 5.2},
            {"year": "2024", "activity": "Care", "hours": 2.5},
            {"year": "2024", "activity": "Personal", "hours": 7.5}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "activity", "type": "nominal", "title": "Activity"},
        "y": {"field": "hours", "type": "quantitative", "title": "Hours per Day"},
        "color": {"field": "year", "type": "nominal", "title": "Year"},
        "xOffset": {"field": "year"}
    },
    "width": 500,
    "height": 300
};

// ============================================
// PROJECT VISUALIZATION 2
// ============================================
// Leisure Time Inequality - Gini Coefficient Trend

const spec_project_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Leisure Time Inequality Trend (Gini Coefficient)",
    "data": {
        "values": [
            {"year": 2010, "gini": 0.38},
            {"year": 2015, "gini": 0.41},
            {"year": 2020, "gini": 0.43},
            {"year": 2024, "gini": 0.39}
        ]
    },
    "mark": {"type": "line", "point": true, "color": "#667eea"},
    "encoding": {
        "x": {"field": "year", "type": "temporal", "title": "Year"},
        "y": {"field": "gini", "type": "quantitative", "title": "Leisure Inequality (Gini Coefficient)"},
        "tooltip": [
            {"field": "year", "type": "temporal"},
            {"field": "gini", "type": "quantitative"}
        ]
    },
    "width": 500,
    "height": 300
};

// ============================================
// PROJECT VISUALIZATION 3
// ============================================
// Gender Gaps in Unpaid Care Work

const spec_project_3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Gender Gaps in Unpaid Care Work",
    "data": {
        "values": [
            {"country": "Peru", "gender": "Female", "care_hours": 4.2},
            {"country": "Peru", "gender": "Male", "care_hours": 1.5},
            {"country": "UK", "gender": "Female", "care_hours": 3.8},
            {"country": "UK", "gender": "Male", "care_hours": 2.1}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "country", "type": "nominal", "title": "Country"},
        "y": {"field": "care_hours", "type": "quantitative", "title": "Unpaid Care Hours per Day"},
        "color": {"field": "gender", "type": "nominal", "title": "Gender"},
        "xOffset": {"field": "gender"}
    },
    "width": 500,
    "height": 300
};

// ============================================
// PROJECT VISUALIZATION 4
// ============================================
// Peru vs UK - Time Use Comparison 2024

const spec_project_4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Peru vs UK - Time Use Comparison 2024",
    "data": {
        "values": [
            {"country": "Peru", "activity": "Work", "hours": 8.8},
            {"country": "Peru", "activity": "Leisure", "hours": 5.2},
            {"country": "Peru", "activity": "Care", "hours": 2.5},
            {"country": "UK", "activity": "Work", "hours": 8.1},
            {"country": "UK", "activity": "Leisure", "hours": 5.8},
            {"country": "UK", "activity": "Care", "hours": 2.3}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "activity", "type": "nominal", "title": "Activity"},
        "y": {"field": "hours", "type": "quantitative", "title": "Hours per Day"},
        "color": {"field": "country", "type": "nominal", "title": "Country"},
        "xOffset": {"field": "country"}
    },
    "width": 500,
    "height": 300
};

// ============================================
// PROJECT VISUALIZATION 5
// ============================================
// Interactive Dashboard - Demographic Analysis

const spec_project_5 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Leisure Time by Age Group and Education",
    "data": {
        "values": [
            {"age": "18-25", "education": "Primary", "leisure": 4.2},
            {"age": "18-25", "education": "Secondary", "leisure": 5.1},
            {"age": "25-35", "education": "Primary", "leisure": 3.8},
            {"age": "25-35", "education": "Secondary", "leisure": 4.9},
            {"age": "35-50", "education": "Primary", "leisure": 3.5},
            {"age": "35-50", "education": "Secondary", "leisure": 4.6},
            {"age": "50+", "education": "Primary", "leisure": 5.0},
            {"age": "50+", "education": "Secondary", "leisure": 5.8}
        ]
    },
    "mark": "point",
    "encoding": {
        "x": {"field": "age", "type": "ordinal", "title": "Age Group"},
        "y": {"field": "leisure", "type": "quantitative", "title": "Leisure Hours per Day"},
        "color": {"field": "education", "type": "nominal", "title": "Education Level"},
        "size": {"value": 150}
    },
    "width": 500,
    "height": 300
};

// ============================================
// EMBED ALL PROJECT CHARTS
// ============================================

vegaEmbed('#viz-project-1', spec_project_1);
vegaEmbed('#viz-project-2', spec_project_2);
vegaEmbed('#viz-project-3', spec_project_3);
vegaEmbed('#viz-project-4', spec_project_4);
vegaEmbed('#viz-project-5', spec_project_5);
