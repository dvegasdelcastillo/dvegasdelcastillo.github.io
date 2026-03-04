/* portfolio-charts.js — Vega-Lite specs CC1–CC4 */

// ============================================================
// CC1: HOSTING — charts found and embedded
// ============================================================
const spec_cc1_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "padding": 5,
  "style": "cell",
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
        "axis": {"title": "", "format": "d", "grid": false}
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
    "text": "Education Spending vs GDP Growth (2006–2024 average)",
    "subtitle": "Selected countries | Source: World Bank WDI",
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width":  440,
  "height": 690,
  "data": {
    // Local :  C:\Users\David\...\data\educ_GDPg_mean06-24.csv
    "url": "https://raw.githubusercontent.com/dvegasdelcastillo/dvegasdelcastillo.github.io/refs/heads/main/data/educ_GDPg_mean06-24.csv",
    "format": {"type": "csv"}
  },
  "layer": [
    // Layer 1: scatter points, coloured by region
    {
      "mark": {"type": "point", "filled": true, "size": 140, "opacity": 0.85},
      "encoding": {
        "x": {
          "field": "spending", "type": "quantitative",
          "title": "Public Education Spending (% of GDP)",
          "scale": {"domain": [2, 8]},
          "axis": {"grid": false}
        },
        "y": {
          "field": "gdp_growth", "type": "quantitative",
          "title": "Avg. GDP Growth % (2006–2024)",
          "scale": {"domain": [0, 5]}
        },
        "color": {"field": "region", "type": "nominal", "title": "Region"},
        "tooltip": [
          {"field": "countryname",    "title": "Country"},
          {"field": "spending",   "format": ".1f", "title": "Education Spending (% GDP)"},
          {"field": "gdp_growth", "format": ".1f", "title": "Avg GDP Growth (%)"},
          {"field": "region",     "title": "Region"}
        ]
      }
    },
    
    // Layer 2a: primera palabra del nombre (ej. "South", "United", "Peru")
    {
      "mark": {"type": "text", "dy": -14, "fontSize": 8, "color": "#444", "fontWeight": "normal"},
      "transform": [
        // Extrae todo lo que está ANTES del primer espacio
        // Si no hay espacio (ej. "Peru"), muestra el nombre completo
        {"calculate": "split(datum.countryname, ' ')[0]", "as": "label_line1"}
      ],
      "encoding": {
        "x":    {"field": "spending",    "type": "quantitative"},
        "y":    {"field": "gdp_growth",  "type": "quantitative"},
        "text": {"field": "label_line1"}
      }
    },

    // Layer 2b: segunda palabra del nombre (ej. "Korea", vacío si nombre simple)
    {
      "mark": {"type": "text", "dy": -5, "fontSize": 8, "color": "#444", "fontWeight": "normal"},
      "transform": [
        // Extrae todo lo que está DESPUÉS del primer espacio
        // Si no hay segunda palabra, devuelve string vacío — no muestra nada
        {"calculate": "length(split(datum.countryname, ' ')) > 1 ? split(datum.countryname, ' ')[1] : ''", "as": "label_line2"}
      ],
      "encoding": {
        "x":    {"field": "spending",    "type": "quantitative"},
        "y":    {"field": "gdp_growth",  "type": "quantitative"},
        "text": {"field": "label_line2"}
      }
    },
    // Layer 3: regression line — shows direction of relationship
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


// ============================================================
// CC3 Chart 2 — Connected Scatterplot: Education Spending vs GDP Growth
// Each line traces a country's path through 2006–2024
// Source: World Bank WDI via GitHub repo
// Columns: countryname, año, gdp_growth, spending
// ============================================================

// ============================================================
// Helper: genera un panel individual por país
// ============================================================
function makePanel(country) {
  return {
    "width": 300,
    "height": 160,
    "title": {
      "text": country,
      "fontSize": 12,
      "fontWeight": "bold",
      "anchor": "start",
      "color": "#333"
    },
    "data": {
      "url": "https://raw.githubusercontent.com/dvegasdelcastillo/dvegasdelcastillo.github.io/refs/heads/main/data/educ_GDPg_06-24.csv",
      "format": {"type": "csv"}
    },
    "transform": [
      {"filter": `datum.countryname === '${country}'`},
      {"calculate": "toNumber(datum.spending)",   "as": "spending_n"},
      {"calculate": "toNumber(datum.gdp_growth)", "as": "growth_n"},
      {"calculate": "toNumber(datum.año)",        "as": "year_n"}
    ],
    "layer": [
      // Zero reference line
      {
        "mark": {"type": "rule", "color": "#ddd", "strokeWidth": 1},
        "encoding": {"y": {"datum": 0}}
      },
      // GDP Growth — bars (blue)
      {
        "mark": {"type": "bar", "opacity": 0.55, "color": "#179FDB"},
        "encoding": {
          "x": {
            "field": "year_n", "type": "ordinal",
            "axis": {
              "title": null,
              "labelAngle": -45,
              "labelFontSize": 9,
              "values": [2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024]
            }
          },
          "y": {
            "field": "growth_n", "type": "quantitative",
            "scale": {"domain": [-12, 15]},
            "axis": {"title": "GDP Growth / Spending (%)", "labelFontSize": 9,
                     "tickCount": 5, "grid": false}
          },
          "tooltip": [
            {"field": "countryname", "title": "Country"},
            {"field": "year_n",      "title": "Year"},
            {"field": "growth_n",    "format": ".1f", "title": "GDP Growth (%)"}
          ]
        }
      },
      // Education Spending — line (red)
      {
        "mark": {"type": "line", "color": "#E6224B", "strokeWidth": 2, "point": true},
        "transform": [{"filter": "datum.spending_n > 0"}],
        "encoding": {
          "x": {"field": "year_n", "type": "ordinal"},
          "y": {
            "field": "spending_n", "type": "quantitative",
            "scale": {"domain": [-12, 15]}
          },
          "tooltip": [
            {"field": "countryname", "title": "Country"},
            {"field": "year_n",      "title": "Year"},
            {"field": "spending_n",  "format": ".1f", "title": "Spending (% GDP)"}
          ]
        }
      }
    ]
  };
}

// ============================================================
// CC3 Chart 2 — Matriz 2×4: vconcat de hconcat
// ============================================================
const spec_cc3_2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Education Spending & GDP Growth by Country (2006–2024)",
    "subtitle": [
      "Bars (blue) = GDP Growth (%) | Line (red) = Education Spending (% GDP)",
      "Source: World Bank WDI"
    ],
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "vconcat": [
    // Row 1
    {
      "hconcat": [
        makePanel("Peru"),
        makePanel("Chile")
      ]
    },
    // Row 2
    {
      "hconcat": [
        makePanel("Colombia"),
        makePanel("Brazil")
      ]
    },
    // Row 3
    {
      "hconcat": [
        makePanel("United Kingdom"),
        makePanel("Germany")
      ]
    },
    // Row 4
    {
      "hconcat": [
        makePanel("Finland"),
        makePanel("Portugal")
      ]
    }
  ],
  "config": {
    "view": {"stroke": "#eee"},
    "concat": {"spacing": 20}
  }
};

