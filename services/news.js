console.log("News service loaded");

function loadNews() {

    const news = [
        "• Bitcoin 100.000$ seviyesine yaklaşıyor",
        "• NVIDIA yeni AI çipini tanıttı",
        "• Apple WWDC duyuruları gündemde",
        "• NASDAQ günü yükselişle kapattı"
    ];

    const newsBox = document.querySelector(".news");

    if (!newsBox) return;

    newsBox.innerHTML = "";

    news.forEach(item => {

        const div = document.createElement("div");

        div.textContent = item;

        newsBox.appendChild(div);

    });

}

loadNews();
