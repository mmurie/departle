import { useEffect, useState } from 'react';
import { getRandomCommune } from "../data/getData";

const Commune = (props) => {
    const [commune, setCommune] = useState({});

    //Quand le composant est monté
    useEffect(() => {
        getRandomCommune().then(c => {
            setCommune(c);
            if (props.setCommuneParent) {
                props.setCommuneParent(c);
            }
        });
    }, []);



    if (commune === {} || !commune["departement"] || !commune["nom"] || !commune["population"]) {
        return (
            <div>
                <h2 className="nom-commune">...</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h2 className="nom-commune">{commune["nom"] + " (pop: " + commune["population"] + ")"}</h2>
                <p>{commune["departement"]["code"]}</p>
            </div>
        );
    }


};

export default Commune;