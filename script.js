// ------------------------------------------------------------
// 1) Index-Komponenten (DAX, S&P 500, Euro Stoxx 50)
// ------------------------------------------------------------

// DAX 40
const daxSymbols = [
  "ADS.DE","ALV.DE","BAS.DE","BAYN.DE","BEI.DE","BMW.DE","BNR.DE","CON.DE",
  "1COV.DE","DAI.DE","DB1.DE","DBK.DE","DPW.DE","DTE.DE","DWNI.DE","ENR.DE",
  "EOAN.DE","FME.DE","FRE.DE","HEI.DE","HEN3.DE","IFX.DE","LIN.DE","MRK.DE",
  "MTX.DE","MUV2.DE","PUM.DE","QIA.DE","RWE.DE","SAP.DE","SIE.DE","SRT3.DE",
  "SY1.DE","VNA.DE","VOW3.DE","ZAL.DE","HFG.DE","PAH3.DE","RHM.DE","SHL.DE"
];

// S&P 500 (Block 1 – wir erweitern später)
const sp500SymbolsPart1 = [
"AAPL","MSFT","AMZN","NVDA","GOOGL","GOOG","META","BRK-B","LLY","TSLA",
"UNH","JPM","V","XOM","AVGO","JNJ","PG","MA","HD","MRK",
"CVX","ABBV","COST","PEP","WMT","BAC","KO","ADBE","CRM","PFE",
"CSCO","TMO","ACN","ABT","DHR","LIN","MCD","WFC","TXN","MS",
"NEE","PM","VZ","INTC","HON","AMGN","UNP","IBM","LOW","ORCL",
"CAT","GE","UPS","RTX","SPGI","GS","BLK","NOW","MDT","AMT",
"CVS","DE","SCHW","PLD","INTU","QCOM","LMT","SYK","BKNG","AXP",
"ISRG","C","TJX","GILD","MO","ADP","MDLZ","T","ELV","MMC",
"REGN","ZTS","CB","AMAT","DUK","SO","CI","BDX","PGR","USB",
"PNC","MU","ADI","CSX","NSC","SHW","CL","EQIX","ICE","FCX",
"ITW","EOG","NKE","GM","FDX","APD","ETN","AON","COP","PSA",
"CMCSA","MPC","HUM","MAR","AEP","AIG","LRCX","ORLY","MCO","KMB",
"WM","SRE","EMR","EW","HCA","D","PSX","TRV","AFL","MNST",
"CTAS","ROP","FIS","KMI","MCK","EXC","NEM","JCI","GD","SYY",
"AZO","PRU","TEL","CME","WELL","F","ECL","STZ","HLT","A",
"PCAR","WMB","TGT","DLR","SPG","ADM","BK","MSI","AEE","ED",
"VLO","KHC","PAYX","OXY","PH","GIS","HES","KR","ALL","ROST",
"VRSK","HPQ","AAL","DAL","UAL","LUV","NUE","DHI","LEN","PHM",
"MTB","HBAN","KEY","RF","FITB","CFG","ZION","ALLY","COF","DFS",
"BBY","ROK","PPG","NOC","LHX","HIG","TRMB","CDW","CTSH","DXCM"
];

// Euro Stoxx 50
const euroStoxxSymbols = [
  "AIR.PA","ALV.DE","ASML.AS","BAS.DE","BAYN.DE","BBVA.MC","BNP.PA","CRH.L",
  "CS.PA","DAI.DE","DBK.DE","DPW.DE","DTE.DE","ENEL.MI","ENGI.PA","ENI.MI",
  "IBE.MC","IFX.DE","ITX.MC","MC.PA","MUV2.DE","OR.PA","PHIA.AS","RMS.PA",
  "RWE.DE","SAN.PA","SAP.DE","SIE.DE","SU.PA","TEF.MC","TTE.PA","UL.PA",
  "VOW3.DE","VIV.PA","AD.AS","ABI.BR","BMW.DE","BN.PA","CSGN.SW","HEI.DE",
  "HEN3.DE","INGA.AS","ISP.MI","LHN.SW","NESN.SW","NOVN.SW","ROG.SW","SGO.PA",
  "UCG.MI","ZURN.SW"
];

// ------------------------------------------------------------
// 2) Hilfsfunktionen
// ------------------------------------------------------------

// Array in Blöcke aufteilen
function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
        out.push(arr.slice(i, i + size));
    }
    return out;
}

// ------------------------------------------------------------
// 3) Yahoo Finance API – Daten abrufen
// ------------------------------------------------------------

async function fetchYahooBatch(symbols) {
    const url = `https://corsproxy.io/?https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols.join(",")}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.quoteResponse.result;
}

// ------------------------------------------------------------
// 4) Gesamtabfrage für alle Indizes
// ------------------------------------------------------------

async function loadAllStocks() {
    const allSymbols = [
        ...daxSymbols,
        ...sp500SymbolsPart1,
        ...euroStoxxSymbols
    ];

    const batches = chunk(allSymbols, 150);

    let allResults = [];

    for (const batch of batches) {
        const result = await fetchYahooBatch(batch);
        allResults = allResults.concat(result);
    }

    return allResults;
}

// ------------------------------------------------------------
// 5) Filterlogik
// ------------------------------------------------------------

function filterStocks(stocks) {
    return stocks.filter(s => {
        const rating = s.recommendationKey;
        const pe = s.trailingPE;
        const pb = s.priceToBook;
        const div = s.dividendYield;

        // Analystenrating
        const isBuy = rating === "buy" || rating === "strong_buy";

        // Fundamentale Filter (optional anpassbar)
        const goodPE = pe && pe < 25;
        const goodPB = pb && pb < 5;
        const goodDiv = div && div > 0.01;

        return isBuy && goodPE && goodPB && goodDiv;
    });
}

// ------------------------------------------------------------
// 6) Sortieren (z. B. nach niedrigstem KGV)
// ------------------------------------------------------------

function sortStocks(stocks) {
    return stocks.sort((a, b) => (a.trailingPE || 9999) - (b.trailingPE || 9999));
}

// ------------------------------------------------------------
// 7) UI Rendering
// ------------------------------------------------------------

function renderStocks(stocks) {
    const container = document.getElementById("stock-container");
    container.innerHTML = "";

    stocks.slice(0, 20).forEach(stock => {
        const card = document.createElement("div");
        card.className = "stock-card";

        card.innerHTML = `
            <div class="stock-title">${stock.symbol}</div>
            <div class="stock-info">
                Aktueller Wert: ${stock.regularMarketPrice} €<br>
                Marktkapitalisierung: ${stock.marketCap}<br>
                KGV: ${stock.trailingPE}<br>
                KBV: ${stock.priceToBook}<br>
                Dividendenrendite: ${(stock.dividendYield * 100).toFixed(2)} %<br>
                Analysten-Bewertung: <span class="rating buy">${stock.recommendationKey}</span>
            </div>
        `;

        container.appendChild(card);
    });
}

// ------------------------------------------------------------
// 8) Hauptfunktion starten
// ------------------------------------------------------------

async function init() {
    const all = await loadAllStocks();
    const filtered = filterStocks(all);
    const sorted = sortStocks(filtered);
    renderStocks(sorted);
}

init();
