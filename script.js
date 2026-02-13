const stocks = [
  { symbol: "AAPL", price: 182.12, marketCap: 2800, pe: 28.4, pb: 35.1, dividend: 0.55, rating: "buy" },
  { symbol: "MSFT", price: 312.45, marketCap: 2600, pe: 35.2, pb: 14.8, dividend: 0.80, rating: "buy" },
  { symbol: "AMZN", price: 145.20, marketCap: 1600, pe: 62.1, pb: 8.4, dividend: 0.00, rating: "buy" },
  { symbol: "GOOGL", price: 132.10, marketCap: 1700, pe: 24.3, pb: 6.1, dividend: 0.00, rating: "buy" },
  { symbol: "META", price: 305.33, marketCap: 800, pe: 28.1, pb: 6.9, dividend: 0.00, rating: "buy" },
  { symbol: "NVDA", price: 485.22, marketCap: 1200, pe: 55.3, pb: 25.1, dividend: 0.04, rating: "buy" },
  { symbol: "TSLA", price: 198.20, marketCap: 630, pe: 55.3, pb: 12.4, dividend: 0.00, rating: "neutral" },
  { symbol: "NFLX", price: 410.55, marketCap: 180, pe: 32.1, pb: 12.2, dividend: 0.00, rating: "buy" },
  { symbol: "AVGO", price: 890.10, marketCap: 400, pe: 22.3, pb: 8.1, dividend: 2.10, rating: "buy" },
  { symbol: "ORCL", price: 112.33, marketCap: 300, pe: 19.8, pb: 45.2, dividend: 1.20, rating: "buy" },

  { symbol: "SAP.DE", price: 160.20, marketCap: 190, pe: 22.1, pb: 4.2, dividend: 1.50, rating: "buy" },
  { symbol: "SIE.DE", price: 148.10, marketCap: 120, pe: 17.4, pb: 2.8, dividend: 3.20, rating: "buy" },
  { symbol: "ALV.DE", price: 230.55, marketCap: 95, pe: 11.2, pb: 1.4, dividend: 4.50, rating: "buy" },
  { symbol: "BAS.DE", price: 48.22, marketCap: 45, pe: 8.1, pb: 1.1, dividend: 6.20, rating: "buy" },
  { symbol: "BAYN.DE", price: 42.10, marketCap: 40, pe: 6.5, pb: 0.9, dividend: 3.00, rating: "neutral" },
  { symbol: "BMW.DE", price: 98.33, marketCap: 60, pe: 5.8, pb: 0.7, dividend: 8.50, rating: "buy" },
  { symbol: "DTE.DE", price: 22.55, marketCap: 110, pe: 14.1, pb: 1.6, dividend: 3.20, rating: "buy" },
  { symbol: "DPW.DE", price: 42.88, marketCap: 55, pe: 12.3, pb: 2.1, dividend: 2.00, rating: "buy" },
  { symbol: "RWE.DE", price: 38.10, marketCap: 25, pe: 10.2, pb: 1.1, dividend: 2.50, rating: "buy" },
  { symbol: "VOW3.DE", price: 122.55, marketCap: 70, pe: 4.9, pb: 0.5, dividend: 8.00, rating: "buy" },

  { symbol: "ASML.AS", price: 620.10, marketCap: 250, pe: 33.2, pb: 12.1, dividend: 1.40, rating: "buy" },
  { symbol: "NESN.SW", price: 108.22, marketCap: 300, pe: 21.1, pb: 4.5, dividend: 2.10, rating: "buy" },
  { symbol: "NOVN.SW", price: 92.10, marketCap: 210, pe: 18.2, pb: 3.1, dividend: 3.00, rating: "buy" },
  { symbol: "ROG.SW", price: 255.33, marketCap: 200, pe: 20.1, pb: 5.2, dividend: 2.80, rating: "buy" },
  { symbol: "SAN.PA", price: 92.55, marketCap: 120, pe: 14.2, pb: 1.8, dividend: 3.50, rating: "buy" },

  { symbol: "JPM", price: 152.10, marketCap: 450, pe: 10.8, pb: 1.4, dividend: 2.90, rating: "buy" },
  { symbol: "BAC", price: 31.22, marketCap: 250, pe: 9.1, pb: 0.9, dividend: 2.80, rating: "buy" },
  { symbol: "WFC", price: 42.10, marketCap: 160, pe: 8.8, pb: 0.8, dividend: 2.50, rating: "buy" },
  { symbol: "C", price: 48.33, marketCap: 90, pe: 7.2, pb: 0.6, dividend: 3.20, rating: "buy" },
  { symbol: "GS", price: 345.55, marketCap: 120, pe: 9.9, pb: 1.2, dividend: 2.60, rating: "buy" },

  { symbol: "KO", price: 58.10, marketCap: 250, pe: 24.1, pb: 10.2, dividend: 3.00, rating: "buy" },
  { symbol: "PEP", price: 172.55, marketCap: 240, pe: 25.2, pb: 12.1, dividend: 2.80, rating: "buy" },
  { symbol: "PG", price: 152.33, marketCap: 350, pe: 23.1, pb: 8.2, dividend: 2.50, rating: "buy" },
  { symbol: "MCD", price: 295.10, marketCap: 220, pe: 28.2, pb: 15.1, dividend: 2.20, rating: "buy" },
  { symbol: "WMT", price: 162.22, marketCap: 430, pe: 26.1, pb: 5.2, dividend: 1.80, rating: "buy" },

  { symbol: "CVX", price: 152.10, marketCap: 300, pe: 12.1, pb: 1.8, dividend: 4.00, rating: "buy" },
  { symbol: "XOM", price: 112.55, marketCap: 420, pe: 10.2, pb: 1.7, dividend: 3.80, rating: "buy" },
  { symbol: "BP", price: 36.33, marketCap: 100, pe: 7.8, pb: 1.1, dividend: 4.50, rating: "buy" },
  { symbol: "TTE", price: 62.10, marketCap: 150, pe: 8.1, pb: 1.2, dividend: 5.00, rating: "buy" },
  { symbol: "ENI.MI", price: 14.22, marketCap: 50, pe: 6.2, pb: 0.9, dividend: 6.20, rating: "buy" }
];

