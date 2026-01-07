/* portfolio-charts.js - Vega-Lite specifications for Portfolio CC1-CC3 */

// ============================================
// CC1: HOSTING CHARTS
// ============================================

// CC1 Chart 1: UK GDP Growth
const spec_cc1_1 = {
  "config": {
    "font": "Circular Std",
    "text": {
      "color": "#676A86",
      "align": "left",
      "baseline": "middle",
      "dx": 7,
      "dy": 0,
      "fontSize": 11
    },
    "view": {
      "stroke": null,
      "continuousWidth": 400,
      "continuousHeight": 300,
      "discreteWidth": 400,
      "discreteHeight": 300
    },
    "range": {
      "category": [
        "#36B7B4",
        "#E6224B",
        "#F4C245",
        "#0063AF",
        "#00A767",
        "#179FDB",
        "#EB5C2E"
      ],
      "diverging": ["#E6224B", "#E54753", "#C9C9C9", "#179FDB", "#122B39"],
      "heatmap": ["#C9C9C9", "#179FDB", "#0063AF", "#122B39"],
      "ordinal": ["#00A767", "#36B7B4", "#179FDB", "#0063AF", "#243B5A"]
    },
    "bar": {"color": "#179fdb"},
    "line": {"color": "#e6224b"},
    "rule": {"color": "#676A86"},
    "area": {"opacity": 0.3},
    "point": {"filled": true, "size": 80, "color": "#e6224b", "opacity": 0.95},
    "geoshape": {"stroke": "white", "strokeWidth": 0.3},
    "rect": {"fill": "#d6d4d4", "opacity": 0.3},
    "axis": {
      "labelColor": "#676A86",
      "labelFontSize": 14,
      "labelFont": "Circular Std",
      "labelOpacity": 0.7,
      "tickColor": "#676A86",
      "tickOpacity": 0.5,
      "domainColor": "#676A86",
      "domainOpacity": 0.5,
      "gridColor": "#676A86",
      "gridDash": [2, 2],
      "gridOpacity": 0.5,
      "title": null,
      "titleColor": "#676A86",
      "titleOpacity": 0.8,
      "tickSize": 4,
      "grid": false
    },
    "axisXDiscrete": {
      "grid": false,
      "labelAngle": 0,
      "tickCount": 10,
      "tickOpacity": 0.5,
      "title": null
    },
    "axisYDiscrete": {"ticks": false, "labelPadding": 5},
    "axisXTemporal": {"grid": false, "ticks": true},
    "axisXQuantitative": {"grid": true},
    "axisYQuantitative": {
      "gridColor": "#676A86",
      "gridDash": [1, 5],
      "gridOpacity": 0.5,
      "ticks": false,
      "labelPadding": 5,
      "tickCount": 8,
      "titleAngle": 0,
      "titleAlign": "left",
      "titleBaseline": "bottom",
      "titleX": 0,
      "titleY": -5
    },
    "title": {
      "color": "#676A86E6",
      "subtitleColor": "#676A86",
      "font": "Circular Std",
      "subtitleFont": "Circular Std",
      "anchor": "start",
      "fontSize": 14,
      "subtitleFontSize": 12,
      "subtitlePadding": 4,
      "offset": 0,
      "frame": "group"
    },
    "legend": {
      "titleColor": "#122b39",
      "title": null,
      "labelColor": "#122b39",
      "labelFontSize": 11
    }
  },
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/dvegasdelcastillo/dvegasdelcastillo.github.io/refs/heads/main/data/uk-gdp-1985-2024.csv",
        "format": {"type": "csv"}
      },
      "mark": {"type": "line", "point": true, "color": "#179FDB"},
      "encoding": {
        "x": {
          "field": "Year",
          "type": "quantitative",
          "axis": {
            "titleFontSize": 13,
            "title": "Year",
            "labelExpr": "datum.value"
          },
          "scale": {"domain": [1985, 2025], "nice": false}
        },
        "y": {
          "field": "GDP_Billions_GBP",
          "type": "quantitative",
          "axis": {
            "titleFontSize": 13,
            "title": "GDP (£ Billions)"
          }
        },
        "tooltip": [
          {"field": "Year", "type": "quantitative", "title": "Year"},
          {"field": "GDP_Billions_GBP", "type": "quantitative", "format": ".1f", "title": "GDP (£B)"},
          {"field": "GDP_Growth_Pct", "type": "quantitative", "format": ".2f", "title": "Growth %"}
        ]
      }
    }
  ],
  "width": 440,
  "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
  "height": 250,
  "title": {
    "text": "UK Gross Domestic Product (GDP) 1985-2024",
    "subtitle": "Annual GDP in current market prices (£ Billions)",
    "fontSize": 16,
    "subtitleFontSize": 12
  }
};

