import React from "react";
import Departements from "./departements.json";

export const randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

export const getRandomCommune = async () => {
    let randomDep = randomProperty(Departements);

    const response = await fetch("https://geo.api.gouv.fr/departements/" + randomDep["code"] + "/communes?fields=nom,centre,departement,population&format=json&geometry=centre");
    const jsonData = await response.json();

    let randomCommune = randomProperty(jsonData);
    return randomCommune;
};

export const getRandomSvgDepartement = async () => {
    let randomDep = randomProperty(Departements);

    const response = await fetch("https://data.economie.gouv.fr/api/v2/catalog/datasets/formes-geographiques-des-departements-en-svg/records?select=id%2Cd%2Cdata_anchor_x%2Cdata_anchor_y&where=id='" + randomDep["code"] + "'&limit=1");
    let jsonData = await response.json();
    jsonData = jsonData["records"][0]["record"]["fields"];
    jsonData["size"] = svgSize(jsonData);
    return jsonData;
};

function svgSize(dep) {
    let pointsStr = dep["d"].split('L').join(' ').split('M').join(' ').split('z').join('').split(' ');

    let pointsX = [];
    let pointsY = [];
    pointsStr.forEach((str, i) => {
        if (!isNaN(parseFloat(str))) {
            if (i % 2 == 0) {
                pointsX.push(parseFloat(str));
            } else {
                pointsY.push(parseFloat(str));
            }

        }
    });

    let lenX = Math.max.apply(Math, pointsX) - Math.min.apply(Math, pointsX);
    let lenY = Math.max.apply(Math, pointsY) - Math.min.apply(Math, pointsY);
    return Math.max(lenX, lenY);
};