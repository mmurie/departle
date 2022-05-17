import React from 'react';
import AutocompleteInput from "../components/Auto";
import GuessRow from "../components/GuessRow";
import deptsList from "../data/departements.json";

const ClassicGame = () => {
    /*const deptsArr = [];

    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(value.nom);
        //deptsArr.push({code: key, value: deptsList[key].nom});
        //Object.keys(deptsArr).push(key => key, nom => deptsArr[key].nom)
    }
    console.log(deptsArr);*/
    const deptsArr = [];

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        //deptsArr.push(value.nom);
        //deptsArr.push({code: key, value: suggestions[key].nom});
        deptsArr.push( key + " - "+ deptsList[key].nom);
    }
    
    return (
        <div>
            <div>
                <GuessRow id={1} location={"lol"}/>          
                <GuessRow id={2} location={""}/>
                <GuessRow id={3} location={"123"}/>
            </div>
            <div className="search-bar-container">    
                <AutocompleteInput suggestions={deptsArr} slice={2}/>
            </div>
        </div>
    )
};

export default ClassicGame;