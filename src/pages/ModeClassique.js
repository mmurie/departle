import React, { useEffect, useState } from 'react';
import Commune from '../components/Commune';
import GameComponent from '../components/GameComponent';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";
import { NavLink } from 'react-router-dom'


const ModeClassique = () => {
    const deptsArr = [];

    const [commune, setCommune] = useState({});

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(key + " - " + deptsList[key].nom);
    }

    return (
        <div id="ModeClassique" className="container game">
            <Commune setCommuneParent={setCommune}></Commune>

            <div className="search-bar-container justify-evenly text-2xl">
                <Autocomplete suggestions={deptsArr} slice={2} guessData={commune} mode={"ModeClassique"} />
            </div>

            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton bouton-retour"}>
                <li>Retour</li>
            </NavLink>
        </div>
    )
};

export default ModeClassique;