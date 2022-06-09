import React from 'react';
import AutocompleteInput from "../components/Auto";
import GuessRow from "../components/GuessRow";
import deptsList from "../data/departements.json";

const ClassicGame = () => {
    const deptsArr = [];

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(key + " - " + deptsList[key].nom);
    }

    return (
        <div>
            <div className="search-bar-container">
                <AutocompleteInput suggestions={deptsArr} slice={2} />
            </div>
        </div>
    )
};

export default ClassicGame;