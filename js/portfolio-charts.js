/* portfolio-charts.js — Vega-Lite specs CC1–CC4 */

// ============================================================
// CC1: HOSTING — charts found and embedded
// ============================================================
const spec_cc1_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width":  440,
  "height": 280,
  "title": {
    "text": "UK Gross Domestic Product (GDP) 1985–2024",
    "subtitle": "Annual GDP in current market prices (£ Billions)",
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "data": {
    "url": "https://raw.githubusercontent.com/dvegasdelcastillo/dvegasdelcastillo.github.io/refs/heads/main/data/uk-gdp-1985-2024.csv",
    "format": {"type": "csv"}
  },
  "layer": [{
    "mark": {"type": "line", "color": "#179FDB", "point": true},
    "encoding": {
      "x": {
        "field": "Year", "type": "quantitative",
        "scale": {"domain": [1985, 2025], "nice": false},
        "axis": {"title": "Year", "format": "d", "grid": false}
      },
      "y": {
        "field": "GDP_Billions_GBP", "type": "quantitative",
        "axis": {"title": "GDP (£ Billions)"}
      },
      "tooltip": [
        {"field": "Year",            "type": "quantitative", "title": "Year"},
        {"field": "GDP_Billions_GBP","type": "quantitative", "format": ".1f",  "title": "GDP (£B)"},
        {"field": "GDP_Growth_Pct",  "type": "quantitative", "format": ".2f",  "title": "Growth %"}
      ]
    }
  }]
};

const spec_cc1_2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Unemployment — 3 Countries",
    "subtitle": "% rate | Source: STATCAN, FRED, ONS via ECO API",
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width":  440,
  "height": 295,
  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": null, "axis": {"grid": false}},
    "y": {"field": "value", "type": "quantitative", "title": "Unemployment (%)", "axis": {"grid": false}},
    "color": {"field": "Country", "title": null, "legend": {"orient": "top-left"}}
  },
  "layer": [
    {
      "data": {"url": "https://api.economicsobservatory.com/gbr/unem?vega"},
      "transform": [{"calculate": "'United Kingdom'", "as": "Country"}],
      "mark": {"type": "line", "color": "#0063AF"}
    },
    {
      "data": {"url": "https://api.economicsobservatory.com/can/unem?vega"},
      "transform": [{"calculate": "'Canada'", "as": "Country"}],
      "mark": {"type": "line", "color": "#00A767"}
    },
    {
      "data": {"url": "https://api.economicsobservatory.com/usa/unem?vega"},
      "transform": [{"calculate": "'United States'", "as": "Country"}],
      "mark": {"type": "line", "color": "#E6224B"}
    }
  ]
};

// ============================================================
// CC2: BUILDING — custom charts via ECO Data Hub
// ============================================================

const spec_cc2_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Great Britain Inflation (CPI)",
    "subtitle": "All items, % | Source: ONS via ECO API",
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width":  440,
  "height": 280,
  "background": "#f5f5f5",
  "view": {"fill": "#e8eaff", "strokeOpacity": 0},
  "data": {"url": "https://api.economicsobservatory.com/gbr/infl?vega"},
  "layer": [
    {
      "mark": {"type": "bar", "color": "#5a65cf", "opacity": 0.8},
      "encoding": {
        "x": {"field": "date", "type": "temporal", "axis": {"title": "", "grid": false}},
        "y": {"field": "value", "type": "quantitative", "axis": {"title": "Inflation (%)"}}
      }
    },
    {
      "mark": {"type": "circle", "size": 70, "color": "#E6224B"},
      "params": [{"name": "hover", "select": {"type": "point", "on": "mousemove", "fields": ["date"], "nearest": true}}],
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "value", "type": "quantitative"},
        "opacity": {"condition": {"param": "hover", "empty": false, "value": 1}, "value": 0},
        "tooltip": [
          {"field": "date", "type": "temporal", "title": "Date", "format": "%B %Y"},
          {"field": "value", "type": "quantitative", "title": "Inflation (%)", "format": ".2f"}
        ]
      }
    }
  ]
};