stocks.push(
  { symbol: "INTC", price: 42.10, marketCap: 180, pe: 15.2, pb: 1.8, dividend: 1.50, rating: "buy" },
  { symbol: "AMD", price: 112.55, marketCap: 170, pe: 32.1, pb: 4.5, dividend: 0.00, rating: "buy" },
  { symbol: "IBM", price: 158.33, marketCap: 140, pe: 18.4, pb: 5.1, dividend: 4.80, rating: "buy" },
  { symbol: "CSCO", price: 52.22, marketCap: 210, pe: 14.1, pb: 4.2, dividend: 2.90, rating: "buy" },
  { symbol: "QCOM", price: 138.10, marketCap: 160, pe: 17.8, pb: 6.1, dividend: 2.40, rating: "buy" },

  { symbol: "ADBE", price: 560.55, marketCap: 260, pe: 45.2, pb: 18.1, dividend: 0.00, rating: "buy" },
  { symbol: "CRM", price: 245.33, marketCap: 230, pe: 32.1, pb: 5.2, dividend: 0.00, rating: "buy" },
  { symbol: "NOW", price: 690.10, marketCap: 150, pe: 55.1, pb: 25.2, dividend: 0.00, rating: "buy" },
  { symbol: "INTU", price: 520.22, marketCap: 180, pe: 42.3, pb: 12.1, dividend: 0.80, rating: "buy" },
  { symbol: "PYPL", price: 62.10, marketCap: 70, pe: 14.2, pb: 3.1, dividend: 0.00, rating: "neutral" },

  { symbol: "KO", price: 58.10, marketCap: 250, pe: 24.1, pb: 10.2, dividend: 3.00, rating: "buy" },
  { symbol: "PEP", price: 172.55, marketCap: 240, pe: 25.2, pb: 12.1, dividend: 2.80, rating: "buy" },
  { symbol: "MDLZ", price: 72.33, marketCap: 100, pe: 22.1, pb: 4.1, dividend: 2.10, rating: "buy" },
  { symbol: "KHC", price: 33.10, marketCap: 40, pe: 12.1, pb: 0.9, dividend: 4.50, rating: "buy" },
  { symbol: "GIS", price: 65.22, marketCap: 45, pe: 16.2, pb: 3.2, dividend: 3.20, rating: "buy" },

  { symbol: "JNJ", price: 152.10, marketCap: 380, pe: 18.1, pb: 5.2, dividend: 2.80, rating: "buy" },
  { symbol: "PFE", price: 32.55, marketCap: 180, pe: 11.2, pb: 1.8, dividend: 4.00, rating: "buy" },
  { symbol: "MRK", price: 108.33, marketCap: 260, pe: 19.1, pb: 6.1, dividend: 2.60, rating: "buy" },
  { symbol: "BMY", price: 52.10, marketCap: 110, pe: 8.8, pb: 1.2, dividend: 4.20, rating: "buy" },
  { symbol: "LLY", price: 620.22, marketCap: 580, pe: 65.1, pb: 30.2, dividend: 1.10, rating: "buy" },

  { symbol: "CVS", price: 72.10, marketCap: 90, pe: 10.1, pb: 1.1, dividend: 3.20, rating: "buy" },
  { symbol: "UNH", price: 520.55, marketCap: 480, pe: 22.1, pb: 5.1, dividend: 1.80, rating: "buy" },
  { symbol: "ELV", price: 480.33, marketCap: 120, pe: 18.2, pb: 4.1, dividend: 1.50, rating: "buy" },
  { symbol: "HCA", price: 260.10, marketCap: 70, pe: 15.1, pb: 8.2, dividend: 1.20, rating: "buy" },
  { symbol: "ISRG", price: 310.22, marketCap: 110, pe: 45.1, pb: 10.1, dividend: 0.00, rating: "buy" },

  { symbol: "CAT", price: 285.10, marketCap: 140, pe: 17.1, pb: 6.1, dividend: 2.20, rating: "buy" },
  { symbol: "DE", price: 390.55, marketCap: 110, pe: 12.1, pb: 4.2, dividend: 1.80, rating: "buy" },
  { symbol: "GE", price: 122.33, marketCap: 130, pe: 18.2, pb: 3.1, dividend: 0.80, rating: "buy" },
  { symbol: "MMM", price: 92.10, marketCap: 50, pe: 11.1, pb: 2.1, dividend: 5.50, rating: "neutral" },
  { symbol: "HON", price: 198.22, marketCap: 130, pe: 22.1, pb: 8.1, dividend: 2.20, rating: "buy" },

  { symbol: "UPS", price: 152.10, marketCap: 130, pe: 16.1, pb: 7.1, dividend: 3.20, rating: "buy" },
  { symbol: "FDX", price: 245.55, marketCap: 60, pe: 14.2, pb: 2.8, dividend: 1.80, rating: "buy" },
  { symbol: "DAL", price: 38.33, marketCap: 25, pe: 8.1, pb: 1.5, dividend: 0.00, rating: "buy" },
  { symbol: "UAL", price: 42.10, marketCap: 18, pe: 7.8, pb: 1.2, dividend: 0.00, rating: "neutral" },
  { symbol: "LUV", price: 28.22, marketCap: 16, pe: 9.1, pb: 1.8, dividend: 1.20, rating: "buy" },

  { symbol: "T", price: 17.10, marketCap: 120, pe: 6.8, pb: 1.1, dividend: 6.50, rating: "buy" },
  { symbol: "VZ", price: 34.55, marketCap: 140, pe: 8.1, pb: 1.9, dividend: 7.00, rating: "buy" },
  { symbol: "TMUS", price: 152.33, marketCap: 180, pe: 22.1, pb: 3.1, dividend: 0.00, rating: "buy" },
  { symbol: "CMCSA", price: 42.10, marketCap: 180, pe: 11.1, pb: 2.1, dividend: 2.80, rating: "buy" },
  { symbol: "DIS", price: 92.22, marketCap: 170, pe: 28.1, pb: 2.8, dividend: 0.00, rating: "neutral" },

  { symbol: "NKE", price: 102.10, marketCap: 160, pe: 28.1, pb: 12.1, dividend: 1.20, rating: "buy" },
  { symbol: "ADBE", price: 560.55, marketCap: 260, pe: 45.2, pb: 18.1, dividend: 0.00, rating: "buy" },
  { symbol: "SBUX", price: 92.33, marketCap: 110, pe: 25.1, pb: 14.1, dividend: 2.00, rating: "buy" },
  { symbol: "HD", price: 310.10, marketCap: 320, pe: 22.1, pb: 150.1, dividend: 2.20, rating: "buy" },
  { symbol: "LOW", price: 205.22, marketCap: 120, pe: 20.1, pb: 80.1, dividend: 1.80, rating: "buy" }
);

