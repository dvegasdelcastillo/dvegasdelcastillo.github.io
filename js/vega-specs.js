// ============================================
// VIZ 1: Daily Time Allocation by Activity
// ============================================

const spec_project_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
        "text": "Time Allocation by Activity & Gender (Peru vs UK 2024)",
        "subtitle": ["Daily hours distribution | Gender gaps in unpaid work"],
        "fontSize": 16,
        "fontWeight": "bold",
        "anchor": "start",
        "color": "#667eea"
    },
    "data": {
        "values": [
            // PERU DATA
            {"country": "🇵🇪 Peru", "gender": "Women", "activity": "Paid Work", "hours": 5.2, "color_group": "work"},
            {"country": "🇵🇪 Peru", "gender": "Women", "activity": "Household", "hours": 2.55, "color_group": "unpaid"},
            {"country": "🇵🇪 Peru", "gender": "Women", "activity": "Care", "hours": 1.95, "color_group": "unpaid"},
            {"country": "🇵🇪 Peru", "gender": "Women", "activity": "Personal", "hours": 8.83, "color_group": "personal"},
            {"country": "🇵🇪 Peru", "gender": "Women", "activity": "Leisure", "hours": 2.50, "color_group": "leisure"},
            
            {"country": "🇵🇪 Peru", "gender": "Men", "activity": "Paid Work", "hours": 5.8, "color_group": "work"},
            {"country": "🇵🇪 Peru", "gender": "Men", "activity": "Household", "hours": 1.34, "color_group": "unpaid"},
            {"country": "🇵🇪 Peru", "gender": "Men", "activity": "Care", "hours": 1.24, "color_group": "unpaid"},
            {"country": "🇵🇪 Peru", "gender": "Men", "activity": "Personal", "hours": 8.96, "color_group": "personal"},
            {"country": "🇵🇪 Peru", "gender": "Men", "activity": "Leisure", "hours": 3.50, "color_group": "leisure"},
            
            // UK DATA
            {"country": "🇬🇧 UK", "gender": "Women", "activity": "Paid Work", "hours": 6.1, "color_group": "work"},
            {"country": "🇬🇧 UK", "gender": "Women", "activity": "Household", "hours": 2.29, "color_group": "unpaid"},
            {"country": "🇬🇧 UK", "gender": "Women", "activity": "Care", "hours": 1.27, "color_group": "unpaid"},
            {"country": "🇬🇧 UK", "gender": "Women", "activity": "Personal", "hours": 8.92, "color_group": "personal"},
            {"country": "🇬🇧 UK", "gender": "Women", "activity": "Leisure", "hours": 3.70, "color_group": "leisure"},
            
            {"country": "🇬🇧 UK", "gender": "Men", "activity": "Paid Work", "hours": 6.5, "color_group": "work"},
            {"country": "🇬🇧 UK", "gender": "Men", "activity": "Household", "hours": 1.35, "color_group": "unpaid"},
            {"country": "🇬🇧 UK", "gender": "Men", "activity": "Care", "hours": 0.65, "color_group": "unpaid"},
            {"country": "🇬🇧 UK", "gender": "Men", "activity": "Personal", "hours": 8.97, "color_group": "personal"},
            {"country": "🇬🇧 UK", "gender": "Men", "activity": "Leisure", "hours": 4.27, "color_group": "leisure"}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "activity",
            "type": "nominal",
            "title": "Activity Type",
            "sort": ["Paid Work", "Household", "Care", "Personal", "Leisure"],
            "axis": {
                "labelFontSize": 12,
                "labelAngle": -45,
                "labelAnchor": "end",
                "labelBaseline": "top"
            }
        },
        "y": {
            "field": "hours",
            "type": "quantitative",
            "title": "Hours per Day",
            "scale": {"domain": [0, 10]},
            "axis": {
                "labelFontSize": 11,
                "format": ".1f"
            }
        },
        "color": {
            "field": "gender",
            "type": "nominal",
            "title": "Gender",
            "scale": {
                "domain": ["Women", "Men"],
                "range": ["#f06292", "#42a5f5"]
            },
            "legend": {
                "title": {
                    "text": "Gender",
                    "fontSize": 12,
                    "fontWeight": "bold"
                },
                "labelFontSize": 11,
                "symbolSize": 200
            }
        },
        "facet": {
            "field": "country",
            "type": "nominal",
            "title": "Country",
            "align": "all"
        },
        "xOffset": {"field": "gender"},
        "tooltip": [
            {"field": "country", "type": "nominal", "title": "Country"},
            {"field": "activity", "type": "nominal", "title": "Activity"},
            {"field": "gender", "type": "nominal", "title": "Gender"},
            {"field": "hours", "type": "quantitative", "title": "Hours/Day", "format": ".2f"}
        ]
    },
    "width": 400,
    "height": 380,
    "config": {
        "mark": {"opacity": 0.85},
        "view": {"continuousWidth": 400, "continuousHeight": 380},
        "axis": {
            "grid": true,
            "gridOpacity": 0.1
        },
        "title": {
            "fontSize": 16,
            "fontWeight": "bold",
            "offset": 15
        }
    }
};

