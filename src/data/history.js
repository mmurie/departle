export default function updateHistory(mode, nbCoups) {
    let currentHistory = {};

    if (window.localStorage.getItem("history")) {
        currentHistory = JSON.parse(localStorage.getItem("history"));
    }

    if (!["Classique", "Carte", "Forme"].includes(mode)) return;



    if (!currentHistory[mode]) currentHistory[mode] = [];
    if (!currentHistory["Global"]) currentHistory["Global"] = [];

    currentHistory[mode].push({ x: currentHistory[mode].length + 1, y: nbCoups });
    currentHistory["Global"].push({ x: currentHistory["Global"].length + 1, y: nbCoups });

    localStorage.setItem("history", JSON.stringify(currentHistory));
    console.log(JSON.stringify(currentHistory));

};