stocks.push(
  { symbol: "BP.L", price: 36.10, marketCap: 100, pe: 7.9, pb: 1.1, dividend: 4.50, rating: "buy" },
  { symbol: "SHEL.L", price: 27.55, marketCap: 210, pe: 8.2, pb: 1.3, dividend: 4.20, rating: "buy" },
  { symbol: "RIO.L", price: 58.33, marketCap: 90, pe: 9.1, pb: 1.8, dividend: 6.00, rating: "buy" },
  { symbol: "BHP.AX", price: 44.10, marketCap: 160, pe: 10.2, pb: 2.1, dividend: 5.80, rating: "buy" },
  { symbol: "VALE", price: 14.22, marketCap: 65, pe: 6.1, pb: 1.4, dividend: 8.00, rating: "buy" },

  { symbol: "UL", price: 50.10, marketCap: 130, pe: 18.1, pb: 7.2, dividend: 3.50, rating: "buy" },
  { symbol: "PG", price: 152.33, marketCap: 350, pe: 23.1, pb: 8.2, dividend: 2.50, rating: "buy" },
  { symbol: "CL", price: 78.55, marketCap: 65, pe: 25.2, pb: 100.1, dividend: 2.20, rating: "buy" },
  { symbol: "KMB", price: 122.10, marketCap: 40, pe: 19.1, pb: 12.1, dividend: 3.80, rating: "buy" },
  { symbol: "EL", price: 142.22, marketCap: 50, pe: 28.1, pb: 15.1, dividend: 1.50, rating: "neutral" },

  { symbol: "TGT", price: 132.10, marketCap: 60, pe: 17.2, pb: 6.1, dividend: 2.80, rating: "buy" },
  { symbol: "COST", price: 620.55, marketCap: 280, pe: 38.1, pb: 12.1, dividend: 0.80, rating: "buy" },
  { symbol: "HD", price: 310.10, marketCap: 320, pe: 22.1, pb: 150.1, dividend: 2.20, rating: "buy" },
  { symbol: "LOW", price: 205.22, marketCap: 120, pe: 20.1, pb: 80.1, dividend: 1.80, rating: "buy" },
  { symbol: "BBY", price: 72.33, marketCap: 15, pe: 10.1, pb: 2.1, dividend: 4.00, rating: "buy" },

  { symbol: "MO", price: 42.10, marketCap: 75, pe: 8.1, pb: 0.9, dividend: 8.50, rating: "buy" },
  { symbol: "PM", price: 92.55, marketCap: 140, pe: 15.1, pb: 12.1, dividend: 5.00, rating: "buy" },
  { symbol: "BTI", price: 31.33, marketCap: 70, pe: 7.2, pb: 0.8, dividend: 8.00, rating: "buy" },
  { symbol: "IMB.L", price: 18.10, marketCap: 20, pe: 6.1, pb: 1.1, dividend: 9.00, rating: "buy" },
  { symbol: "UVV", price: 52.22, marketCap: 1.3, pe: 12.1, pb: 0.9, dividend: 6.50, rating: "buy" },

  { symbol: "BA", price: 198.10, marketCap: 110, pe: 0, pb: -5, dividend: 0.00, rating: "neutral" },
  { symbol: "LMT", price: 450.55, marketCap: 110, pe: 16.1, pb: 12.1, dividend: 2.80, rating: "buy" },
  { symbol: "NOC", price: 455.33, marketCap: 70, pe: 18.2, pb: 5.1, dividend: 1.70, rating: "buy" },
  { symbol: "RTX", price: 92.10, marketCap: 130, pe: 14.1, pb: 1.8, dividend: 2.40, rating: "buy" },
  { symbol: "GD", price: 245.22, marketCap: 70, pe: 17.1, pb: 4.1, dividend: 2.20, rating: "buy" },

  { symbol: "CSX", price: 32.10, marketCap: 65, pe: 15.1, pb: 4.1, dividend: 1.40, rating: "buy" },
  { symbol: "NSC", price: 210.55, marketCap: 50, pe: 18.2, pb: 3.1, dividend: 2.20, rating: "buy" },
  { symbol: "UNP", price: 240.33, marketCap: 140, pe: 20.1, pb: 8.1, dividend: 2.00, rating: "buy" },
  { symbol: "CP", price: 78.10, marketCap: 70, pe: 22.1, pb: 3.2, dividend: 0.80, rating: "buy" },
  { symbol: "CNI", price: 120.22, marketCap: 80, pe: 19.1, pb: 4.1, dividend: 1.60, rating: "buy" },

  { symbol: "NEE", price: 62.10, marketCap: 120, pe: 18.1, pb: 3.1, dividend: 2.40, rating: "buy" },
  { symbol: "DUK", price: 92.55, marketCap: 70, pe: 16.1, pb: 1.5, dividend: 4.20, rating: "buy" },
  { symbol: "SO", price: 68.33, marketCap: 75, pe: 18.2, pb: 2.1, dividend: 3.80, rating: "buy" },
  { symbol: "D", price: 48.10, marketCap: 40, pe: 14.1, pb: 1.2, dividend: 5.00, rating: "buy" },
  { symbol: "AEP", price: 82.22, marketCap: 45, pe: 17.1, pb: 1.8, dividend: 3.40, rating: "buy" },

  { symbol: "SRE", price: 142.10, marketCap: 45, pe: 18.1, pb: 1.9, dividend: 3.20, rating: "buy" },
  { symbol: "EXC", price: 38.55, marketCap: 40, pe: 15.2, pb: 1.4, dividend: 3.00, rating: "buy" },
  { symbol: "ED", price: 92.33, marketCap: 30, pe: 19.1, pb: 1.6, dividend: 3.50, rating: "buy" },
  { symbol: "PCG", price: 17.10, marketCap: 20, pe: 12.1, pb: 1.1, dividend: 0.00, rating: "neutral" },
  { symbol: "PEG", price: 58.22, marketCap: 30, pe: 17.1, pb: 1.8, dividend: 3.20, rating: "buy" },

  { symbol: "AMT", price: 198.10, marketCap: 90, pe: 22.1, pb: 12.1, dividend: 2.80, rating: "buy" },
  { symbol: "PLD", price: 122.55, marketCap: 100, pe: 25.1, pb: 2.8, dividend: 2.50, rating: "buy" },
  { symbol: "EQIX", price: 780.33, marketCap: 70, pe: 85.1, pb: 6.1, dividend: 1.80, rating: "buy" },
  { symbol: "DLR", price: 122.10, marketCap: 40, pe: 20.1, pb: 2.1, dividend: 3.80, rating: "buy" },
  { symbol: "SPG", price: 132.22, marketCap: 50, pe: 18.1, pb: 12.1, dividend: 5.50, rating: "buy" }
);

