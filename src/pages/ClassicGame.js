import React from 'react';
import AutocompleteInput from "../components/Auto";
import deptsList from "../data/departements.json";

const ClassicGame = () => {
    const deptsArr = [];

    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(value.nom);
    }
    console.log(deptsArr);
    
    return (
        <div className="search-bar-container">    
            <AutocompleteInput suggestions={deptsArr}/>
    
        </div>
    )
};

export default ClassicGame;