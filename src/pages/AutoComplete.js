import React, { useState, useRef, useEffect, useMemo } from "react";
import Auto from "../components/Auto";
import deptsList from "../data/departements.json";

const AutoComplete = () => {
    const deptsArr = [];
    //var deptsArrDef = [];
    /*const test = ["bleu", "orange", "vert"];
    Object.keys(deptsList).forEach(key => deptsArr.push({nom: key, value: deptsList[key].nom}));
    //Object.entries(deptsList).forEach(key => deptsArr.push([deptsList[key].nom]));
    for (const [value] of Object.entries(deptsArr)) {
        deptsArrDef.push(value.value);
    }*/

    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(value.nom);
    }
    console.log(deptsArr);

    return (
        <div>
            <h1>React Autocomplete Demo</h1>
            <h2>Start typing and experience the autocomplete wizardry!</h2>
            <Auto suggestions={deptsArr} />
        </div>
    );
};

export default AutoComplete;