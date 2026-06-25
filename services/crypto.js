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

    } catch (e) {

        console.log("Crypto Error", e);

    }

}
