import React from "react";
import Departements from "./departements.json";

const randomProperty = function (obj) {
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
