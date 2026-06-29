console.log("Crypto service loaded");

async function loadCrypto() {

    try {

        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
        );

        const data = await response.json();

        window.cryptoData = {

            btc: data.bitcoin.usd,
            eth: data.ethereum.usd,
            sol: data.solana.usd

        };

        const btcBox = document.getElementById("btcPrice");

        if (btcBox) {

            btcBox.innerHTML =
                "$" + data.bitcoin.usd.toLocaleString();

        }

        console.log("BTC Updated:", data.bitcoin.usd);

    } catch (e) {

        console.error("Crypto Error:", e);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    loadCrypto();

    setInterval(loadCrypto, 60000);

});
