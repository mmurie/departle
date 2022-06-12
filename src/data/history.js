export default function updateHistory(mode, nbCoups) {
    let currentHistory = {};

    if (window.localStorage.getItem("history")) {
        currentHistory = JSON.parse(localStorage.getItem("history"));
    }

    mode = mode.substring(4);

    if (!["Classique", "Carte", "Forme"].includes(mode)) return;

    if (!currentHistory[mode]) currentHistory[mode] = [];
    if (!currentHistory["Global"]) currentHistory["Global"] = [];

    let current = new Date();

    if (currentHistory["LastDate"]) {
        if (current - Date.parse(currentHistory["LastDate"]) < 1000) {
            return;
        }
    }

    currentHistory[mode].push({ x: currentHistory[mode].length + 1, y: nbCoups });
    currentHistory["Global"].push({ x: currentHistory["Global"].length + 1, y: nbCoups });
    currentHistory["LastDate"] = current;

    localStorage.setItem("history", JSON.stringify(currentHistory));
};