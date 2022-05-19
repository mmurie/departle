import { useEffect, useState } from 'react';
import Commune from '../components/Commune';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";


const ModeClassique = () => {
    const deptsArr = [];
    const [commune, setCommune] = useState({});

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        //deptsArr.push(value.nom);
        //deptsArr.push({code: key, value: suggestions[key].nom});
        deptsArr.push(key + " - " + deptsList[key].nom);
    }

    return (
        <div id="ModeClassique" className="container game">
            <Commune setCommuneParent={setCommune}></Commune>

            <div className="search-bar-container justify-evenly text-2xl">
                <Autocomplete suggestions={deptsArr} slice={2} />
            </div>

            <div>{JSON.stringify(commune)}</div>
        </div>
    )
};

export default ModeClassique;