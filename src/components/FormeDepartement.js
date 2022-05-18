import { useEffect, useState } from 'react';
import { getRandomSvgDepartement } from "../data/getData";


const FormeDepartement = () => {

    const [departement, setDepartement] = useState({});

    //Quand le composant est monté
    useEffect(() => {
        getRandomSvgDepartement().then(d => {
            setDepartement(d);
            console.log(d);
        });
    }, []);



    if (departement === {} || !departement["d"] || !departement["data_anchor_x"] || !departement["data_anchor_y"] || !departement["size"]) {
        return (
            <svg id="FormeDepartement" xmlns="http://www.w3.org/2000/svg" width="0" height="0">

            </svg>
        );
    } else {
        let coef = 1 / (departement["size"] < 100 ? 100 / departement["size"] : 1);
        return (
            <svg id="FormeDepartement" xmlns="http://www.w3.org/2000/svg" viewBox={-50 * coef + " " + -50 * coef + " " + 100 * coef + " " + 100 * coef} >
                <g fill="#000" stroke="#fff" strokeWidth=".5">
                    <path id="dep" d={departement["d"]} transform={"translate(-" + departement["data_anchor_x"] + " -" + departement["data_anchor_y"] + ")"} />
                </g>
            </svg>
        );
    }

};

export default FormeDepartement;