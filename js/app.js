console.log("PIXOR V1.1");

async function loadBTC() {

    try {

        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

        const data = await response.json();

        const btc =
            data.bitcoin.usd.toLocaleString();

        const box =
            document.getElementById("btcPrice");

        if (box) {

            box.innerHTML = "$" + btc;

        }

    } catch (e) {

        console.log(e);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    loadBTC();

    setInterval(loadBTC, 60000);

});