const spec_cc2_2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Egypt Inflation (CPI)",
    "subtitle": "% | Source: CAPMAS via ECO API",
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width":  440,
  "height": 280,
  "data": {"url": "https://api.economicsobservatory.com/egy/infl?vega"},
  "layer": [
    {
      "mark": {"type": "area", "color": "#63bf97", "opacity": 0.3},
      "encoding": {
        "x": {"field": "date", "type": "temporal", "axis": {"title": "", "grid": false}},
        "y": {"field": "value", "type": "quantitative", "axis": {"title": "Inflation (%)"}}
      }
    },
    {
      "mark": {"type": "line", "color": "#1a7a52", "strokeWidth": 2},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "value", "type": "quantitative"},
        "tooltip": [
          {"field": "date", "type": "temporal", "title": "Date", "format": "%B %Y"},
          {"field": "value", "type": "quantitative", "title": "Inflation (%)", "format": ".2f"}
        ]
      }
    }
  ]
};

// ============================================================
// CC3: DEBATE — Does public education spending drive growth?
//
// Policy topic (≤25 words):
//   "Higher public education spending is associated with
//    stronger long-run economic growth in Latin American
//    and European economies."
//
// Two charts:
//   cc3_1 → scatter: spending vs GDP growth (refutes simple link)
//   cc3_2 → line: spending trends over time (Peru lags behind)
//
// Commentary (≤25 words):
//   "No clear positive link found; Chile and Germany invest
//    similarly yet grow differently — institutional quality
//    may matter more than spending alone."
//
// Sources: World Bank WDI (inline data, verified from
//          data.worldbank.org), ECO API for UK education series
// ============================================================


// ── CC3 Chart 1: Scatter — spending vs GDP growth ────────────
// PURPOSE: Tests the policy claim directly.
// FINDING: The regression line is slightly NEGATIVE — more
//          spending does not predict more growth in this sample.
//          This REFUTES the simple version of the policy claim.

const spec_cc3_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Education Spending vs GDP Growth (2010–2022)",
    "subtitle": "Selected countries | Source: World Bank WDI",
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width":  440,
  "height": 280,
  "data": {
    // Source: World Bank WDI indicators SE.XPD.TOTL.GD.ZS (education)
    // and NY.GDP.MKTP.KD.ZG (GDP growth), averages 2010-2022
    // Verified at: https://data.worldbank.org
    "values": [
      {"country": "Peru",       "spending": 3.8, "gdp_growth": 4.1, "region": "Latam"},
      {"country": "Chile",      "spending": 5.4, "gdp_growth": 3.2, "region": "Latam"},
      {"country": "Colombia",   "spending": 4.5, "gdp_growth": 3.8, "region": "Latam"},
      {"country": "Brazil",     "spending": 6.2, "gdp_growth": 1.5, "region": "Latam"},
      {"country": "Mexico",     "spending": 4.9, "gdp_growth": 2.3, "region": "Latam"},
      {"country": "UK",         "spending": 5.3, "gdp_growth": 1.8, "region": "Europe"},
      {"country": "Germany",    "spending": 4.9, "gdp_growth": 1.4, "region": "Europe"},
      {"country": "Finland",    "spending": 6.8, "gdp_growth": 1.1, "region": "Europe"},
      {"country": "Portugal",   "spending": 5.0, "gdp_growth": 1.6, "region": "Europe"},
      {"country": "South Korea","spending": 5.1, "gdp_growth": 3.2, "region": "Asia"}
    ]
  },
  "layer": [
    // Layer 1: scatter points, coloured by region
    {
      "mark": {"type": "point", "filled": true, "size": 140, "opacity": 0.85},
      "encoding": {
        "x": {
          "field": "spending", "type": "quantitative",
          "title": "Public Education Spending (% of GDP)",
          "scale": {"domain": [3, 8]},
          "axis": {"grid": false}
        },
        "y": {
          "field": "gdp_growth", "type": "quantitative",
          "title": "Avg. GDP Growth % (2010–2022)",
          "scale": {"domain": [0, 5]}
        },
        "color": {"field": "region", "type": "nominal", "title": "Region"},
        "tooltip": [
          {"field": "country",    "title": "Country"},
          {"field": "spending",   "format": ".1f", "title": "Education Spending (% GDP)"},
          {"field": "gdp_growth", "format": ".1f", "title": "Avg GDP Growth (%)"},
          {"field": "region",     "title": "Region"}
        ]
      }
    },
    // Layer 2: country name labels above each point
    {
      "mark": {"type": "text", "dy": -10, "fontSize": 10, "color": "#444"},
      "encoding": {
        "x": {"field": "spending",   "type": "quantitative"},
        "y": {"field": "gdp_growth", "type": "quantitative"},
        "text": {"field": "country"}
      }
    },
    // Layer 3: linear regression line — shows direction of relationship
    // A downward slope here REFUTES the policy claim
    {
      "mark": {
        "type": "line",
        "color": "#999",
        "strokeDash": [4, 3],
        "strokeWidth": 1.5
      },
      "transform": [{"regression": "gdp_growth", "on": "spending"}],
      "encoding": {
        "x": {"field": "spending",   "type": "quantitative"},
        "y": {"field": "gdp_growth", "type": "quantitative"}
      }
    }
  ]
};


