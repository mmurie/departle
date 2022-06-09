import React, { useState, useRef, useEffect, useMemo } from "react";
import Auto from "../components/Auto";
import deptsList from "../data/departements.json";

const AutoComplete = () => {
    const deptsArr = [];

    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(value.nom);
    }

    return (
        <div>
            <h1>React Autocomplete Demo</h1>
            <h2>Start typing and experience the autocomplete wizardry!</h2>
            <Auto suggestions={deptsArr} />
        </div>
    );
};

export default AutoComplete;