stocks.push(
  { symbol: "ABT", price: 112.10, marketCap: 200, pe: 22.1, pb: 4.1, dividend: 1.80, rating: "buy" },
  { symbol: "ABBV", price: 152.55, marketCap: 260, pe: 14.2, pb: 18.1, dividend: 4.20, rating: "buy" },
  { symbol: "TMO", price: 520.33, marketCap: 210, pe: 32.1, pb: 6.1, dividend: 0.80, rating: "buy" },
  { symbol: "DHR", price: 240.10, marketCap: 180, pe: 28.1, pb: 4.2, dividend: 0.60, rating: "buy" },
  { symbol: "SYK", price: 290.22, marketCap: 110, pe: 32.1, pb: 6.1, dividend: 1.20, rating: "buy" },

  { symbol: "AMGN", price: 260.10, marketCap: 140, pe: 18.1, pb: 12.1, dividend: 2.80, rating: "buy" },
  { symbol: "GILD", price: 78.55, marketCap: 90, pe: 15.1, pb: 4.1, dividend: 3.20, rating: "buy" },
  { symbol: "REGN", price: 820.33, marketCap: 90, pe: 22.1, pb: 5.1, dividend: 0.00, rating: "buy" },
  { symbol: "VRTX", price: 390.10, marketCap: 100, pe: 28.1, pb: 6.1, dividend: 0.00, rating: "buy" },
  { symbol: "BIIB", price: 240.22, marketCap: 35, pe: 14.1, pb: 3.1, dividend: 0.00, rating: "neutral" },

  { symbol: "LIN", price: 380.10, marketCap: 180, pe: 32.1, pb: 4.1, dividend: 1.40, rating: "buy" },
  { symbol: "APD", price: 280.55, marketCap: 60, pe: 22.1, pb: 3.1, dividend: 2.80, rating: "buy" },
  { symbol: "ECL", price: 182.33, marketCap: 50, pe: 28.1, pb: 8.1, dividend: 1.20, rating: "buy" },
  { symbol: "SHW", price: 290.10, marketCap: 70, pe: 30.1, pb: 18.1, dividend: 0.80, rating: "buy" },
  { symbol: "PPG", price: 142.22, marketCap: 35, pe: 18.1, pb: 4.1, dividend: 1.80, rating: "buy" },

  { symbol: "ROST", price: 122.10, marketCap: 40, pe: 22.1, pb: 10.1, dividend: 1.20, rating: "buy" },
  { symbol: "TJX", price: 92.55, marketCap: 110, pe: 24.1, pb: 12.1, dividend: 1.40, rating: "buy" },
  { symbol: "M", price: 18.33, marketCap: 5, pe: 6.1, pb: 1.2, dividend: 3.00, rating: "neutral" },
  { symbol: "KSS", price: 25.10, marketCap: 3, pe: 7.1, pb: 0.9, dividend: 6.00, rating: "neutral" },
  { symbol: "JWN", price: 16.22, marketCap: 2.5, pe: 8.1, pb: 1.5, dividend: 4.00, rating: "neutral" },

  { symbol: "F", price: 12.10, marketCap: 50, pe: 7.1, pb: 1.1, dividend: 5.00, rating: "buy" },
  { symbol: "GM", price: 32.55, marketCap: 45, pe: 5.8, pb: 0.9, dividend: 1.20, rating: "buy" },
  { symbol: "STLA", price: 18.33, marketCap: 60, pe: 3.9, pb: 0.7, dividend: 7.00, rating: "buy" },
  { symbol: "TM", price: 182.10, marketCap: 250, pe: 10.1, pb: 1.2, dividend: 2.80, rating: "buy" },
  { symbol: "HMC", price: 32.22, marketCap: 55, pe: 8.1, pb: 0.9, dividend: 3.20, rating: "buy" },

  { symbol: "UPS", price: 152.10, marketCap: 130, pe: 16.1, pb: 7.1, dividend: 3.20, rating: "buy" },
  { symbol: "FDX", price: 245.55, marketCap: 60, pe: 14.2, pb: 2.8, dividend: 1.80, rating: "buy" },
  { symbol: "ODFL", price: 410.33, marketCap: 45, pe: 28.1, pb: 8.1, dividend: 0.80, rating: "buy" },
  { symbol: "JBHT", price: 190.10, marketCap: 20, pe: 22.1, pb: 4.1, dividend: 1.20, rating: "buy" },
  { symbol: "CHRW", price: 92.22, marketCap: 10, pe: 14.1, pb: 3.1, dividend: 2.80, rating: "buy" },

  { symbol: "META", price: 305.33, marketCap: 800, pe: 28.1, pb: 6.9, dividend: 0.00, rating: "buy" },
  { symbol: "SNAP", price: 12.55, marketCap: 18, pe: 0, pb: 8.1, dividend: 0.00, rating: "neutral" },
  { symbol: "PINS", price: 28.33, marketCap: 18, pe: 22.1, pb: 6.1, dividend: 0.00, rating: "buy" },
  { symbol: "TWTR", price: 54.10, marketCap: 40, pe: 0, pb: 12.1, dividend: 0.00, rating: "neutral" },
  { symbol: "SHOP", price: 62.22, marketCap: 70, pe: 0, pb: 10.1, dividend: 0.00, rating: "neutral" },

  { symbol: "MA", price: 410.10, marketCap: 380, pe: 35.1, pb: 60.1, dividend: 0.80, rating: "buy" },
  { symbol: "V", price: 245.55, marketCap: 500, pe: 30.1, pb: 15.1, dividend: 0.70, rating: "buy" },
  { symbol: "AXP", price: 182.33, marketCap: 130, pe: 17.1, pb: 4.1, dividend: 1.80, rating: "buy" },
  { symbol: "COF", price: 102.10, marketCap: 40, pe: 8.1, pb: 1.1, dividend: 2.40, rating: "buy" },
  { symbol: "DFS", price: 92.22, marketCap: 28, pe: 7.1, pb: 1.2, dividend: 3.00, rating: "buy" }
);