// ── CC3 Chart 2: Line — spending trends over time ────────────
// PURPOSE: Shows how countries have changed spending over time.
// FINDING: Peru has consistently spent LESS than peers.
//          This contextualises why its growth is high despite
//          low spending — other structural factors are at play.
//
// UK data: live from ECO API (gbr/educ indicator)
// Peru, Chile, Germany: World Bank WDI inline values
// (ECO API does not carry all countries for this indicator)

const spec_cc3_2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Public Education Spending Trends (% of GDP)",
    "subtitle": [
      "Peru, Chile, Germany: World Bank WDI | UK: ECO API (live)",
      "Source: data.worldbank.org & api.economicsobservatory.com"
    ],
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width":  430,
  "height": 252,
  // We use a layer chart to combine:
  //   - inline data for Peru, Chile, Germany (World Bank WDI)
  //   - live API data for UK (ECO API)
  "layer": [
    // Layer 1: Peru, Chile, Germany — inline World Bank data
    {
      "data": {
        "values": [
          {"year": 2010, "country": "Peru",    "spending": 2.8},
          {"year": 2012, "country": "Peru",    "spending": 3.0},
          {"year": 2014, "country": "Peru",    "spending": 3.5},
          {"year": 2016, "country": "Peru",    "spending": 3.8},
          {"year": 2018, "country": "Peru",    "spending": 3.9},
          {"year": 2020, "country": "Peru",    "spending": 3.7},
          {"year": 2022, "country": "Peru",    "spending": 3.8},
          {"year": 2010, "country": "Chile",   "spending": 4.2},
          {"year": 2012, "country": "Chile",   "spending": 4.6},
          {"year": 2014, "country": "Chile",   "spending": 4.9},
          {"year": 2016, "country": "Chile",   "spending": 5.4},
          {"year": 2018, "country": "Chile",   "spending": 5.6},
          {"year": 2020, "country": "Chile",   "spending": 5.8},
          {"year": 2022, "country": "Chile",   "spending": 5.4},
          {"year": 2010, "country": "Germany", "spending": 4.9},
          {"year": 2012, "country": "Germany", "spending": 5.0},
          {"year": 2014, "country": "Germany", "spending": 4.9},
          {"year": 2016, "country": "Germany", "spending": 4.8},
          {"year": 2018, "country": "Germany", "spending": 4.9},
          {"year": 2020, "country": "Germany", "spending": 5.1},
          {"year": 2022, "country": "Germany", "spending": 4.9}
        ]
      },
      "mark": {"type": "line", "point": true, "strokeWidth": 2},
      "encoding": {
        "x": {
          "field": "year", "type": "ordinal", "title": "Year",
          "axis": {"grid": false}
        },
        "y": {
          "field": "spending", "type": "quantitative",
          "title": "Education Spending (% GDP)",
          "scale": {"domain": [2, 7]}
        },
        "color": {
          "field": "country", "type": "nominal", "title": "Country"
        },
        "tooltip": [
          {"field": "country",  "title": "Country"},
          {"field": "year",     "title": "Year"},
          {"field": "spending", "format": ".1f", "title": "Spending (% GDP)"}
        ]
      }
    },
    // Layer 2: UK — live ECO API
    // ECO API URL: https://api.economicsobservatory.com/gbr/educ?vega
    // Returns: [{date, value}] where value = education spending % GDP
    {
      "data": {
        "url": "https://api.economicsobservatory.com/gbr/educ?vega"
      },
      // Filter to match the same 2010-2022 range as the inline data
      "transform": [
        {"filter": "year(datum.date) >= 2010 && year(datum.date) <= 2022"},
        {"calculate": "year(datum.date)", "as": "year"},
        {"calculate": "'UK (API)'",        "as": "country"}
      ],
      "mark": {
        "type": "line",
        "point": true,
        "strokeWidth": 2,
        "strokeDash": [4, 2]  // dashed to distinguish it as live data
      },
      "encoding": {
        "x": {
          "field": "year", "type": "ordinal",
          "axis": {"grid": false}
        },
        "y": {
          "field": "value", "type": "quantitative",
          "scale": {"domain": [2, 7]}
        },
        "color": {
          // Fix UK to a specific colour so it matches the legend visually
          "value": "#E6224B"
        },
        "tooltip": [
          {"field": "country", "title": "Country"},
          {"field": "year",    "title": "Year"},
          {"field": "value",   "format": ".1f", "title": "Spending (% GDP)"}
        ]
      }
    }
  ]
};

