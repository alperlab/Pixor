console.log("Stocks service loaded");

async function loadStocks() {

    try {

        // Şimdilik örnek veriler.
        // Daha sonra gerçek API bağlayacağız.

        const stocks = {
            TSLA: "403.31",
            NVDA: "133.23",
            AAPL: "234.40"
        };

        const stockBox = document.querySelector(".stock");

        if (!stockBox) return;

        stockBox.innerHTML = `
            <div>TSLA ${stocks.TSLA}</div>
            <div>NVDA ${stocks.NVDA}</div>
            <div>AAPL ${stocks.AAPL}</div>
        `;

    } catch (err) {

        console.error(err);

    }

}

loadStocks();

setInterval(loadStocks,60000);
