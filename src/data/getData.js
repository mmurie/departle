import React from "react";
import Departements from "./departements.json";

const randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

const getCommunes = async () => {
    let randomDep = randomProperty(Departements);

    const response = await fetch("https://geo.api.gouv.fr/departements/" + randomDep["code"] + "/communes?fields=nom,centre,departement,population&format=json&geometry=centre");
    const jsonData = await response.json();

    let randomCommune = randomProperty(jsonData);
    console.log(randomCommune);

};

export default getCommunes;