stocks.push(
  { symbol: "BP", price: 36.10, marketCap: 100, pe: 7.9, pb: 1.1, dividend: 4.50, rating: "buy" },
  { symbol: "TOT", price: 62.55, marketCap: 150, pe: 8.2, pb: 1.3, dividend: 5.00, rating: "buy" },
  { symbol: "EQNR", price: 28.33, marketCap: 90, pe: 6.1, pb: 1.2, dividend: 3.80, rating: "buy" },
  { symbol: "ENB", price: 36.10, marketCap: 75, pe: 17.1, pb: 1.8, dividend: 6.50, rating: "buy" },
  { symbol: "PBR", price: 14.22, marketCap: 60, pe: 4.1, pb: 0.9, dividend: 8.00, rating: "buy" },

  { symbol: "ULVR.L", price: 40.10, marketCap: 120, pe: 18.1, pb: 7.2, dividend: 3.50, rating: "buy" },
  { symbol: "NESN.SW", price: 108.55, marketCap: 300, pe: 21.1, pb: 4.5, dividend: 2.10, rating: "buy" },
  { symbol: "OR.PA", price: 420.33, marketCap: 250, pe: 35.1, pb: 12.1, dividend: 1.80, rating: "buy" },
  { symbol: "RMS.PA", price: 1920.10, marketCap: 180, pe: 45.1, pb: 20.1, dividend: 1.20, rating: "buy" },
  { symbol: "MC.PA", price: 820.22, marketCap: 400, pe: 32.1, pb: 10.1, dividend: 1.50, rating: "buy" },

  { symbol: "SAP.DE", price: 160.10, marketCap: 190, pe: 22.1, pb: 4.2, dividend: 1.50, rating: "buy" },
  { symbol: "SIE.DE", price: 148.55, marketCap: 120, pe: 17.4, pb: 2.8, dividend: 3.20, rating: "buy" },
  { symbol: "IFX.DE", price: 33.33, marketCap: 45, pe: 18.1, pb: 3.1, dividend: 1.20, rating: "buy" },
  { symbol: "HEN3.DE", price: 68.10, marketCap: 30, pe: 14.1, pb: 2.1, dividend: 2.50, rating: "buy" },
  { symbol: "MRK.DE", price: 162.22, marketCap: 60, pe: 20.1, pb: 3.2, dividend: 1.80, rating: "buy" },

  { symbol: "AIR.PA", price: 142.10, marketCap: 120, pe: 22.1, pb: 8.1, dividend: 1.40, rating: "buy" },
  { symbol: "AD.AS", price: 28.55, marketCap: 15, pe: 12.1, pb: 1.8, dividend: 3.20, rating: "buy" },
  { symbol: "ABI.BR", price: 58.33, marketCap: 90, pe: 17.1, pb: 1.9, dividend: 2.80, rating: "buy" },
  { symbol: "INGA.AS", price: 12.10, marketCap: 45, pe: 6.1, pb: 0.8, dividend: 5.00, rating: "buy" },
  { symbol: "ISP.MI", price: 2.22, marketCap: 35, pe: 5.1, pb: 0.7, dividend: 7.00, rating: "buy" },

  { symbol: "UL", price: 50.10, marketCap: 130, pe: 18.1, pb: 7.2, dividend: 3.50, rating: "buy" },
  { symbol: "PG", price: 152.33, marketCap: 350, pe: 23.1, pb: 8.2, dividend: 2.50, rating: "buy" },
  { symbol: "CL", price: 78.55, marketCap: 65, pe: 25.2, pb: 100.1, dividend: 2.20, rating: "buy" },
  { symbol: "KMB", price: 122.10, marketCap: 40, pe: 19.1, pb: 12.1, dividend: 3.80, rating: "buy" },
  { symbol: "EL", price: 142.22, marketCap: 50, pe: 28.1, pb: 15.1, dividend: 1.50, rating: "neutral" },

  { symbol: "SHOP", price: 62.10, marketCap: 70, pe: 0, pb: 10.1, dividend: 0.00, rating: "neutral" },
  { symbol: "SQ", price: 52.55, marketCap: 30, pe: 0, pb: 6.1, dividend: 0.00, rating: "neutral" },
  { symbol: "PYPL", price: 62.33, marketCap: 70, pe: 14.2, pb: 3.1, dividend: 0.00, rating: "neutral" },
  { symbol: "ADYEY", price: 820.10, marketCap: 50, pe: 45.1, pb: 12.1, dividend: 0.00, rating: "neutral" },
  { symbol: "MELI", price: 1220.22, marketCap: 60, pe: 65.1, pb: 20.1, dividend: 0.00, rating: "buy" },

  { symbol: "NVO", price: 102.10, marketCap: 300, pe: 28.1, pb: 12.1, dividend: 1.20, rating: "buy" },
  { symbol: "AZN", price: 62.55, marketCap: 200, pe: 18.1, pb: 4.1, dividend: 2.80, rating: "buy" },
  { symbol: "GSK", price: 32.33, marketCap: 70, pe: 10.1, pb: 1.8, dividend: 4.00, rating: "buy" },
  { symbol: "SNY", price: 52.10, marketCap: 120, pe: 14.1, pb: 1.9, dividend: 3.50, rating: "buy" },
  { symbol: "BNTX", price: 92.22, marketCap: 20, pe: 6.1, pb: 1.2, dividend: 0.00, rating: "neutral" },

  { symbol: "CSCO", price: 52.10, marketCap: 210, pe: 14.1, pb: 4.2, dividend: 2.90, rating: "buy" },
  { symbol: "TXN", price: 172.55, marketCap: 160, pe: 22.1, pb: 12.1, dividend: 2.80, rating: "buy" },
  { symbol: "ADI", price: 182.33, marketCap: 90, pe: 24.1, pb: 8.1, dividend: 1.80, rating: "buy" },
  { symbol: "NXPI", price: 210.10, marketCap: 70, pe: 18.1, pb: 6.1, dividend: 1.20, rating: "buy" },
  { symbol: "MU", price: 82.22, marketCap: 90, pe: 0, pb: 2.1, dividend: 0.00, rating: "neutral" }
);