// ============================================================
// CC4: REPLICATION — UK Unemployment rate
// Original: ONS / BBC-style chart
// ============================================================

// Shared dataset for CC4
const ukUnemplData = [
  {"date": "2000-01-01", "rate": 5.5}, {"date": "2001-01-01", "rate": 5.1},
  {"date": "2002-01-01", "rate": 5.2}, {"date": "2003-01-01", "rate": 5.0},
  {"date": "2004-01-01", "rate": 4.7}, {"date": "2005-01-01", "rate": 4.8},
  {"date": "2006-01-01", "rate": 5.4}, {"date": "2007-01-01", "rate": 5.3},
  {"date": "2008-01-01", "rate": 5.6}, {"date": "2009-01-01", "rate": 7.6},
  {"date": "2010-01-01", "rate": 7.9}, {"date": "2011-01-01", "rate": 8.1},
  {"date": "2012-01-01", "rate": 7.9}, {"date": "2013-01-01", "rate": 7.5},
  {"date": "2014-01-01", "rate": 6.2}, {"date": "2015-01-01", "rate": 5.4},
  {"date": "2016-01-01", "rate": 4.9}, {"date": "2017-01-01", "rate": 4.4},
  {"date": "2018-01-01", "rate": 4.1}, {"date": "2019-01-01", "rate": 3.8},
  {"date": "2020-01-01", "rate": 4.5}, {"date": "2021-01-01", "rate": 4.5},
  {"date": "2022-01-01", "rate": 3.7}, {"date": "2023-01-01", "rate": 4.2},
  {"date": "2024-01-01", "rate": 4.4}
];

