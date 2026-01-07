// ============================================
// VIZ 1: Daily Time Allocation by Activity (Peru 2024)
// ============================================

const spec_project_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Daily Time Allocation by Activity - Peru 2024 (by Gender)",
    "data": {
        "values": [
            {"gender": "Women", "activity": "Paid Work", "hours": 5.2, "category": "Work"},
            {"gender": "Women", "activity": "Household Work", "hours": 2.55, "category": "Unpaid"},
            {"gender": "Women", "activity": "Care Work", "hours": 1.95, "category": "Unpaid"},
            {"gender": "Women", "activity": "Personal Care", "hours": 8.83, "category": "Personal"},
            {"gender": "Women", "activity": "Leisure", "hours": 2.50, "category": "Leisure"},
            
            {"gender": "Men", "activity": "Paid Work", "hours": 5.8, "category": "Work"},
            {"gender": "Men", "activity": "Household Work", "hours": 1.34, "category": "Unpaid"},
            {"gender": "Men", "activity": "Care Work", "hours": 1.24, "category": "Unpaid"},
            {"gender": "Men", "activity": "Personal Care", "hours": 8.96, "category": "Personal"},
            {"gender": "Men", "activity": "Leisure", "hours": 3.50, "category": "Leisure"}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "activity", "type": "nominal", "title": "Activity Type", "sort": ["Paid Work", "Household Work", "Care Work", "Personal Care", "Leisure"]},
        "y": {"field": "hours", "type": "quantitative", "title": "Hours per Day", "scale": {"domain": [0, 10]}},
        "color": {
            "field": "gender",
            "type": "nominal",
            "title": "Gender",
            "scale": {"scheme": "set2"}
        },
        "xOffset": {"field": "gender"},
        "tooltip": [
            {"field": "activity", "type": "nominal", "title": "Activity"},
            {"field": "gender", "type": "nominal", "title": "Gender"},
            {"field": "hours", "type": "quantitative", "title": "Hours/Day", "format": ".2f"}
        ]
    },
    "width": 600,
    "height": 350,
    "config": {"mark": {"opacity": 0.8}}
};

// ============================================
// VIZ 2: Temporal Trend - Gender Gap 2010-2024
// ============================================

const spec_project_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Gender Gap in Unpaid Work - Peru 2010-2024 Temporal Trend",
    "data": {
        "values": [
            {"year": 2010, "metric": "Women's Unpaid Work", "hours": 34.0, "type": "Women"},
            {"year": 2010, "metric": "Men's Unpaid Work", "hours": 12.5, "type": "Men"},
            {"year": 2010, "metric": "Gender Gap", "hours": 21.5, "type": "Gap"},
            
            {"year": 2024, "metric": "Women's Unpaid Work", "hours": 39.5, "type": "Women"},
            {"year": 2024, "metric": "Men's Unpaid Work", "hours": 18.0, "type": "Men"},
            {"year": 2024, "metric": "Gender Gap", "hours": 21.5, "type": "Gap"}
        ]
    },
    "facet": {"field": "metric", "type": "nominal", "columns": 3},
    "spec": {
        "mark": {"type": "bar", "opacity": 0.7},
        "encoding": {
            "x": {"field": "year", "type": "ordinal", "title": "Year"},
            "y": {"field": "hours", "type": "quantitative", "title": "Hours per Week"},
            "color": {"field": "type", "type": "nominal", "title": "Group", "scale": {"scheme": "accent"}},
            "tooltip": [
                {"field": "year", "type": "ordinal"},
                {"field": "metric", "type": "nominal"},
                {"field": "hours", "type": "quantitative", "format": ".1f"}
            ]
        },
        "width": 180,
        "height": 280
    }
};

// ============================================
// VIZ 3: Peru vs UK Comparison 2024
// ============================================

const spec_project_3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Gender Gaps in Unpaid Work - Peru vs UK 2024",
    "data": {
        "values": [
            {"country": "Peru", "gender": "Women", "component": "Household", "hours": 28.2},
            {"country": "Peru", "gender": "Women", "component": "Care", "hours": 13.6},
            {"country": "Peru", "gender": "Women", "component": "Voluntary", "hours": 8.0},
            
            {"country": "Peru", "gender": "Men", "component": "Household", "hours": 11.5},
            {"country": "Peru", "gender": "Men", "component": "Care", "hours": 8.7},
            {"country": "Peru", "gender": "Men", "component": "Voluntary", "hours": 5.5},
            
            {"country": "UK", "gender": "Women", "component": "Household", "hours": 16.0},
            {"country": "UK", "gender": "Women", "component": "Care", "hours": 13.0},
            {"country": "UK", "gender": "Women", "component": "Voluntary", "hours": 3.0},
            
            {"country": "UK", "gender": "Men", "component": "Household", "hours": 10.0},
            {"country": "UK", "gender": "Men", "component": "Care", "hours": 8.0},
            {"country": "UK", "gender": "Men", "component": "Voluntary", "hours": 2.0}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "country", "type": "nominal", "title": "Country"},
        "y": {"field": "hours", "type": "quantitative", "title": "Hours per Week", "stack": "normalize"},
        "color": {
            "field": "component",
            "type": "nominal",
            "title": "Work Type",
            "scale": {"scheme": "category10"}
        },
        "xOffset": {"field": "gender"},
        "tooltip": [
            {"field": "country", "type": "nominal"},
            {"field": "gender", "type": "nominal"},
            {"field": "component", "type": "nominal"},
            {"field": "hours", "type": "quantitative", "format": ".1f"}
        ]
    },
    "width": 550,
    "height": 350
};

