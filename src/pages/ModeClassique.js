import React, { useEffect, useState } from 'react';
import Commune from '../components/Commune';
import Game from '../components/Game';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";


const ModeClassique = () => {
    const deptsArr = [];
    //const [commune, setCommune] = useState({});
    //create ref for commune
    let childRef= React.createRef();
    
    console.log(childRef);

    const [communeData, setCommuneData] = useState('');
  
  const parentToChild = () => {
    setCommuneData("This is data from Parent Component to the Child Component.");
    console.log("data returned = ");
    console.log(communeData);
  }

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        //deptsArr.push(value.nom);
        //deptsArr.push({code: key, value: suggestions[key].nom});
        deptsArr.push( key + " - "+ deptsList[key].nom);
    }
    return (
        <div id="ModeClassique" className="container game">
            <Commune parentToChild={Commune.commune}></Commune>
            <Game />
            <div>
                <button onClick={() => parentToChild()}>Click Parent</button>
            </div>
            
            <div className="search-bar-container justify-evenly text-2xl">    
                <Autocomplete suggestions={deptsArr} slice={2}/>
            </div>            
        </div>
    )
};

export default ModeClassique;