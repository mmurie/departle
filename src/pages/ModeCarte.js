import { useContext, useState } from 'react';
import CarteFrance from '../components/CarteFrance';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";


const ModeForme = () => {
    const deptsArr = [];
    const [departement, setDepartement] = useState({});

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        deptsArr.push(key + " - " + deptsList[key].nom);
    }

    return (
        <div id="ModeClassique" className="container game">
            <CarteFrance setDepartementParent={setDepartement}></CarteFrance>

            <div className="search-bar-container">
                <Autocomplete suggestions={deptsArr} slice={2} guessData={departement} mode={"ModeCarte"} />
            </div>
        </div>
    )
};

export default ModeForme;