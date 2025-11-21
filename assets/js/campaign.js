// Lê ?utm_campaign=xxx
function getCampaignFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("utm_campaign");
}

// Atualiza apenas a descrição da Thank You Page
function updateThankYou(data) {
    const descEl = document.querySelector(".thank-you-card p");

    if (data?.description) {
        descEl.innerHTML = data.description;
    }
}

// Carrega o JSON da Thank You Page
function initThankYou() {
    const campanha = getCampaignFromURL();

    fetch("/vedacit-thank-you-page/assets/data/data.json")
        .then(res => res.json())
        .then(json => {
            const key = (campanha && json[campanha]) ? campanha : "default";
            updateThankYou(json[key]);
        })
        .catch(err => {
            console.error("Erro ao carregar JSON:", err);
        });
}

// Inicia
initThankYou();