// ============================================================
// CC4 — REPLICATION + IMPROVEMENT v2
// Changes:
//   1. Sector stack order matches ONS original (services bottom)
//   2. Improved chart has clickable legend to filter sectors
//   3. vegaEmbed actions enabled → download PNG, SVG, CSV
// ============================================================

const CSV_URL = "https://raw.githubusercontent.com/dvegasdelcastillo/dvegasdelcastillo.github.io/refs/heads/main/data/ons_gdp_contributions.csv";

const MONTH_ORDER = [
  "Dec 2024","Jan 2025","Feb 2025","Mar 2025","Apr 2025",
  "May 2025","Jun 2025","Jul 2025","Aug 2025","Sep 2025",
  "Oct 2025","Nov 2025","Dec 2025"
];

// Stack order: services at bottom, construction at top
// (matches ONS original visual stacking)
const SECTOR_ORDER = ["services", "production", "construction"];


// ── CC4 Chart 1: REPLICATED ───────────────────────────────────
const spec_cc4_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Contributions to 3-month GDP Growth, UK (replicated)",
    "subtitle": "Percentage points | Source: ONS GDP monthly estimate, Dec 2025",
    "anchor": "start", "fontSize": 14, "subtitleFontSize": 10,
    "color": "#222"
  },
  "width": 440, "height": 280,
  "background": "#ffffff",
  "data": {
    "url": CSV_URL,
    "format": {"type": "csv"}
  },
  "transform": [
    {"fold": ["services", "production", "construction"],
     "as":   ["sector", "contribution"]},
    {"calculate": "toNumber(datum.contribution)", "as": "contribution"},
    {"calculate": "toNumber(datum.gdp)",          "as": "gdp"},
    // Force stack order: assign numeric rank so Vega stacks in correct order
    {"calculate": "datum.sector === 'services' ? 0 : datum.sector === 'production' ? 1 : 2",
     "as": "sector_order"}
  ],
  "layer": [
    // Stacked bars — order controlled via sort on color field
    {
      "mark": {"type": "bar"},
      "encoding": {
        "x": {
          "field": "month", "type": "ordinal", "title": null,
          "sort": MONTH_ORDER,
          "axis": {"labelAngle": -45, "labelFontSize": 9, "grid": false}
        },
        "y": {
          "field": "contribution", "type": "quantitative",
          "title": "Percentage points", "stack": "zero",
          "axis": {"grid": true, "gridOpacity": 0.3, "labelFontSize": 9}
        },
        "color": {
          "field": "sector", "type": "nominal", "title": null,
          "sort": SECTOR_ORDER,
          "scale": {
            "domain": SECTOR_ORDER,
            "range": ["#00B5CC", "#7B2D8B", "#8DB600"]
          },
          "legend": {
            "orient": "top",
            "labelFontSize": 10,
            "labelExpr": "upper(slice(datum.label,0,1)) + slice(datum.label,1)"
          }
        },
        "order": {"field": "sector_order", "type": "quantitative"},
        "tooltip": [
          {"field": "month",        "title": "Month"},
          {"field": "sector",       "title": "Sector"},
          {"field": "contribution", "format": ".2f", "title": "Contribution (pp)"}
        ]
      }
    },
    // GDP line
    {
      "mark": {"type": "line", "color": "#003087", "strokeWidth": 2},
      "encoding": {
        "x": {"field": "month", "type": "ordinal", "sort": MONTH_ORDER},
        "y": {"field": "gdp",   "type": "quantitative"},
        "tooltip": [
          {"field": "month", "title": "Month"},
          {"field": "gdp",   "format": ".1f", "title": "GDP (pp)"}
        ]
      }
    }
  ],
  "config": {"view": {"stroke": "#ccc"}}
};