// CC1 Chart 2: Unemploymet - 3 countries (from RDeconomist)
const spec_cc1_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "description": "Chart that uses repeated layers to make multiple calls to an API",

    "title": {
      "text": "Unemployment - 3 Countries",
      "subtitle":"% rate | Source: STATCAN, FRED, ONS via ECO API",
      "subtitleFontStyle":"italic",
      "subtitleFontSize":10,
      "anchor": "start",
      "color": "black"
    },

    "width":440,
    "height":300,


    "encoding": {
      "x": {"field": "date", "type": "temporal", "title": null, "axis": {"grid": false}},
      "y": {"field": "value", "type": "quantitative", "title": null, "axis": {"grid": false}},
      "color":{"field":"Country", "title":null, "legend":{"orient": "top-left"}}
    },

    "layer": [
      
      {"data": {"url": "https://api.economicsobservatory.com/gbr/unem?vega"},
      "transform": [
        {"calculate": "'United Kingdom'", "as": "Country"}
      ],
      "mark": {"type":"line", "color":"red"}
      },

      {"data": {"url": "https://api.economicsobservatory.com/can/unem?vega"},
      "transform": [
        {"calculate": "'Canada'", "as": "Country"}
      ],
      "mark": {"type":"line", "color":"green"}
      },

      {"data": {"url": "https://api.economicsobservatory.com/usa/unem?vega"},
      "transform": [
        {"calculate": "'United States'", "as": "Country"}
      ],
      "mark": {"type":"line", "color":"red"}
      }
    ]
};

// ============================================
// CC2: BUILDING CHARTS
// ============================================

// CC2 Chart 1: Custom Bar Chart
const spec_cc2_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Great Britain Inflation",
    "anchor": "start",
    "subtitle": "All items, % | Source: ONS through ECO API",
    "fontSize": 14,
    "subtitleFontSize": 12,
    "color": "#000000",
    "subtitleColor": "#000000"
  },
  "height": 340,
  "width": 490,
  "autosize": {"type": "fit", "contains": "padding"},
  "background": "#f5f5f5ff",
  "view": {"fill": "#c1c5ffff", "strokeOpacity": 0},
  "data": {
    "url": "https://api.economicsobservatory.com/gbr/infl?vega",
    "format": {"type": "json"}
  },
  "layer": [
    {
      "mark": {"type": "bar", "color": "#5a65cfc9", "opacity": 0.8},
      "encoding": {
        "x": {
          "field": "date",
          "type": "temporal",
          "axis": {"title": "", "grid": false}
        },
        "y": {
          "field": "value",
          "type": "quantitative",
          "axis": {"title": "Inflation (%)", "grid": true}
        }
      }
    },
    {
      "mark": {"type": "rule", "color": "#999", "strokeWidth": 1},
      "params": [
        {
          "name": "cursor",
          "select": {
            "type": "point",
            "on": "mousemove",
            "fields": ["date"],
            "nearest": false
          }
        }
      ],
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "opacity": {
          "condition": {"param": "cursor", "empty": false, "value": 1},
          "value": 0
        }
      }
    },
    {
      "mark": {"type": "circle", "size": 80, "color": "#E6224B"},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "value", "type": "quantitative"},
        "opacity": {
          "condition": {"param": "cursor", "empty": false, "value": 1},
          "value": 0
        },
        "tooltip": [
          {"field": "date", "type": "temporal", "title": "Date", "format": "%B %Y"},
          {"field": "value", "type": "quantitative", "title": "Inflation (%)", "format": ".2f"}
        ]
      }
    }
  ]
};

// CC2 Chart 2: Scatter Plot
const spec_cc2_2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Exports",
    "anchor": "start",
    "subtitle": "Current Rs. in crore | ODI through ECO API",
    "fontSize": 14,
    "subtitleFontSize": 12,
    "color": "#000000",
    "subtitleColor": "#000000"
  },
  "height": "250",
  "width": "container",
  "autosize": {
    "type": "fit",
    "contains": "padding"
  },
  "background": "#ffffff",
  "view": {
    "fill": "#ffffff",
  },
  "data": {
    "url": "https://api.economicsobservatory.com/ind/expo?vega",
    "format": {
      "type": "json"
    }
  },
  "mark": {
    "type": "point",
    "color": "#f4134d",
    "strokeWidth": "2"
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal",
      "axis": {
        "title": "",
        "titleColor": "#122B39",
        "grid": false
      }
    },
    "y": {
      "field": "value",
      "type": "quantitative",
      "axis": {
        "title": "",
        "titleColor": "#122B39",
        "grid": false
      }
    }
  }
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

