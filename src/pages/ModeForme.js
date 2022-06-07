import { useContext, useState } from 'react';
import FormeDepartement from '../components/FormeDepartement';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";


const ModeForme = () => {
    const deptsArr = [];
    const [departement, setDepartement] = useState({});



    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        //deptsArr.push(value.nom);
        //deptsArr.push({code: key, value: suggestions[key].nom});
        deptsArr.push(key + " - " + deptsList[key].nom);
    }
                /*<div className="search-bar-container">
                <Autocomplete suggestions={deptsArr} slice={2} />
            </div>*/
    return (
        <div id="ModeClassique" className="container game">
            <FormeDepartement></FormeDepartement>

            <div className="search-bar-container justify-evenly text-2xl">
                <Autocomplete suggestions={deptsArr} slice={2} guessData={departement}/>
            </div>
        </div>
    )
};

export default ModeForme;