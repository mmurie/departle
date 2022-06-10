import { useContext, useState } from 'react';
import FormeDepartement from '../components/FormeDepartement';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";
import { NavLink } from 'react-router-dom'

const ModeForme = () => {
    const deptsArr = [];
    const [departement, setDepartement] = useState({});

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(key + " - " + deptsList[key].nom);
    }

    return (
        <div id="ModeForme" className="container game">
            <FormeDepartement setDepartementParent={setDepartement}></FormeDepartement>

            <div className="search-bar-container justify-evenly text-2xl">
                <Autocomplete suggestions={deptsArr} slice={2} guessData={departement} mode={"ModeForme"} />
            </div>

            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton bouton-retour"}>
                <li>Retour</li>
            </NavLink>
        </div>
    )
};

export default ModeForme;