stocks.push(
  { symbol: "BP.L", price: 36.10, marketCap: 100, pe: 7.9, pb: 1.1, dividend: 4.50, rating: "buy" },
  { symbol: "SHEL.L", price: 27.55, marketCap: 210, pe: 8.2, pb: 1.3, dividend: 4.20, rating: "buy" },
  { symbol: "RIO.L", price: 58.33, marketCap: 90, pe: 9.1, pb: 1.8, dividend: 6.00, rating: "buy" },
  { symbol: "BHP.AX", price: 44.10, marketCap: 160, pe: 10.2, pb: 2.1, dividend: 5.80, rating: "buy" },
  { symbol: "VALE", price: 14.22, marketCap: 65, pe: 6.1, pb: 1.4, dividend: 8.00, rating: "buy" },

  { symbol: "UL", price: 50.10, marketCap: 130, pe: 18.1, pb: 7.2, dividend: 3.50, rating: "buy" },
  { symbol: "PG", price: 152.33, marketCap: 350, pe: 23.1, pb: 8.2, dividend: 2.50, rating: "buy" },
  { symbol: "CL", price: 78.55, marketCap: 65, pe: 25.2, pb: 100.1, dividend: 2.20, rating: "buy" },
  { symbol: "KMB", price: 122.10, marketCap: 40, pe: 19.1, pb: 12.1, dividend: 3.80, rating: "buy" },
  { symbol: "EL", price: 142.22, marketCap: 50, pe: 28.1, pb: 15.1, dividend: 1.50, rating: "neutral" },

  { symbol: "TGT", price: 132.10, marketCap: 60, pe: 17.2, pb: 6.1, dividend: 2.80, rating: "buy" },
  { symbol: "COST", price: 620.55, marketCap: 280, pe: 38.1, pb: 12.1, dividend: 0.80, rating: "buy" },
  { symbol: "HD", price: 310.10, marketCap: 320, pe: 22.1, pb: 150.1, dividend: 2.20, rating: "buy" },
  { symbol: "LOW", price: 205.22, marketCap: 120, pe: 20.1, pb: 80.1, dividend: 1.80, rating: "buy" },
  { symbol: "BBY", price: 72.33, marketCap: 15, pe: 10.1, pb: 2.1, dividend: 4.00, rating: "buy" },

  { symbol: "MO", price: 42.10, marketCap: 75, pe: 8.1, pb: 0.9, dividend: 8.50, rating: "buy" },
  { symbol: "PM", price: 92.55, marketCap: 140, pe: 15.1, pb: 12.1, dividend: 5.00, rating: "buy" },
  { symbol: "BTI", price: 31.33, marketCap: 70, pe: 7.2, pb: 0.8, dividend: 8.00, rating: "buy" },
  { symbol: "IMB.L", price: 18.10, marketCap: 20, pe: 6.1, pb: 1.1, dividend: 9.00, rating: "buy" },
  { symbol: "UVV", price: 52.22, marketCap: 1.3, pe: 12.1, pb: 0.9, dividend: 6.50, rating: "buy" },

  { symbol: "BA", price: 198.10, marketCap: 110, pe: 0, pb: -5, dividend: 0.00, rating: "neutral" },
  { symbol: "LMT", price: 450.55, marketCap: 110, pe: 16.1, pb: 12.1, dividend: 2.80, rating: "buy" },
  { symbol: "NOC", price: 455.33, marketCap: 70, pe: 18.2, pb: 5.1, dividend: 1.70, rating: "buy" },
  { symbol: "RTX", price: 92.10, marketCap: 130, pe: 14.1, pb: 1.8, dividend: 2.40, rating: "buy" },
  { symbol: "GD", price: 245.22, marketCap: 70, pe: 17.1, pb: 4.1, dividend: 2.20, rating: "buy" },

  { symbol: "CSX", price: 32.10, marketCap: 65, pe: 15.1, pb: 4.1, dividend: 1.40, rating: "buy" },
  { symbol: "NSC", price: 210.55, marketCap: 50, pe: 18.2, pb: 3.1, dividend: 2.20, rating: "buy" },
  { symbol: "UNP", price: 240.33, marketCap: 140, pe: 20.1, pb: 8.1, dividend: 2.00, rating: "buy" },
  { symbol: "CP", price: 78.10, marketCap: 70, pe: 22.1, pb: 3.2, dividend: 0.80, rating: "buy" },
  { symbol: "CNI", price: 120.22, marketCap: 80, pe: 19.1, pb: 4.1, dividend: 1.60, rating: "buy" },

  { symbol: "NEE", price: 62.10, marketCap: 120, pe: 18.1, pb: 3.1, dividend: 2.40, rating: "buy" },
  { symbol: "DUK", price: 92.55, marketCap: 70, pe: 16.1, pb: 1.5, dividend: 4.20, rating: "buy" },
  { symbol: "SO", price: 68.33, marketCap: 75, pe: 18.2, pb: 2.1, dividend: 3.80, rating: "buy" },
  { symbol: "D", price: 48.10, marketCap: 40, pe: 14.1, pb: 1.2, dividend: 5.00, rating: "buy" },
  { symbol: "AEP", price: 82.22, marketCap: 45, pe: 17.1, pb: 1.8, dividend: 3.40, rating: "buy" },

  { symbol: "SRE", price: 142.10, marketCap: 45, pe: 18.1, pb: 1.9, dividend: 3.20, rating: "buy" },
  { symbol: "EXC", price: 38.55, marketCap: 40, pe: 15.2, pb: 1.4, dividend: 3.00, rating: "buy" },
  { symbol: "ED", price: 92.33, marketCap: 30, pe: 19.1, pb: 1.6, dividend: 3.50, rating: "buy" },
  { symbol: "PCG", price: 17.10, marketCap: 20, pe: 12.1, pb: 1.1, dividend: 0.00, rating: "neutral" },
  { symbol: "PEG", price: 58.22, marketCap: 30, pe: 17.1, pb: 1.8, dividend: 3.20, rating: "buy" }
);

// ------------------------------------------------------------
// 1) Filter: nur "buy"-Kandidaten
// ------------------------------------------------------------
function filterStocks(stocks) {
    return stocks.filter(s => s.rating === "buy");
}

// ------------------------------------------------------------
// 2) Sortierung: z. B. nach niedrigstem KGV (pe)
// ------------------------------------------------------------
function sortStocks(stocks) {
    return stocks.sort((a, b) => (a.pe || 9999) - (b.pe || 9999));
}

// ------------------------------------------------------------
// 3) Rendering ins UI
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
                Aktueller Wert: ${stock.price} €<br>
                Marktkapitalisierung: ${stock.marketCap} Mrd €<br>
                KGV: ${stock.pe}<br>
                KBV: ${stock.pb}<br>
                Dividendenrendite: ${stock.dividend} %<br>
                Analysten-Bewertung: <span class="rating buy">${stock.rating}</span>
            </div>
        `;

        container.appendChild(card);
    });
}

// ------------------------------------------------------------
// 4) Hauptfunktion
// ------------------------------------------------------------
function init() {
    const filtered = filterStocks(stocks);
    const sorted = sortStocks(filtered);
    renderStocks(sorted);
}

init();