// ============================================
// VIZ 2: Temporal Trend - Gender Gap 2010-2024
// ============================================

const spec_project_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
        "text": "Temporal Trends in Time Allocation (Peru 2010-2024)",
        "subtitle": ["How daily time distribution has changed over 14 years | Gender perspective"],
        "fontSize": 16,
        "fontWeight": "bold",
        "anchor": "start",
        "color": "#667eea"
    },
    "data": {
        "values": [
            // 2010 DATA
            {"year": 2010, "gender": "Women", "activity": "Paid Work", "hours": 4.8, "period": "2010"},
            {"year": 2010, "gender": "Women", "activity": "Household", "hours": 2.80, "period": "2010"},
            {"year": 2010, "gender": "Women", "activity": "Care", "hours": 2.10, "period": "2010"},
            {"year": 2010, "gender": "Women", "activity": "Personal", "hours": 8.70, "period": "2010"},
            {"year": 2010, "gender": "Women", "activity": "Leisure", "hours": 2.40, "period": "2010"},
            
            {"year": 2010, "gender": "Men", "activity": "Paid Work", "hours": 5.5, "period": "2010"},
            {"year": 2010, "gender": "Men", "activity": "Household", "hours": 1.50, "period": "2010"},
            {"year": 2010, "gender": "Men", "activity": "Care", "hours": 1.30, "period": "2010"},
            {"year": 2010, "gender": "Men", "activity": "Personal", "hours": 8.85, "period": "2010"},
            {"year": 2010, "gender": "Men", "activity": "Leisure", "hours": 3.85, "period": "2010"},
            
            // 2024 DATA
            {"year": 2024, "gender": "Women", "activity": "Paid Work", "hours": 5.2, "period": "2024"},
            {"year": 2024, "gender": "Women", "activity": "Household", "hours": 2.55, "period": "2024"},
            {"year": 2024, "gender": "Women", "activity": "Care", "hours": 1.95, "period": "2024"},
            {"year": 2024, "gender": "Women", "activity": "Personal", "hours": 8.83, "period": "2024"},
            {"year": 2024, "gender": "Women", "activity": "Leisure", "hours": 2.50, "period": "2024"},
            
            {"year": 2024, "gender": "Men", "activity": "Paid Work", "hours": 5.8, "period": "2024"},
            {"year": 2024, "gender": "Men", "activity": "Household", "hours": 1.34, "period": "2024"},
            {"year": 2024, "gender": "Men", "activity": "Care", "hours": 1.24, "period": "2024"},
            {"year": 2024, "gender": "Men", "activity": "Personal", "hours": 8.96, "period": "2024"},
            {"year": 2024, "gender": "Men", "activity": "Leisure", "hours": 3.50, "period": "2024"}
        ]
    },
    "mark": "line",
    "encoding": {
        "x": {
            "field": "year",
            "type": "ordinal",
            "title": "Year",
            "scale": {"paddingInner": 0.2},
            "axis": {
                "labelFontSize": 12,
                "labelAngle": 0
            }
        },
        "y": {
            "field": "hours",
            "type": "quantitative",
            "title": "Hours per Day",
            "scale": {"domain": [0, 10]},
            "axis": {
                "labelFontSize": 11,
                "format": ".1f"
            }
        },
        "color": {
            "field": "gender",
            "type": "nominal",
            "title": "Gender",
            "scale": {
                "domain": ["Women", "Men"],
                "range": ["#f06292", "#42a5f5"]
            },
            "legend": {
                "title": {
                    "text": "Gender",
                    "fontSize": 12,
                    "fontWeight": "bold"
                },
                "labelFontSize": 11
            }
        },
        "facet": {
            "field": "activity",
            "type": "nominal",
            "title": "Activity",
            "columns": 3
        },
        "strokeDash": {
            "field": "gender",
            "type": "nominal",
            "scale": {
                "domain": ["Women", "Men"],
                "range": [[0], [4, 4]]
            },
            "legend": null
        },
        "tooltip": [
            {"field": "year", "type": "ordinal", "title": "Year"},
            {"field": "activity", "type": "nominal", "title": "Activity"},
            {"field": "gender", "type": "nominal", "title": "Gender"},
            {"field": "hours", "type": "quantitative", "title": "Hours/Day", "format": ".2f"}
        ]
    },
    "width": 250,
    "height": 250,
    "config": {
        "mark": {"point": true, "opacity": 0.8},
        "view": {"continuousWidth": 250, "continuousHeight": 250},
        "axis": {
            "grid": true,
            "gridOpacity": 0.1
        },
        "title": {
            "fontSize": 16,
            "fontWeight": "bold",
            "offset": 15
        }
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
