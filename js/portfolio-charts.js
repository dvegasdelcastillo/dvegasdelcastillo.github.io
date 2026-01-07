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
      "data": {"name": "data-gdp-uk"},
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
  "datasets": {
    "data-gdp-uk": [
      {"Year": 1985, "GDP_Billions_GBP": 414.41, "GDP_Growth_Pct": null},
      {"Year": 1986, "GDP_Billions_GBP": 446.62, "GDP_Growth_Pct": 7.8},
      {"Year": 1987, "GDP_Billions_GBP": 496.12, "GDP_Growth_Pct": 11.1},
      {"Year": 1988, "GDP_Billions_GBP": 555.59, "GDP_Growth_Pct": 11.9},
      {"Year": 1989, "GDP_Billions_GBP": 614.51, "GDP_Growth_Pct": 10.6},
      {"Year": 1990, "GDP_Billions_GBP": 668.92, "GDP_Growth_Pct": 8.9},
      {"Year": 1991, "GDP_Billions_GBP": 705.45, "GDP_Growth_Pct": 5.5},
      {"Year": 1992, "GDP_Billions_GBP": 730.56, "GDP_Growth_Pct": 3.6},
      {"Year": 1993, "GDP_Billions_GBP": 769.14, "GDP_Growth_Pct": 5.3},
      {"Year": 1994, "GDP_Billions_GBP": 809.47, "GDP_Growth_Pct": 5.2},
      {"Year": 1995, "GDP_Billions_GBP": 850.18, "GDP_Growth_Pct": 5.0},
      {"Year": 1996, "GDP_Billions_GBP": 911.19, "GDP_Growth_Pct": 7.2},
      {"Year": 1997, "GDP_Billions_GBP": 953.95, "GDP_Growth_Pct": 4.7},
      {"Year": 1998, "GDP_Billions_GBP": 998.50, "GDP_Growth_Pct": 4.7},
      {"Year": 1999, "GDP_Billions_GBP": 1043.00, "GDP_Growth_Pct": 4.5},
      {"Year": 2000, "GDP_Billions_GBP": 1105.00, "GDP_Growth_Pct": 5.9},
      {"Year": 2001, "GDP_Billions_GBP": 1151.00, "GDP_Growth_Pct": 4.1},
      {"Year": 2002, "GDP_Billions_GBP": 1195.00, "GDP_Growth_Pct": 3.8},
      {"Year": 2003, "GDP_Billions_GBP": 1263.00, "GDP_Growth_Pct": 5.7},
      {"Year": 2004, "GDP_Billions_GBP": 1327.00, "GDP_Growth_Pct": 5.1},
      {"Year": 2005, "GDP_Billions_GBP": 1403.00, "GDP_Growth_Pct": 5.7},
      {"Year": 2006, "GDP_Billions_GBP": 1478.00, "GDP_Growth_Pct": 5.3},
      {"Year": 2007, "GDP_Billions_GBP": 1552.00, "GDP_Growth_Pct": 5.0},
      {"Year": 2008, "GDP_Billions_GBP": 1602.00, "GDP_Growth_Pct": 3.2},
      {"Year": 2009, "GDP_Billions_GBP": 1559.00, "GDP_Growth_Pct": -2.7},
      {"Year": 2010, "GDP_Billions_GBP": 1616.00, "GDP_Growth_Pct": 3.7},
      {"Year": 2011, "GDP_Billions_GBP": 1670.00, "GDP_Growth_Pct": 3.3},
      {"Year": 2012, "GDP_Billions_GBP": 1722.00, "GDP_Growth_Pct": 3.1},
      {"Year": 2013, "GDP_Billions_GBP": 1789.00, "GDP_Growth_Pct": 3.9},
      {"Year": 2014, "GDP_Billions_GBP": 1875.00, "GDP_Growth_Pct": 4.8},
      {"Year": 2015, "GDP_Billions_GBP": 1928.00, "GDP_Growth_Pct": 2.8},
      {"Year": 2016, "GDP_Billions_GBP": 2005.00, "GDP_Growth_Pct": 4.0},
      {"Year": 2017, "GDP_Billions_GBP": 2097.00, "GDP_Growth_Pct": 4.6},
      {"Year": 2018, "GDP_Billions_GBP": 2172.00, "GDP_Growth_Pct": 3.6},
      {"Year": 2019, "GDP_Billions_GBP": 2253.00, "GDP_Growth_Pct": 3.7},
      {"Year": 2020, "GDP_Billions_GBP": 2125.00, "GDP_Growth_Pct": -5.7},
      {"Year": 2021, "GDP_Billions_GBP": 2323.00, "GDP_Growth_Pct": 9.3},
      {"Year": 2022, "GDP_Billions_GBP": 2581.00, "GDP_Growth_Pct": 11.1},
      {"Year": 2023, "GDP_Billions_GBP": 2752.00, "GDP_Growth_Pct": 6.6},
      {"Year": 2024, "GDP_Billions_GBP": 2884.00, "GDP_Growth_Pct": 4.8}
    ]
  },
  "height": 250,
  "title": {
    "text": "UK Gross Domestic Product (GDP) 1985-2024",
    "subtitle": "Annual GDP in current market prices (£ Billions)",
    "fontSize": 16,
    "subtitleFontSize": 12
  }
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