// ============================================================
// CC4 — IMPROVED: toggle sectors on/off via legend buttons
// Clicking a sector button removes it entirely from the stack
// ============================================================

// Raw data (mirrors the CSV exactly)
const RAW_DATA = [
  {month:"Dec 2024", gdp:0.3,  services:0.31,  production:-0.07, construction:0.03},
  {month:"Jan 2025", gdp:0.3,  services:0.39,  production:-0.08, construction:0.02},
  {month:"Feb 2025", gdp:0.6,  services:0.52,  production:0.09,  construction:0.01},
  {month:"Mar 2025", gdp:0.7,  services:0.48,  production:0.14,  construction:0.03},
  {month:"Apr 2025", gdp:0.7,  services:0.4,   production:0.17,  construction:0.07},
  {month:"May 2025", gdp:0.4,  services:0.3,   production:-0.05, construction:0.1 },
  {month:"Jun 2025", gdp:0.2,  services:0.17,  production:-0.08, construction:0.08},
  {month:"Jul 2025", gdp:0.1,  services:0.2,   production:-0.15, construction:0.04},
  {month:"Aug 2025", gdp:0.1,  services:0.14,  production:-0.02, construction:0.02},
  {month:"Sep 2025", gdp:0.1,  services:0.12,  production:-0.09, construction:0.02},
  {month:"Oct 2025", gdp:-0.1, services:0.0,   production:-0.05, construction:-0.01},
  {month:"Nov 2025", gdp:-0.1, services:0.02,  production:-0.01, construction:-0.06},
  {month:"Dec 2025", gdp:0.1,  services:0.02,  production:0.16,  construction:-0.13}
];

