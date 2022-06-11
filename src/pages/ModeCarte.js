import { useContext, useState } from 'react';
import CarteFrance from '../components/CarteFrance';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";
import { NavLink } from 'react-router-dom';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ModeForme = () => {
    const deptsArr = [];
    const [departement, setDepartement] = useState({});

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(key + " - " + deptsList[key].nom);
    }

    return (
        <div id="ModeCarte" className="container game">
            <CarteFrance setDepartementParent={setDepartement}></CarteFrance>

            <div className="search-bar-container justify-evenly text-2xl">
                <Autocomplete suggestions={deptsArr} slice={2} guessData={departement} mode={"ModeCarte"} />
            </div>

            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton bouton-retour"}>
                <li><FontAwesomeIcon icon={solid('arrow-left')} /> Retour</li>
            </NavLink>

            <ToggleDarkMode></ToggleDarkMode>
        </div>
    )
};

export default ModeForme;