// CC4 Chart 1 — REPLICATED (mimics BBC/ONS simple line style)
const spec_cc4_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "UK Unemployment Rate (replicated)",
    "subtitle": "% of labour force | Source: ONS",
    "anchor": "start", "fontSize": 14, "subtitleFontSize": 11,
    "color": "#222"
  },
  "width":  440,
  "height": 280,
  "background": "#fff8f0",
  "data": {"values": ukUnemplData},
  "mark": {"type": "line", "color": "#c0392b", "strokeWidth": 2},
  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": null,
          "axis": {"grid": false, "labelFontSize": 11}},
    "y": {"field": "rate", "type": "quantitative", "title": "% Unemployed",
          "axis": {"grid": true, "gridDash": [2,2], "labelFontSize": 11},
          "scale": {"domain": [0, 10]}},
    "tooltip": [
      {"field": "date", "type": "temporal", "format": "%Y", "title": "Year"},
      {"field": "rate", "type": "quantitative", "format": ".1f", "title": "Unemployment %"}
    ]
  }
};

// CC4 Chart 2 — IMPROVED version
const spec_cc4_2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "UK Unemployment Rate 2000–2024 (improved)",
    "subtitle": "Annual average | Shaded: recessions (2008, 2020) | Source: ONS",
    "anchor": "start", "fontSize": 14, "subtitleFontSize": 11
  },
  "width":  440,
  "height": 280,
  "layer": [
    // Recession shading 2008–2010
    {
      "data": {"values": [{"x1": "2008-01-01", "x2": "2010-01-01"}]},
      "mark": {"type": "rect", "color": "#f5c6c6", "opacity": 0.45},
      "encoding": {
        "x":  {"field": "x1", "type": "temporal"},
        "x2": {"field": "x2", "type": "temporal"}
      }
    },
    // Recession shading 2020
    {
      "data": {"values": [{"x1": "2020-01-01", "x2": "2021-06-01"}]},
      "mark": {"type": "rect", "color": "#f5c6c6", "opacity": 0.45},
      "encoding": {
        "x":  {"field": "x1", "type": "temporal"},
        "x2": {"field": "x2", "type": "temporal"}
      }
    },
    // Area + line
    {
      "data": {"values": ukUnemplData},
      "layer": [
        {
          "mark": {"type": "area", "color": "#0063AF", "opacity": 0.15},
          "encoding": {
            "x": {"field": "date", "type": "temporal", "title": null,
                  "axis": {"grid": false, "labelFontSize": 11}},
            "y": {"field": "rate", "type": "quantitative",
                  "scale": {"domain": [0, 10]},
                  "axis": {"title": "Unemployment (%)", "labelFontSize": 11}}
          }
        },
        {
          "mark": {"type": "line", "color": "#0063AF", "strokeWidth": 2.5},
          "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "y": {"field": "rate", "type": "quantitative"},
            "tooltip": [
              {"field": "date", "type": "temporal", "format": "%Y", "title": "Year"},
              {"field": "rate", "type": "quantitative", "format": ".1f", "title": "Unemployment %"}
            ]
          }
        }
      ]
    },
    // Annotation: peak 2011
    {
      "data": {"values": [{"date": "2011-01-01", "rate": 8.1, "label": "Peak: 8.1%"}]},
      "mark": {"type": "text", "dy": -10, "fontSize": 11, "color": "#c0392b", "fontWeight": "bold"},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "rate", "type": "quantitative"},
        "text": {"field": "label"}
      }
    }
  ]
};

// ============================================================
// EMBED ALL CHARTS
// ============================================================

const embedOpts = {renderer: "svg", actions: false};

vegaEmbed('#viz-cc1-1', spec_cc1_1, embedOpts);
vegaEmbed('#viz-cc1-2', spec_cc1_2, embedOpts);
vegaEmbed('#viz-cc2-1', spec_cc2_1, embedOpts);
vegaEmbed('#viz-cc2-2', spec_cc2_2, embedOpts);
vegaEmbed('#viz-cc3-1', spec_cc3_1, embedOpts);
vegaEmbed('#viz-cc3-2', spec_cc3_2, embedOpts);
vegaEmbed('#viz-cc4-1', spec_cc4_1, embedOpts);
vegaEmbed('#viz-cc4-2', spec_cc4_2, embedOpts);