const SECTORS = {
  services:     {label: "Services",     color: "#179FDB", active: true},
  production:   {label: "Production",   color: "#E6224B", active: true},
  construction: {label: "Construction", color: "#00A767", active: true}
};

// Builds the Vega-Lite spec using only the active sectors
function buildSpec(activeSectors) {
  const foldFields = activeSectors; // only active ones

  return {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Contributions to 3-month GDP Growth, UK (improved)",
      "subtitle": [
        "Click buttons above to show/hide sectors | Source: ONS GDP monthly estimate, Dec 2025",
        "Improvements: sector toggle, zero line, annotations, accessible colours, area fill"
      ],
      "anchor": "start", "fontSize": 14, "subtitleFontSize": 10
    },
    "width": 440, "height": 280,
    "data": {"values": RAW_DATA},
    "transform": [
      {"fold": foldFields, "as": ["sector", "contribution"]},
      {"calculate": "toNumber(datum.contribution)", "as": "contribution"},
      {
        // Stack order: services=0, production=1, construction=2
        "calculate": "datum.sector==='services'?0:datum.sector==='production'?1:2",
        "as": "sector_order"
      }
    ],
    "layer": [
      // Zero line
      {
        "data": {"values": [{"y": 0}]},
        "mark": {"type": "rule", "color": "#555", "strokeWidth": 1, "strokeDash": [4,3]},
        "encoding": {"y": {"field": "y", "type": "quantitative"}}
      },
      // Stacked bars (only active sectors)
      {
        "mark": {"type": "bar", "opacity": 0.85},
        "encoding": {
          "x": {
            "field": "month", "type": "ordinal", "title": null,
            "sort": MONTH_ORDER,
            "axis": {"labelAngle": -45, "labelFontSize": 9, "grid": false}
          },
          "y": {
            "field": "contribution", "type": "quantitative",
            "title": "Percentage point contribution", "stack": "zero",
            "axis": {"grid": true, "gridOpacity": 0.2,
                     "labelFontSize": 9, "tickCount": 6}
          },
          "color": {
            "field": "sector", "type": "nominal", "title": null,
            "sort": ["services","production","construction"],
            "scale": {
              "domain": ["services","production","construction"],
              "range":  ["#179FDB","#E6224B","#00A767"]
            },
            "legend": null   // legend handled by HTML buttons below
          },
          "order": {"field": "sector_order", "type": "quantitative"},
          "tooltip": [
            {"field": "month",        "title": "Month"},
            {"field": "sector",       "title": "Sector"},
            {"field": "contribution", "format": ".2f", "title": "Contribution (pp)"}
          ]
        }
      },
      // GDP area fill
      {
        "mark": {"type": "area", "color": "#0063AF", "opacity": 0.08, "line": false},
        "encoding": {
          "x": {"field": "month", "type": "ordinal", "sort": MONTH_ORDER},
          "y": {"field": "gdp",   "type": "quantitative", "stack": null}
        }
      },
      // GDP line
      {
        "mark": {"type": "line", "color": "#0063AF", "strokeWidth": 2.5},
        "encoding": {
          "x": {"field": "month", "type": "ordinal", "sort": MONTH_ORDER},
          "y": {"field": "gdp",   "type": "quantitative"},
          "tooltip": [
            {"field": "month", "title": "Month"},
            {"field": "gdp",   "format": ".1f", "title": "GDP total (pp)"}
          ]
        }
      },
      // Annotation: peak
      {
        "data": {"values": [{"month": "Mar 2025", "gdp": 0.7}]},
        "mark": {"type":"text","dy":-13,"fontSize":9,
                 "color":"#0063AF","fontWeight":"bold","text":"Peak +0.7pp"},
        "encoding": {
          "x": {"field": "month", "type": "ordinal", "sort": MONTH_ORDER},
          "y": {"field": "gdp",   "type": "quantitative"}
        }
      },
      // Annotation: contraction
      {
        "data": {"values": [{"month": "Oct 2025", "gdp": -0.1}]},
        "mark": {"type":"text","dy":14,"fontSize":9,
                 "color":"#E6224B","fontWeight":"bold","text":"Contraction"},
        "encoding": {
          "x": {"field": "month", "type": "ordinal", "sort": MONTH_ORDER},
          "y": {"field": "gdp",   "type": "quantitative"}
        }
      }
    ],
    "config": {"view": {"stroke": null}, "axis": {"domain": false}}
  };
}

