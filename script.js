// Beispiel-Daten (Platzhalter)
const stocks = [
    {
        name: "Apple (AAPL)",
        value: "182,12 €",
        marketcap: "2,8 Billionen €",
        kgv: "28,4",
        kbv: "35,1",
        dividend: "0,55 %",
        rating: "buy"
    },
    {
        name: "Microsoft (MSFT)",
        value: "312,45 €",
        marketcap: "2,6 Billionen €",
        kgv: "35,2",
        kbv: "14,8",
        dividend: "0,80 %",
        rating: "neutral"
    },
    {
        name: "Tesla (TSLA)",
        value: "198,20 €",
        marketcap: "630 Milliarden €",
        kgv: "55,3",
        kbv: "12,4",
        dividend: "0 %",
        rating: "sell"
    }
];

// Container holen
const container = document.getElementById("stock-container");

// Karten generieren
stocks.forEach(stock => {
    const card = document.createElement("div");
    card.className = "stock-card";

    card.innerHTML = `
        <div class="stock-title">${stock.name}</div>
        <div class="stock-info">
            Aktueller Wert: ${stock.value}<br>
            Marktkapitalisierung: ${stock.marketcap}<br>
            KGV: ${stock.kgv}<br>
            KBV: ${stock.kbv}<br>
            Dividendenrendite: ${stock.dividend}<br>
            Analysten-Bewertung: <span class="rating ${stock.rating}">${stock.rating}</span>
        </div>
    `;

    container.appendChild(card);
});