// ============================================
// VIZ 4: Unpaid Work Composition - Stacked
// ============================================

const spec_project_4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Unpaid Work Composition by Type",
    "data": {
        "values": [
            {"type": "Peru", "gender": "Women", "household": 28.2, "care": 13.6, "voluntary": 8.0},
            {"type": "Peru", "gender": "Men", "household": 11.5, "care": 8.7, "voluntary": 5.5},
            {"type": "UK", "gender": "Women", "household": 16.0, "care": 13.0, "voluntary": 3.0},
            {"type": "UK", "gender": "Men", "household": 10.0, "care": 8.0, "voluntary": 2.0}
        ]
    },
    "transform": [
        {"fold": ["household", "care", "voluntary"], "as": ["component", "hours"]}
    ],
    "mark": "bar",
    "encoding": {
        "x": {"field": "type", "type": "nominal", "title": "Country"},
        "y": {"aggregate": "sum", "field": "hours", "type": "quantitative", "title": "Total Unpaid Hours/Week", "stack": "zero"},
        "color": {
            "field": "component",
            "type": "nominal",
            "title": "Component",
            "scale": {"scheme": "set2"}
        },
        "xOffset": {"field": "gender"},
        "tooltip": [
            {"field": "type", "type": "nominal"},
            {"field": "gender", "type": "nominal"},
            {"field": "component", "type": "nominal"},
            {"field": "hours", "type": "quantitative", "format": ".1f"}
        ]
    },
    "width": 550,
    "height": 350
};

// ============================================
// VIZ 5: Intersectional Analysis
// ============================================

const spec_project_5 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Leisure Time by Age and Education Level - Intersectional Analysis",
    "data": {
        "values": [
            {"age": "18-25", "education": "Primary", "gender": "Women", "leisure": 4.2, "unpaid_work": 3.5},
            {"age": "18-25", "education": "Secondary", "gender": "Women", "leisure": 5.1, "unpaid_work": 3.2},
            {"age": "25-35", "education": "Primary", "gender": "Women", "leisure": 3.8, "unpaid_work": 4.8},
            {"age": "25-35", "education": "Secondary", "gender": "Women", "leisure": 4.9, "unpaid_work": 4.2},
            {"age": "35-50", "education": "Primary", "gender": "Women", "leisure": 3.5, "unpaid_work": 5.1},
            {"age": "35-50", "education": "Secondary", "gender": "Women", "leisure": 4.6, "unpaid_work": 4.5},
            {"age": "50+", "education": "Primary", "gender": "Women", "leisure": 5.0, "unpaid_work": 4.0},
            {"age": "50+", "education": "Secondary", "gender": "Women", "leisure": 5.8, "unpaid_work": 3.5},
            
            {"age": "18-25", "education": "Primary", "gender": "Men", "leisure": 5.0, "unpaid_work": 1.8},
            {"age": "18-25", "education": "Secondary", "gender": "Men", "leisure": 5.8, "unpaid_work": 1.5},
            {"age": "25-35", "education": "Primary", "gender": "Men", "leisure": 4.5, "unpaid_work": 2.2},
            {"age": "25-35", "education": "Secondary", "gender": "Men", "leisure": 5.3, "unpaid_work": 1.9},
            {"age": "35-50", "education": "Primary", "gender": "Men", "leisure": 4.2, "unpaid_work": 2.4},
            {"age": "35-50", "education": "Secondary", "gender": "Men", "leisure": 5.1, "unpaid_work": 2.0},
            {"age": "50+", "education": "Primary", "gender": "Men", "leisure": 5.5, "unpaid_work": 2.1},
            {"age": "50+", "education": "Secondary", "gender": "Men", "leisure": 6.2, "unpaid_work": 1.8}
        ]
    },
    "mark": "point",
    "encoding": {
        "x": {"field": "age", "type": "ordinal", "title": "Age Group", "sort": ["18-25", "25-35", "35-50", "50+"]},
        "y": {"field": "leisure", "type": "quantitative", "title": "Leisure Hours per Day", "scale": {"domain": [3, 7]}},
        "color": {
            "field": "gender",
            "type": "nominal",
            "title": "Gender",
            "scale": {"scheme": "set1"}
        },
        "shape": {
            "field": "education",
            "type": "nominal",
            "title": "Education",
            "scale": {"scheme": "symbol"}
        },
        "size": {"value": 150},
        "tooltip": [
            {"field": "age", "type": "ordinal"},
            {"field": "education", "type": "nominal"},
            {"field": "gender", "type": "nominal"},
            {"field": "leisure", "type": "quantitative", "format": ".1f", "title": "Leisure Hours"},
            {"field": "unpaid_work", "type": "quantitative", "format": ".1f", "title": "Unpaid Work Hours"}
        ]
    },
    "width": 600,
    "height": 350
};