// Renders the custom legend buttons and re-embeds the chart
function renderCC4Improved() {
  // Build legend buttons
  const legendEl = document.getElementById('cc4-legend');
  if (legendEl) {
    legendEl.innerHTML = Object.entries(SECTORS).map(([key, s]) => `
      <button
        id="btn-${key}"
        onclick="toggleSector('${key}')"
        style="
          display: inline-flex; align-items: center; gap: 6px;
          margin: 0 6px 6px 0; padding: 5px 12px;
          border: 2px solid ${s.color};
          border-radius: 20px; cursor: pointer; font-size: 12px;
          background: ${s.active ? s.color : 'transparent'};
          color: ${s.active ? '#fff' : s.color};
          transition: all 0.2s;
        "
      >
        <span style="
          width:10px; height:10px; border-radius:50%;
          background: ${s.active ? '#fff' : s.color};
          display:inline-block;
        "></span>
        ${s.label}
      </button>
    `).join('');
  }

  // Get active sector keys
  const active = Object.entries(SECTORS)
    .filter(([, s]) => s.active)
    .map(([key]) => key);

  // Re-embed chart with updated spec
  vegaEmbed('#viz-cc4-2', buildSpec(active), {
    renderer: "svg",
    actions: {export: true, source: false, compiled: false, editor: false}
  });
}

// Toggle a sector on/off and re-render
window.toggleSector = function(key) {
  // Prevent deselecting all sectors
  const activeCount = Object.values(SECTORS).filter(s => s.active).length;
  if (SECTORS[key].active && activeCount === 1) return;

  SECTORS[key].active = !SECTORS[key].active;
  renderCC4Improved();
};

// Initial render once DOM is ready
document.addEventListener('DOMContentLoaded', renderCC4Improved);

// ============================================================
// CC5 — PART A: FRED API chart (PEN/USD exchange rate)
// Data downloaded via FRED API in Colab, stored in /data/
// Series: FXRATEPEA618NUPN | Source: Penn World Table via FRED
// ============================================================

const spec_cc5_api = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Peru: PEN/USD Exchange Rate (2000–2024)",
    "subtitle": [
      "Peruvian Soles per 1 US Dollar | Annual average",
      "Source: Penn World Table via FRED API | Series: FXRATEPEA618NUPN"
    ],
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width": 460, "height": 280,
  "data": {
    "url": "https://raw.githubusercontent.com/dvegasdelcastillo/dvegasdelcastillo.github.io/main/data/peru_pen_usd_fred.json"
  },
  "layer": [
    // Area fill — shows direction of depreciation
    {
      "mark": {"type": "area", "color": "#E6224B", "opacity": 0.1, "line": false},
      "encoding": {
        "x": {"field": "date", "type": "temporal", "title": null,
              "axis": {"grid": false, "labelFontSize": 10}},
        "y": {"field": "value", "type": "quantitative",
              "title": "PEN per 1 USD",
              "scale": {"domain": [2.5, 4.5]}}
      }
    },
    // Line
    {
      "mark": {"type": "line", "color": "#E6224B", "strokeWidth": 2.5, "point": true},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "value", "type": "quantitative"},
        "tooltip": [
          {"field": "date",  "type": "temporal", "format": "%Y", "title": "Year"},
          {"field": "value", "type": "quantitative", "format": ".3f", "title": "PEN per USD"}
        ]
      }
    },
    // Annotation: COVID depreciation peak
    {
      "data": {"values": [{"date": "2020-01-01", "value": 3.495, "label": "COVID-19\ndepreciation"}]},
      "mark": {"type": "text", "dy": -15, "fontSize": 9,
               "color": "#E6224B", "fontWeight": "bold"},
      "encoding": {
        "x":    {"field": "date",  "type": "temporal"},
        "y":    {"field": "value", "type": "quantitative"},
        "text": {"field": "label"}
      }
    }
  ]
};


// ============================================================
// CC5 — PART B: Scraped chart (Trading Economics indicators)
// Scraped from tradingeconomics.com/peru/indicators via Colab
// ============================================================

const spec_cc5_scraper = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Peru: Key Macroeconomic Indicators",
    "subtitle": [
      "Latest vs Previous values | Source: Trading Economics (scraped via Python)",
      "Data: tradingeconomics.com/peru/indicators"
    ],
    "anchor": "start", "fontSize": 15, "subtitleFontSize": 11
  },
  "width": 460, "height": 300,
  "data": {
    "url": "https://raw.githubusercontent.com/dvegasdelcastillo/dvegasdelcastillo.github.io/main/data/peru_indicators_scraped.json"
  },
  "mark": {"type": "bar", "opacity": 0.85},
  "encoding": {
    "y": {
      "field": "indicator", "type": "nominal",
      "title": null,
      "sort": "-x",
      "axis": {"labelFontSize": 10, "labelLimit": 200}
    },
    "x": {
      "field": "value", "type": "quantitative",
      "title": "Value",
      "axis": {"grid": true, "gridOpacity": 0.2, "labelFontSize": 9}
    },
    "color": {
      "field": "period", "type": "nominal",
      "title": null,
      "scale": {
        "domain": ["Latest", "Previous"],
        "range":  ["#179FDB", "#aaa"]
      },
      "legend": {"orient": "top", "labelFontSize": 10}
    },
    "xOffset": {"field": "period"},
    "tooltip": [
      {"field": "indicator", "title": "Indicator"},
      {"field": "period",    "title": "Period"},
      {"field": "value",     "format": ".2f", "title": "Value"},
      {"field": "unit",      "title": "Unit"},
      {"field": "reference", "title": "Reference date"}
    ]
  }
};


// ============================================================
// EMBED ALL CHARTS
// ============================================================

const embedOpts = {renderer: "svg", actions: {
    export:   true,   // PNG and SVG download
    source:   true,   // view Vega-Lite spec
    compiled: false,  // hide compiled Vega spec (too technical)
    editor:   true    // open in Vega editor for exploration
  }};

vegaEmbed('#viz-cc1-1', spec_cc1_1, embedOpts);
vegaEmbed('#viz-cc1-2', spec_cc1_2, embedOpts);
vegaEmbed('#viz-cc2-1', spec_cc2_1, embedOpts);
vegaEmbed('#viz-cc2-2', spec_cc2_2, embedOpts);
vegaEmbed('#viz-cc3-1', spec_cc3_1, embedOpts);
vegaEmbed('#viz-cc3-2', spec_cc3_2, embedOpts);
vegaEmbed('#viz-cc4-1', spec_cc4_1, embedOpts);
vegaEmbed('#viz-cc4-2', spec_cc4_2, embedOpts);

vegaEmbed('#viz-cc5-api',     spec_cc5_api,     embedOpts);
vegaEmbed('#viz-cc5-scraper', spec_cc5_scraper, embedOpts);