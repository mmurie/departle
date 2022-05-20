
import { useEffect, useState } from 'react';
import Departements from "../data/departements.json";
import { randomProperty } from "../data/getData";
import { getDistanceBetweenTwoPoints } from "../utils/coordinatesFunctions"

function setDistanceClass(targetDep, guessDep) {
    let t_coords = Departements[targetDep]["centre"]["coordinates"];
    let g_coords = Departements[guessDep]["centre"]["coordinates"];
    let distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], g_coords[0], g_coords[1]);
    if (distance <= 1) {
        return "distance-0";
    }
    let n = (1 / 1000 * 32 * distance);

    n = parseInt(n);
    n = n > 32 ? 32 : n < 1 ? 1 : n;
    console.log(n);
    return "distance-" + n;
}

const CarteFrance = () => {
    const [departement, setDepartement] = useState({});

    //Quand le composant est monté
    useEffect(() => {
        let randomDep = randomProperty(Departements);
        setDepartement(randomDep);

        Object.keys(Departements).forEach((d) => {
            const dep = document.getElementById("dep_" + d.toLowerCase());
            dep.classList.add(setDistanceClass(randomDep["code"], d));
        });
    }, []);

    return (
        <svg id="CarteFrance" xmlns="http://www.w3.org/2000/svg" width="907" height="1000">
            <g fill="none" stroke="#86aae0" strokeWidth="1.5">
                <path id="corsica_separating_line" d="M783 1e3v-130l119-78" />
            </g>
            <g fill="#8ad" stroke="#fff" strokeWidth=".5">
                <path id="dep_2a" d="M808 896v3l3 3 6 4 1 3-4 1-5 1v2l2 2 0 8 8 2 3 1 2 4-2 2-2 1-3 4-2 3 1 6 6 0 1 1 5-2 2 1-3 6 3 2-5 3-2 7 8 2 11 1-5 5s-2-1-3-1v1c0 2-3 6-3 7l4 3 6 4 12 4 4 1 3 2-2 3 6 0 1 3h5l2-7-4-1 5-5-1-2 0-3 7-4 0-4-4 0-3 2v-4l5 0 2-4 2-13-1-5v-5l-7 4-7 0-1-5 1-1-2-2-1-9-1-2h-4l-2-1v-6l-2-2-2-1-4-5 0-3h-5l-2-5h-6l-4-4 1-2-2-1-5 0-2-1h-8l0-2-4 0h-3z" />
                <path id="dep_2b" d="M868 823l-5 4 0 4 3 3-3 3 1 3-2 2v3l4 4v5l-2 4-3 1-3-3-5 0-1-1h-4l-4 4-2 6-9 2-7 6-2 4-3-1-2-2-1 6-3 1 0 6 1 3-4 3-1 3 4 0 0 2h7l2 1 6 0 2 1-1 2 4 4h6l2 5h5l0 3 3 5 3 1 2 2v6l2 2h4l1 1 1 9 2 2-1 1 1 5 7 0 7-4-1-11 9-12v-20l-4-7-1-22-2-4-5-4-1-13 2-6-2-10-2-8-2-2-3-2z" />
                <path id="dep_13" d="M687 750l-10 5-3 20-11-2-3 8 3 4-12 7-3 8 11 0 15 1 3 3h-5l-4 6 16 3 12-2-7-6 5-4 7 3 3 7 20 1 6-3 1 4-6 5 8 0-1 4-2 2h17l9 3 1 1 0-7 3-3 3-2 0-2-3-2h-3l-2-2 3-3v-1l-3-1v-3l7 0 2-1-6-6 0-7-4-3 3-7 8-5-6-4-4 3-10 3-7-1-15-6-8 0-7-3-3-4-5-6-13-5h-1z" />
                <path id="dep_84" d="M700 697l-5 0-4 6 1 7 6 1-1 2-5 1-5 5-1-2 1-7-2-2-10 1-2 4 1 1 6 10v8l11 11v4l-4 3 13 5 5 6 3 4 7 3 9 0 14 6 8 1 9-3 4-3 1-2-7-9h-9v-3l3-3v-4l-6-3-1-5 4-2v-4l-4-1-1-5-3 0-6-5-1-4-10-1-7-1-1-4 2-5-4 4-8-1-1-3 5-6-5-5z" />
                <path id="dep_83" d="M831 756l-6 0-2 2-10 0-9 6-6-4-9 3-1 4-7 5-12-8-9 3-1 2 7 4-8 6-4 6 4 3v7l6 6-2 1-7 0v3l4 1v1l-3 3 1 2h3l3 2 0 2-3 2-3 3 0 7 1 2 6 2 2 8 4 1 4-3 6-4 11 1 0 3-4 2 9 0-2-2-1-5 5-3 5 2 2 0 2 3 3-2 0-5 3-2h8l2-4 5 2 6-3v-9l-8 0 6-3 3-4 1-6 10-1 6-7-4-4v-2l-2-2 2-2 0-4-5-2h-2l-4-3 0-8-5-1-4-1-1-4 4-2z" />
                <path id="dep_04" d="M842 665l-4 6-5 4-2 3-5 1v3l-2 2-2 5-11 0-6-3-4 3-6-1-2 3h2l0 6-1 0-6-3v-3l-4-3h-2v4l-3 0-6 4-4 6-1 4 2 0 1 5h-2l-4-3-2 1 1 2 5 7-3 1-3-2h-6l-6 6 0 2-2-3-3-2-2 5-3 3-2 0 1 5 4 1v4l-4 2 1 5 6 3v4l-3 3v3h8l8 9 9-3 12 8 7-5 1-4 10-3 5 4 9-6 10 0 2-2 6 0-2-4 2-2 0-2h5l1-2 5-3 4 3 2-2-6-5-6-6-3-1 0-5-4-6 2-8 1-5 4-3 0-4 5-3 1 0v-7l5-1-3-3-3-1-2-4 1-4 7-7-1-5 1 0-5-1z" />
                <path id="dep_06" d="M842 698l-1 0-5 3 0 4-4 3-1 5-2 8 4 6 0 5 3 1 6 6 6 5-2 2-4-3-5 3-1 2h-5l0 2-2 2 2 4-4 2 1 4 4 0 5 2 0 7 4 4h2l5 2 0 3-2 3 2 1v3l4 4 1-9 7 2 2-3 4 0 0-11 9-1 7-6h6l1-4 6-4-4-8 6-5-1-5 8-3 2-8-1-5-2-3-2-5-5 0-17 6h-5l-10-7-9-3h-5v-6l-8-5z" />
                <path id="dep_05" d="M811 619l-3 1-1 6-6 1-1-6-2-2-7 1-2 2-2 8 1 2 8 0 1 5 3 1v8l-7 0-2 3-9-1-4 4-4-2-4 4 1 3-2 3h-10v4l3 2-1 2-6 3-7 1-3 6 0 5 4 3-4 5-5-3-6 0 0 3 3 3-4 3 1 6 13 3 2 5 3 0-1 11 6-5h6l3 2 3-1-5-7-1-2 2-1 4 3h2l-1-5-2 0 1-4 4-6 6-4 3 0v-4h2l4 3v3l6 3 2 0-1-6h-2l2-3 6 1 4-3 6 3 11 0 2-5 2-2v-3l5-1 1-3 6-4 4-6 5 1 3-4 4 0v-3l-5-3-1-10-4-1-5 0-10-4-1-11-6-2-1-4-3-5-7 0z" />
                <path id="dep_48" d="M578 643l-10 4-3 6-7-4-5 16-5 12 7 9 0 7 5 4v8l2 13 6 2-1 4 9-1 3 1-2 2 11 7 10-2 1-2-1-3 4-1 6 5 9 1 4-7v-5l3-3-2-1v-7l-6-6 5 0 2-2 2-4-2-1 1-7-6-7-3-13-9-12-7 2-1-6h-4l0 5-10 3-6-17z" />
                <path id="dep_03" d="M542 451l-5 6-3 0-3 4-3-4-10 9v6l2 2 0 2-5 4-5-1-9 2-4 5-2 4 4 6v4l3 4 2-4 3 5 4 2 4 9v3l6 4 3-1 2-6 2 0v-3l4-1 1 2 5-5h5l1 2-2 3 3 5 1 2 9 5 12 2 3 0 5 1 4-3 3 2 1 4 4 1 6 0 1 4 5 2 0-2 9 0-1-21-2-5 1-4 6-1 8-6 0-14-3-4h-5l-2-3h-7l-1-2v-5l-8-14-3-2-7 9-3 1-1-5-3-2-2 3h-5l-1-3-4 2-3 2-5-4-6-3 0-5-9 0z" />
                <path id="dep_30" d="M625 696l-2 4-2 2-5 0 6 6v7l2 1-3 3v5l-4 7-9-1-6-5-4 1 1 3-1 3-10 1-11-7-2 2v5l-4 1 1 4 5 1h6l1 7-6 3v4l5 2v2l2 2 2-2h3l1 3h4l2-7h3l5-6 6 0 1 9 2 3 4-2 6 3 2 4 11 6 4 10v4l-7 4-5 4 6 1v7l8 0 5 0 3-8 12-7-3-4 3-8 11 2 2-20 15-8v-4l-11-11v-8l-6-10-13-7-1 5-5 1-2-6-5 1-1 7-4-1-8-6-4 2v-10l-6-4z" />
                <path id="dep_11" d="M492 802l-1 7-6-2h-7l0-3-4 1-7 2-3-4-5 4 2 4-6 2-1 6-5 2 5 5-1 3 17 8 2 13v6l1 9h-9l-3 4 12 9 7-3 8 9-1 1 1 0 15-7-4-5 0-6h34l-1-5 8-4 10 7 4 2 0-10 0-12-4 1-4-6 3-5 6 6 6-4 3-4 1-4-5 0-1-5-5 0-4-7-4 1-3-2-1-6-2 1 1 4h-5l0 6-7 3-3-7-5 3-4-3-1-5 3-4-2-4h-11l-11-2h-3z" />
                <path id="dep_34" d="M605 747l-5 6h-3l-2 7h-4l-1-3h-3l-2 2-2-2v-3l-5-2v2l-7 1-3 3 1 6h-5l-6-3h-3v4l1 10h-10l-2 4-13 5-5-4-3 5-2 5 6 5-2 7-8 2 2 4-3 4 1 5 4 3 5-3 3 7 7-3 0-6h5l-1-4 2-1 1 6 3 2 4-1 4 7 5 0 1 5h5l0-2 13-3 1-4 11 0 3-4 19-16 12-8 5 0 5-4 7-4v-5l-4-9-11-6-2-5-6-3-4 2-2-2-1-9-6 0z" />
                <path id="dep_66" d="M540 858l-8 4 1 5h-34l0 6 4 5-15 7-2 0-12 0-1 3-6 2-4 4-12 2 1 4 6 5 10 3 0 6 6 5 5 0 6-8 7-1 12 4 10 8 3-3h3l2 2 2-2 1-5 11-2 3-5 6-2h7l5 5 6 1v-6l-3-4-5-2-1-32-5-2-9-7z" />
                <path id="dep_15" d="M513 590l-1 4 2 5-2 2h-4l-4-4-3-2 0 10-7 5-4 6 1 6-2 3-2 6h-2l-3 4 2 2 1 4-4 3 1 12 7 5-5 10 5 2-2 6 4 1 3-5h5l1 1h11l2-4 3-1 1-8h2v-9l11-9 1 1 1 7 7-1 1 10h4l1 11 3 3 5-11 5-16 7 4 3-7 9-3v-3l-2-3-4-2 2-3-2-2 2 0 3-2-4-1-2-2-1-7-2-2-2-6h-8l-2-5-2 0-2 3-5-1-5-7-2-1-4-2-2 3h-6l-3-7-11-3z" />
                <path id="dep_43" d="M572 595l-2 2v2l-4 0-4 3-6 1-2 2 1 0 2 5h8l2 6 2 2 1 7 1 2 5 1-3 2-2 0 2 2-2 3 4 2 2 3v3l1 0 6 17 9-3 1-5h4l1 6 7-2 8 10 6-8 9-7h9l3-9 5 0 1-7h5l-1-2-1-5 2-4 5-2 2-8-5-6-6 0 1-6-11-5-4 0-8 6-8-2-1 2-5-2-3-3-2 4-5-1-3-2-2 5-4-2-2-4h-3l-2-2-4 1h-5l-2-1-2 1-1-2z" />
                <path id="dep_63" d="M538 509l-5 5 0-2-5 1v3l-2 0-2 6-3 1-5-4 0 8 3 4 1 7-4 3-1 5-4 2-7 4 1 3 8 9 1 5-3 5v5l2 3 1 6-1 2 11 4 3 6h6l2-2 4 1 2 1 5 7 5 1 2-3h1l2-2 6-1 4-3 4 0v-3l2-1 1 2 2-1 2 1 5 0 4-2 2 3h3l2 4 4 1 2-4 3 2 5 1 2-4 3 3 5 1 1-1-2-1-1-4 6-7-3-12-9-6-4-9-5-6 2-8 3-3-6-5v-1l-5-2-2-4-5 0-4-1-1-4-3-2-4 2-5-1-4 1-11-2-9-5-1-3-3-4 2-4-1-1h-5z" />
                <path id="dep_65" d="M316 784l-3 2 6 10-3 4 2 4 5 6-4 5-5 13-10 8 2 5-2 2-5-1-2 12-3 2 0 7 1 0 6 3 7 6 1 4 5 5h5l12-5 5 6 7 1 2-4 4 1 7 1-1-19h4l3 1 2-2 0-4 5-2-2-7-2-2-4 2 2-4-1-4-6-4 1-3 3-6 4-1v-3l3-3 1-3-6-3h-9l-1-3h-5l-1-3h-5l-1 1h-5l0-3-4-2 1-1 1-4-1-1-2-5-4-1-4-2 0-6h-6z" />
                <path id="dep_64" d="M303 785l-5 3-10-1-1-1-7 2-5 1-4-3-5 2-1-2h-5l-3 2-9 0-4 3-9 0-1 2-2-1 2-3-4-3-6 5-9 0-11-5-1 3-8 10-7 3-4 0v4l4 4 6 0 1 5 5 1 1-4 7 3 4 1 1 5-2 2v7l-5 2 0 3 3 4 6 2 1-6 3-3-1 5 3 3h6l3 4 9 2 8 5h14l1 7 9 7 4 5 4-2 3-1 2 2 3-2 7-4 0-7 3-2 2-12 5 1 2-2-2-5 9-8 6-13 4-5-5-6-2-4 3-4-6-10-9-1-1 0z" />
                <path id="dep_40" d="M244 684l-12 6h-3l-6 34-8 32-3 12-2 9-6 9 11 5 9 0 6-5 4 4-2 2 2 1 1-2 9 0 4-4 9 1 3-2h5l1 2 5-2 3 3 6-1 7-2 1 1 10 1 5-3-2-5 2-7 4-4-1-7 3-3-5-7 4-4 4-1 4 2 5-5 1 6 2 2 4-1 0-4 1-3-1-2 1-7 4-4-2-3-4 0-5-2-7 1-2-8-4-6-2 0 1 6v2l-7 1-6-3-2-8-4-5-3 0-1-3-3-2-6-2 2-2v-2l-2-2-3-1-6 0-4 4-3 0-4-3-6 3-3-2 2-3 1-5-6-2z" />
                <path id="dep_33" d="M246 575l-6 9-2 30-4 30-4 24 0 6 3-8 5-6 7 6 1 2 2 3-9 1-2-3-3 2-1 5-4 6v8h3l11-6 7 2-1 4-2 4 3 1 6-2 4 3 3 0 3-4 7-1 2 2 2 2v2l-1 2 6 2 3 2 0 3 4 0 4 5 2 8 6 2 6 0v-2l0-6 2 0 3 5 6-1 3-3-1-3-2-2 1-4h3l4-2-2-4-1-4 3-5 5-8 4-4 3-1 0-4-3 0-2-4 1-3 5-1 3-1 4-1-1-7 4-2-5-3-4 5-11 0-1-2-4-2 3-3v-4l-1-2v-1l3-3 1-5 2-6-2-3h-4l-2-2-1 4-4-2-5 2-4-1-9-8-5 0-1-12-10-1 0-5-2 1h-10l0 3 3 10 0 11-1 2-2-8-5-20-19-17 1-7-4-1z" />
                <path id="dep_24" d="M373 566l-3 6-6 0 0 9-17 12 0 12-7 7-3 3-7-1-4 7-1 2 1 3h4l2 3-2 5-1 6-3 2v2l1 1v4l-2 3 3 2 1 3 11-1 4-5 5 3-4 2 1 7 5 4 1 7 5 2 3-3h8l3-3 3 0 0 3h8l1-2 3 0 3 3v3l-3 1 1 2 4 1 4-4h4l3 3 5 2 1-1 3-3 1-6 7 0 6-8-3 0 0-4 6-1 0-4 3-1 4-6-4-4v-4l3-2-3-5 0-8-8 0-3-2 3-3-4-4 3-3-3-2v-5l7-6-4-3-2-6-8-1-2-2 5-2-2-3-8-1-2-7-11-1-3 3-2 1-3-4 1-4-2-4-10 0z" />
                <path id="dep_47" d="M346 664l-4 0-3 1-5 1-1 4 2 3 3 1 0 3-3 1-3 4-6 8-2 5 1 5 1 3-4 2h-3l-1 4 3 2 0 3-3 3-5 1 0 1 2 8 7-1 5 2 4 0 2 3-4 4-1 7 1 2 1-3 5 4 5-6 3 4 6-1 7-1 2-5 11-1 6 5 2-2 3-1-1-5 5-1 7-2-2-4 3-3 1-6-4-5 3-8 6 3 7-1-3-8-3-11 7 0 2-4-6-2-3-3h-4l-4 4-4-1-1-2 3-1v-3l-3-3-3-1-2 2h-7l0-2-2 0-4 3h-8l-3 3-5-2-1-7-5-4z" />
                <path id="dep_46" d="M442 634l-7 4h-1l-3 2v4l4 4-4 6-3 1 0 4-6 1 0 3 3 1-6 8-8 0 0 6-3 3-2 5-7 0 3 11 3 7 4-1 1 2-3 3 2 4h3l3 4h3l2-3 1 1v3l1 4 7 0 5-5 3-1 1 2 2 4h3l1-7 5 1 3-4 6 1 8-4v1l2-2-3-5-1-7 4-3 2 0 6-6 3 0 1-2h7l2-2 1-2-3-1 2-6-5-2 5-10-6-5-2-13-6-2-4 4-2-3-6 6-4 0-8-10-9-4z" />
                <path id="dep_09" d="M423 817l-2 2-1 1 5 4 1 2-1 2-8 1-2 3 0 1 3 1 2 2-2 3-2 0-4-3-4-2-5 1-7 4 0 7 2 1-1 5-8 2-4 4v7l2 1-3 3 1 1 11 3h5l7 7 15 0 6 9 6-2 15 2 1 7 12-2 4-4 6-2 1-3 14-1-8-9-7 3-12-9 3-4h9l-1-9v-6l-2-13-17-8 0-3-3-4-3 1-4 1-7-4-2 0 3 4-1 2-6 0-1-4-3-5-3 0z" />
                <path id="dep_32" d="M369 735l-11 1-2 5-7 1-6 1-3-4-5 6-5-4-2 6 0 4-4 1-2-2-1-6-5 5-4-2-4 1-4 4 5 8-3 2 1 7-4 4-2 7 3 5 9 1 3-2h6l0 6 4 2 4 1 2 5 1 1-1 4-1 1 4 2 0 3h5l1-1h5l1 3h5l1 3h9l6 3 1-1 4-2 6-8 12 1 5 3 2-2 3-8 3-7 7-3 3-2-1-2-3-1-2-3h-2l-4-4 0-3-6-6-1-3-3 1-1-2 2-3-3-3v-4l-2-3-7 0v-4l4-3v-4l4-1-2-2-3 2h-5l-2-2-1 0-1 2-6-5z" />
                <path id="dep_31" d="M438 754l-5 2-2 3-2-2-4-1 0 3-3 1 4 2-3 4-8 2-3-4h-4l-2 1h-10l-1 1 1 3 6 6 0 3 4 4h2l2 3 3 1 1 2-3 2-7 3-3 7-3 8-2 2-5-3-12-1-7 8-3 2-2 4-3 3v3l-4 1-3 6-1 3 6 4 1 4-2 4 4-2 2 2 2 7-5 2 0 4-2 2-3-2h-4l1 20 14 1 1-18 5 1 8 4 3-3-2-1v-7l4-4 8-2 1-5-2-1 0-7 7-4 5-1 4 2 4 3 2 0 2-3-2-2-3-1 0-1 2-3 8-1 1-2-1-2-5-4 1-1 2-2 3 0 3 5 1 4 6 0 1-3-3-3 2 0 7 4 4-1 3-1-1-1 5-2 1-5 6-3-2-4 5-4 3 4 7-2h2v-7l-4 0-5-1-4-5-2-3-8-3-2-3 2-1v-4l-2-2-4-6 0-4-1-1-4-4-2-5-2-2z" />
                <path id="dep_82" d="M392 703l-3 8 4 5-1 6-3 3 2 4-7 2-5 1 1 5-3 1 2 2h5l3-2 2 2-4 1v4l-4 3v4l7 0 2 3v4l3 3-2 3 1 2 4-2h10l2-1h4l3 4 8-2 3-4-4-2 3-1 0-3 4 1 2 2 2-3 5-2 2 1 2-3-3-3h6l2-4 4-4h-4l2-5 11-2 4-2 5-2 2-2-2-5 3-6-6 0 0-8-8 3-5-1-4 4-5-1-1 7h-3l-1-4-1-2-3 1-6 5-7 0-1-4v-3l0-1-3 3h-3l-3-4h-3l-2-4 3-3 0-2h-5l0 2-7 1-6-3z" />
                <path id="dep_12" d="M530 645l-11 9v9h-2l-1 8-3 1-2 4h-11l-1-1h-5l-3 5-1 0-1 2-2 2h-7l-1 2-3 0-6 6-2 0-4 3 1 7 3 5-2 2 0 8 5 0-3 6 3 6 3-2 1 3 4-4 6 0 7 4 10 2 4 7 6 2 3 8-1 3 4 7v3l7 9 6 3 4-1 2-3 3 1 6 4h10l-1-11v-3h3l6 3h5l-1-6 3-3 7-1v-5l6-3-1-7h-6l-5-1-1-4 4-1v-5l4-4-3-1-9 1 1-4-6-2-2-13v-8l-5-4 1-7-11-13-1-10h-4l-1-11-8 1 0-6-1-2z" />
                <path id="dep_81" d="M485 726l-6 0-4 4-1-3-3 2-1-1-1 2-5 2-5 2-11 2-1 5h4l-4 4-2 4h-6l3 3-2 3 1 1 1 4 4 5 1 1 1 4 3 5 3 3v4l-3 1 2 3 8 4 2 2 4 5 5 1 4 0v7l2-1 0 3h7l6 2 1-7h3l11 2h11l8-2 2-7-6-5 2-5 3-5 5 4 13-5 2-4-6-4-3-1-2 3-4 1-6-3-7-9v-4l-4-6 1-3-3-7-6-3-4-7-10-2-7-4z" />
                <path id="dep_01" d="M693 478l-4 0-2 5-7 26-1 3-1 8-2 3v12l-1 3 7 4 3 0 4 4 1 6 5-1 7 2v-1h4l5 4 4-2 3-7 2-3 3 1 3 2 2 5 14 18 5-3 0-7 5 0v-12l3-2 0-11 1 1v-4l-2-4 1-10 4 2 2-3 3-1 4-3h-4v-7l4-3 7 0 0-4-2-1 5-7-1-2-6-4-15 17h-10v-5l-6-2-7 7-5 1v-5l-5-2-7-10-7-3-2-5-3 0-4 2-3 1-4-3z" />
                <path id="dep_38" d="M720 544l-2 3-3 7-4 2-5-4h-4l0 5 5 4-8 10-10 3-8 2 5 5 1 3-8 4 0 11-1 0 2 5 7 2 4-2 5-3 7 5h6l3 6-1 3 0 6-1 6 0 1 3 0 6 2 9 2 3-2 2-3h1l0 29 2 2h5l5 3 4 3 3 0 2 2 7 1 0-1-3-2v-4h10l2-3-1-3 4-4 4 2 4-4 9 1 2-3 7 0v-8l-3-1-1-5-8 0-1-2 2-8 2-2-2-3-4-2-2 2 1-3v-3l-3-3 1-8 4-2-1-5-7-7h-3l-2 3-5-7-2 1-3 5 2 3-1 1-3-2-10-2-4-8v-3l-4-5-1-2-14-18-2-5-3-2-3-1z" />
                <path id="dep_74" d="M809 484l-8 2-8 6-2-3-4 0-4 8 1 3 4 4-8 4-4 5h-8l-4 3-4 1-1 3-4-2-1 10 2 4 0 4 3 2v10l7 2 3 5 6 0 2-2h3l5 6 2 2 6-1 2-3 2-7 3-2 3-8 4-3 2 1 1 2-2 3 4 4h5l4 6-1 2 4-3 3-3 2 1v-7l12-5 2-3-1-8-8-8-3 1v-9l-6-3-1-3 4-4v-5l-6-7 0-5h-13z" />
                <path id="dep_42" d="M612 506l-6 1-1 4 2 5 1 21-9 0 0 3 6 5-3 3-2 8 5 6 4 9 9 6 3 12-6 7 1 4 10 3 8-6 3 0 12 5-1 6 6 0 5 5 3 0 6-2 2-7 9-5 0-11 1 0-5-1-3 2-4-2 4-5-1-4-12-2-10-9v-3l2-2v-3l-3-2 3-3v-5l-5-4v-5l-3-3v-4l-2-5 3-3 0-7h7l2-2-2-4v-4l-2-1-1 7h-4l-3 3-2-2-12-2-4 3h-3l-1-3-5-1-1-5-1-1z" />
                <path id="dep_69" d="M672 501l-4 0-3 4-2-3-4 3-4-3h-4l-1 1-1 4 2 2v3l2 4-1 2h-8l0 7-3 3 2 6v3l3 3v5l5 4v5l-3 4 3 1v3l-2 2v3l10 9 12 2 1 4-4 4 4 2 3-1 5 1 7-4-1-3-5-5 8-2 10-3 8-10-5-4 0-4-7-2-5 1-1-6-4-4-3 0-7-4 1-3v-12l2-3 1-8-1 2-3 0-1-7-2-6z" />
                <path id="dep_73" d="M755 535l0 11-3 2v12l-5 0 0 7-5 3 1 2 4 5v3l5 8 9 2 3 2 1-1-2-3 3-5 2-1 5 7 2-3h3l7 7 1 5-4 2-1 8 3 3v3l-1 3 2-2 4 2 2 3 7-1 2 2 1 6 6-1 1-6 3-1 7 0 11-4 4 2h4l0-4 5-3 2-2 9-3 1-7-1-2 5-9-5-2-2-5-9-6s1-11-1-13c-2 0-7 1-7 1l-5-7 0-5-2-1-3 3-4 3 1-2-4-6h-5l-4-4 2-3-1-2-3-1-3 3-3 8-3 2-2 7-2 3-6 1-2-2-5-6h-3l-2 2-6 0-3-5-7-2v-10l-4-3z" />
                <path id="dep_07" d="M678 599l-8 5-2 7-6 2-3 0-2 9-5 2-2 4 1 5 1 2h-6l0 7-5 0-3 9h-9l-9 7-6 8 1 2 3 13 6 6-1 8 8 5v10l4-2 8 6 4 1 1-7 5-1 2 5 5 0 1-5 12 6 2-4 5-1 0-7-1-2h-2v-3l2-3-2-3 1-7 4-5v-8l-1-9 3-1 1-4 3-7 2-5-3-8-2-6-3-11v-15l-1 0-3-5z" />
                <path id="dep_26" d="M696 601l-5 3-4 2-5-2v15l3 11 2 6 3 8-2 5-3 7-1 4-4 1 2 9v8l-4 5-1 7 1 3-1 3v3l2 0 1 2 0 7 5 0 2 2-1 7 1 2 5-5 5-1 1-2-6-1-1-7 4-6 5 0 5 5-5 6 1 3 8 1 4-4-2 5 0 4 8 1 10 1 2 4 5 5 5 0 3-3 2-6 3 3 2 3 1-14-3 0-2-5-13-3-1-6 4-3-4-3 1-3 6 0 5 3 4-5-4-3 0-5 3-6 7-1 6-3 1-1-7-1-2-2-3 0-4-3-5-3h-5l-2-2 0-29h-1l-2 3-3 2-9-2-6-2-3 1 0-2 1-6 0-5 1-4-4-6h-5l-7-5z" />
                <path id="dep_17" d="M261 492l-5 1-11 6 3 3-6 5-1 3-5 1-3-3-7-1-1-4-4-3-6 3 3 5h5l6 4 3 3 8-1 2 4 4 1 2 5 4 1-1 4-4-1-1 3 3 4-2 8-4 0 0 5 1 2h-5l-1-3 4-4-2-3-1-1-1-9-6-1-5-6-1 13 8 6 1 7 2 8 0 8 5-1 7 6 5 3 1 4 4 1 11 11 3 13h10l2-2 1 5 9 1 1 12 6 0 8 9 4 0 5-2 4 2 3-6 2-5-7-5-2-3-4-4-7 1-3-1 0-2 4-1v-1l-3-1-2-1 5-4v-3l-2-2 1-2 1-4-3-3-2-3-4-5-3-1 2-4-1 0-1-8-3-2 4-2h6l2-2h4l1 2 4 0 3-1 1-7 3-11-3-3-1-4-5-3-7-4-8 1-5-7-7 0-6-5v-2l-4-5-1-5-5-4-7 3-2-6z" />
                <path id="dep_19" d="M476 561l-1 3-6 2-3 4h-2l-4-1-3 4-4 1-3 5h-4l-2 2-7 0-3 4-2-1-5 6-5-2-2 5 2 4 4 3-7 6v5l3 2-3 3 4 4-3 3 3 2 8 0 0 8 3 5h1l7-4 10 4 7 10 4 0 6-6 2 3 4-4 5 2 1 1 4-3-1-4-2-2 3-4h2l2-6 2-3-1-6 4-6 7-5 0-9 3 1 4 4h4l2-2-2-5 2-6-1-6-2-3v-5l3-5-1-5-1-1-3 3h-7l-3 3h-4l-4-3-1-3h-9l-2-2h-3z" />
                <path id="dep_23" d="M458 487l-2 6-6 0-2-1-4 0-3-2-7 7v6l-4 8 1 5 5 1 3 8 3 3-1 15 7-2 2 3-4 4v3l4 1 6-1 2-3h1l-1 5 6 2 4 4v2h-2l0 4 2 2 1-1 6-1 1-4h3l2 2h9l2 3 3 3h4l3-3h7l3-3-7-8-1-3 7-4 4-2 1-5 4-3-1-7-3-4-1-11-4-9-4-2-3-5-2 4-3-4v-4l-4-6-12 1-7-2-18-2z" />
                <path id="dep_87" d="M428 493l-3 3-10-1-1 0-6 1-5 4v4l-7 0-5 6-3 2 3 3-1 9-2 4 3 3 5 0 1 5 1 4-7 1-3 1 1 9-5 3-3 1-2 5-3 0-1 6 8 0 2 4-1 4 3 4 2-1 3-3 11 1 2 7 8 1 2 3-5 2 2 2 8 1 0 2 2-4 5 1 5-6 2 1 3-4 7 0 2-2h4l3-5 4-1 3-4 4 1h2l2-3-2-2 0-4h2v-2l-4-4-6-2 1-5h-1l-2 3-7 1-3-1v-3l4-4-2-4-7 3 1-15-3-3-3-8-5-1-1-5 4-8v-6l0 1-6-5z" />
                <path id="dep_86" d="M334 409l-7 8-2 3 1 8 3 0 0 4 2 6 2 5-3 2 1 2-1 3v1l3 3v2l-2 3-4 6 4 2 2 3-2 4 0 2-3 4v3l2 0v8l3 2-2 3 1 2 3 4 2-3v-1l3-2 2 2v5l-2 3-2 5 2 4 6 2-1 3-5 1 4 6 7-1 5-1 6 3 2-2-1-5 3-2 3 4 2 3 7-3 3-3h6l3 2 1-7-3-3 3-2 5-6 7 0v-5l5-3 9-2 1-5-4-2-2-8-6 0-3-4-7-5 1-5v-7l-6-6-1-5-6-7-3-8-2-1-3-4-3 2 1 3-9 3h-11l0-5v-7l-9-2v-4l-6-2-2-5h-3z" />
                <path id="dep_16" d="M366 519l-3 2 1 5-2 2-6-3-5 1-7 1-4-6h-2l-6 4-5 1v2l-3 4 1 1-4 3-2 11-1 7-3 1-4 0-1-2h-4l-2 2h-6l-4 2 3 2 1 8 1 0-2 3 3 2 4 4 2 4 3 3-1 4-1 2 2 2v3l-5 3 2 2 3 1v1l-4 1 0 2 3 1 7-1 4 4 2 3 7 5 2-2 7 1 3-3 7-7 0-12 17-12 0-9 6 0 3-6h2l1-6 3 0 2-5 3-1 5-3-1-9 3-1 7-1-1-4-1-5-5 0-3-3 2-4v-3l-3-1h-6l-3 3-7 3-2-3-3-4z" />
                <path id="dep_79" d="M321 416l-10 1-9 1-10 1v5l-5 3-11-2-7 3 3 5v4l9 8-2 4 6 7-3 3 4 6 1 10-2 3 2 4-2 5 0 3 3-3 3 4-5 3-1 2-5 1-4 2-1 0 1 6 4 4v2l5 5 8 0 5 7 8-1 7 4 5 3 1 4 3 3 3-2-1-2 3-4v-2l5-1 6-4 7-1 1-3-6-2-2-4 2-5 2-3v-6l-2-1-3 1v2l-2 3-3-4-1-2 2-3-3-2v-8l-2 0v-3l3-4 0-2 2-4-2-3-4-2 4-6 2-3v-2l-3-3v-1l1-3-1-2 3-2-2-5-2-6 0-4-3 0-1-8 0 1-3-2-1-3z" />
                <path id="dep_22" d="M114 220l-3 3-8 1-2 2-6-4-7 5 2 4-5 7-2 9 5 1-1 4 3 2-2 3-3 1 1 4 4 1-4 1v5l3 3 0 11-1 2 1 5 6 1 0 3 4 1 3-2 2 2 7 2 5-3 2-3 4 0 6 5 5-1 4 4h2l2 3h5l1-2 2 4 4 1 6-3v-4l4-1h3l3 5 7 1 4-4 4-9 5-2 2-3 3 2 6-1 2-16 1-7-1-4-3-1-2-11-3 3-7-1 0 4-5 1 0-5-4-1-2 2v-7l-4 4-7-2-2 5-13 7v4h-3v-7l-8-4 1-6-7-5v-6l-5-1 0-6-4-1 1-4h-8l-1 4-2-5z" />
                <path id="dep_85" d="M241 417l-2 3h-6l3 3-2 6-6 2-2-2 1-6-1-3h-4l-2 2 1 9 3 4-3 3-5-1-7-2-2-6-5 0-6-3-2-4-7-4-10 14-1 9 11 10 0 4h3l7 20 7 4 8 7h8l3 7h8l4 6 8 4 0-6 2 2 11-6 5-1 2 6 7-3 6 4 4-2 5-1 1-2 5-3-3-4-3 3 0-3 2-5-2-4 2-3-1-10-4-6 3-3-6-7 2-4-9-8v-4l-3-5-5-4h-9l-3-2-4-1-5-4-2 0z" />
                <path id="dep_50" d="M206 136l-1 3 7 7v7l-3 4 2 2 1 0 0 7 2 6 8 9 2 9 2 2v13l4 9v10l-4 9 5 13 8 2 0 4-3 2h-7l1 4 2 7 6 5 3 1 3-4 3 0 4-5 4 3h4l3 1v1l6 1 4-3 5 2 6-5 2-7 0-3 1-3-4-4-9-6-7 0-7-9 6-2 2-5-3-2 3-3 2 2 5-3 3-4 1-5-2-4 2-2-3-4 3-4-3-3-2 4-5-3-7-6 0-3 2-3 0-3-4 0 0-8-10-11 3-8h4l-3-9-16-1-8 6-9-6-14-4z" />
                <path id="dep_56" d="M89 289l-6 3h-4l-5 3 0 3 3 7 1 5 10 2 4 4 2-3 3 4-2 2 0 5h-3l-2 4h-4l-2 7 4 6 6 2 2-4-1 4 5 2 7 7 2 4-1 5-1 4 5 4 2-3-2-3v-6l4 1 2-5 1 3 4 4 3-4-3-5 4 6 5-1-1-3 5 2 4 4-2 3-5-2-5-2-3 3 4 2 3 5 20-2 5 1-2 2 0 3 0 1 2 0 3-3 2 2h6l7-4 10-3 1-11 2-1-4-7 3-3-1-1-1-2 3-1 3-4-1-3h-3l-1-4 2-3-3-6-4-2h-5l-2-1v-2l3-2 1-6-1-4-1 1-7 0-3-6h-3l-4 1v4l-6 4-4-2-2-4-2 2h-4l-2-3h-2l-4-4-5 1-6-5-5 1-1 3-6 3-7-3-1-2-3 2-4 0 0-3-6-2 0-1z" />
                <path id="dep_29" d="M61 231l-5 4-4-2-8 1-1 4-5 1-1-4-8 1v3l-6 0-2-2-3 2-1 4-9 0-6 6 5 4-6 4 2 4-2 7 6 1 2-2 1 1 14-1 9-7-8 8 1 3 7-3-1 5 7 0 0 3-8-1-7-2-9-3-5 5 7 3-1 9 2-1 4-6 8 4 3 1 2 5-2 4-5 0h-4l-8 1-12 1-2 3 3 2 4 0 4 3 4-1 8 9 2 9-3 5 8 2 8 0 2-4-4-4 4 1 3 0 6 3 3 0v-7l2 7 5 7 10 1 0-2 2 3 7 1h4l1 1 1-7h4l3-4h2l1-5 1-2-3-3-2 2-4-4-9-1-2-6-3-7 0-2 5-4h4l6-3-1-4 1-2 0-11-3-3v-5l4-1-4-1-1-4 3-1 2-3-3-2 1-4-5-1 2-9-6-4-10 1v7h-3l0-3-5 0 0-8z" />
                <path id="dep_35" d="M200 244l-4 3 3 12 3 1 1 3-1 7-2 16-6 1-3-2-2 3-5 2-4 9-3 3 1 3-1 6-3 3v2l2 1h5l5 2 3 6-3 3 1 4h4l0 4-3 3-3 2 2 1 0 2-3 2 4 7 7-3 22-2 2-4 3-3 8-1 1-4 5 0 3 5 8 2 1-3 2-7 5-11 2-2 6 1v-10l-2-2v-11l-1-3v-6l3-4v-7l-2-1 1-11-3-1h-4l-4-3-4 5-3 0-3 4-3 0-6-6-2-7-1-4h-18l-7-4 5-6-9 0z" />
                <path id="dep_44" d="M231 336l-1 4-8 1-3 4-1 3-23 2-9 5-1 10-10 4-7 3h-5l-3-2-3 3-1 0 1 1-6 7 1 1 2 3-4 5 4 2 7 2 0-3 4 5h7l5-5h6l-7 3 1 4 1 3-4 4h-4l1 5 7-1 10 9-1 0 7 4 2 4 6 3 5 0 2 6 7 2 5 1 3-3-3-4-1-9 2-2h4l1 3-1 6 2 2 6-2 2-6-3-3h6l2-3 2 0 5 4 3 1v-4l-2-4h-3l-1 0-2 0 2-2v-3l3-1 1-4-1-1 0-5h-4l-4-5v-3l4-3 8-1 11 0 4-2-1-7-6-5-6 0-2-1 0-6 4-4-3-4-3-6-3-3v-4l-1-1-7-2-3-4-5-1z" />
                <path id="dep_49" d="M248 341l-1 2-1 0 0 1v4l4 2 3 7 3 4-4 4 0 6 2 1 6-1 6 5 1 8-4 2-11 0-8 1-4 2v4l4 5h4l0 5 2 1-2 4-3 1v3l-2 2 2 0 1 0h3l3 4v4l3 2h9l5 4 7-3 11 2 5-3v-5l10-1 9-1 10-1 1 3 3 2 2-4 7-8h3l4-15 5-6 0-8 4-5v-2l-2-2 1-3-5-1-15-10-14-4-5 0v-4l-4-2h-3l-6-3-5 5-9 0-4-2-11-4-2 3-6-3h-6l-6-2z" />
                <path id="dep_72" d="M359 273l-9 0-10 9-5 0-7 2-2 4-1 7 1 5-6 5-1 3 1 3-2 3 1 2-6 0-1 3 3 6-1 2-2 2-5 1-1 1 2 2v11l-1 3 3 2v4l5 0 14 4 15 10 5 1 3-4 7 5h4l-2-8 4 3 2-3 11-3-2-5 3-3 5-2 5-6v-7h4l1-5 1-8-4-3 3-5 4-6-5-3-5-1-5-7h-1l-1 3 0-2h-7l-4-6-6-2-2-13-3-4z" />
                <path id="dep_53" d="M322 263l-3 0-2 4-5 2-10-1-10 5-3-2-6 4-4-3-2-5-6-2-3 3-6-1-1 10 2 1v7l-3 4v6l1 3v11l2 2v10l-6-1-2 2-5 11-2 7-1 1 7 1h5l6 4 3-3 10 4 5 2 9 0 4-5 7 3h4l1-3v-11l-2-2 1-2h5l2-2 1-2-3-6 1-3 6 0-1-2 2-4-1-2 1-3 6-5-1-4 1-8 2-4 7-2h-1l-2-6-5-2-1-8-4-3z" />
                <path id="dep_14" d="M360 173l-9 2-13 8-16 6-12-7-30-4-7-4-10 3 0 4-2 2 0 3 7 7 5 2 2-4 3 3-3 4 3 4-2 2 2 4-1 5-3 5-5 2-2-1-3 2 3 3-2 4-6 2 7 9 7 0 5 4 7-3 6-6 7 2 7-4 4-2 4 5 7-2 6 4 7-3 7-5 4-5 3 0 1 3 2 0 1-3 7-1 2 1 7-1 2-4-1-3-4-1 0-3 3-2 1-4-2-8-5-7 4-2v-1l-4-1-1-14z" />
                <path id="dep_61" d="M367 223l-7 1-2-1-7 1-1 3-2 0-1-3-3 0-4 5-7 5-7 3-6-4-7 2-4-5-4 2-7 4-7-2-6 6-7 3 4 2 4 4-1 3 0 3-2 7-6 6 2 4 4 3 6-4 3 2 10-5 10 1 5-2 2-4h3l4 3 1 8 5 2 2 6 6 0 10-9 9 0 3 4 2 13 6 2 4 6h7l0 2 1-4h1l6 8 3 1v-9l-2-3-1-3 6-3 5-1 4-5-1-13-8-7 0-6-6-4 2-4-2-5-5-2-3-3-2-5-10-1-3-4 1-4z" />
                <path id="dep_28" d="M442 225l-2 2v6l-8 4v5l-2 2h-9l-4-1-13 7h-5l-5 4 1 1 0 6 8 7 0 13-3 5-6 1-5 3 1 3 2 3v9h1l5 3-2 3 4 2 5-1h4v1l-4 2 3 1h5l2 5 3 1 2 5 8 3 5-1 4-4 4 1 1-2v-3l2-1 3 2 3-2v-2l2-2 3 1 2 2 4-2h5l3-3 2-7 3 0-1-7 3-3-1-2 1-1h-1l-1-9-1-2-1-4-7-2-3-4-1-7-5-1 0-4-6-4-2-6 2-4-2-3v-4l1-4-3-3-1-4-3-4z" />
                <path id="dep_89" d="M573 283l-3 3-14-1-6 3-3 6 3 3-4 5-4 4 7 6 2 6 4 5v6l-9 8 3 4 0 5-6 4h-7l1 4 5 6 1 6 1 4-2 1 5 1h3l2-3h2l3 2-1 3 3 2h3l5 3 2-1 2 2 2-1 3-2 4 1 2-1v-6l1 0 1 3 4 3v4h6l8 7 5 1 0-3 2-3 1 3-1 2 1 2 3-1h3l0 5 3 2 2-1 6-4 0-1-4-2v-4l4-1 1-2-1-2v-4l3-4 4-9 1-4 3-1 0-1-2-1v-3l5-3 1-5-2-3h-3l-1-1v-4l4-3 0-3-1-2-2 4-2-1-2-4-8 4-14-1-2-4-4-5 0-7-6-7-4 3-6-5 1-10-9-10h-5l-2-2z" />
                <path id="dep_70" d="M767 317l-6 1-2 3-3 3-3-3-1 1 1 2-4 2 1 3-3 2v5h-6l0 2-5 1 0 5 4 0-2 2-1 8h-3l-6 1-6-1-5 1v4l4 1 3 6 1 3-5 5-2 1-2 2 4 1 1 6 3 0 1 8 1 1v1l3 1 3 3h5l2-2 3 0 3 0 7-6h2l3-2 7 1 6-5 4-1 2-4 3-1 3-5 5-4 5-1 3 3 7-1v-4l3-1 2-3h4l3-3 0-5v-4l-1-6v-4l3-2 3-2-12-7-3-3-3-2-3 1-1 2-2 2h-2l-6-6h-7l-4 2-2 1-5-4 0-4-2-1z" />
                <path id="dep_76" d="M432 106l-2 3-16 12-27 7-18 6-15 8-9 13-1 10 7 6 10 2-1 0 8-1 4-4 3-1 4 6 5 0 2 4 8-1 9 6-5 2 4 3h2l3 5h4l1-3-3-2 9-3 9-1 2-6 5-4 8-1 10 5 5 1 1-3 3-5 1-2h-3v-6l-2-4 1-7 1-4h-2l1-4 4-4-4-6-1-7-16-15-2-4-4 0-3-1z" />
                <path id="dep_27" d="M375 167l-3 1-4 4-8 1 1 14 4 1v1l-4 2 5 7 2 8-1 4-3 2 0 3 4 1 1 3-3 9 3 3 10 1 2 5 3 3 5 2 2 5-2 4 5 3 5-4h5l13-7 4 2h9l2-3v-5l8-4v-6l1-2v-1l2-2-3-1v-2l-2-3 2-2 10-3 2-4 2-8 3-4 1-4 3 2 2-1-1-3-1-8-4-3-5-1-10-5-8 1-5 3-2 7-9 1-9 3 3 2-1 3h-4l-3-5h-2l-4-3 5-2-9-6-8 1-2-4-5 0-4-6z" />
                <path id="dep_37" d="M377 356l1 2-11 3-2 3-4-3 2 8h-4l-7-5-4 7 2 2v2l-4 5 1 8-6 7-4 14 2 6 6 2v4l9 2v7l0 5h10l10-3-1-4 3-1 3 4 2 1 3 8 6 7 1 5 5 6 3-1 4-3 3-15 2-5 1-7 6-2 4 1 2 2 3-4 3-3v-3l3 0 1-3-3-4 1-2-2-2-6-8h-7l-2-3v-12l-3-8 0-9-4-1-4-3h-1l-4 3-2-2-1-3 3-2 0-1-1-1-18-1z" />
                <path id="dep_45" d="M491 289l-5 4-10 1-1 1 1 2-3 3 1 7-3 0-2 7-3 3h-5l-4 2-2-2-3-1-2 2v3l-3 1-3-2-2 1v3l-1 2 1 0h3l0 2-2 4v2h2l2 2 0 2-4 4 2 5v2l4 3 4 0 3 3 1 4 3 4 4-1 2-3 5 0 2 2h3l2-2 13 0 3 5 4 1 3 3 4 0 1-2h2l3 4 6 0 2 2 4 6 2 1h2l0-5 1 0 2 0 2 3 2 1 4-1-1-1 0-4 7-2-1-4-1-6-5-6-1-4h8l5-4 0-5-3-4 9-8v-6l-4-5-2-6-7-6-9 5 0-3-4 0-1 3-4 0-10 0-4 2-3-2 6-4-1-7-4-2-4-5-9-1-4-3z" />
                <path id="dep_36" d="M456 401l-3 1-4 0-6 2-1 3-1-1-6 0-3 2-3 1-1 2 3 4-1 3h-3v3l-3 3-3 4-2-2-4-1-6 2-1 7-2 5-3 15-4 3-3 1 1 0v7l-1 5 7 5 3 4 6 0 2 8 4 2-1 6-3 0h1l10 1 3-3 6 5 7-8 3 2 4 0 2 1 6 0 2-6 18 3 7 1 3 0 1-3 3-4 0-3-3-4 1-1 0-5 2-2 0-1-3-2-1-4-5-3v-3l4-2v-2l-4-3-1-2 3-1-1-2 5-4-1-1h-3l-2-2v-2l2-3v-2l-4-6 0-5-2-1-5 0-4 1-5 0-2-2-1-2 4-3 0-4-5-4-3-3z" />
                <path id="dep_41" d="M396 311l-2 3-3 5 4 3-1 8-1 5h-4v7l-5 6-5 2-3 3 1 3 18 1 1 1 0 1-3 2 1 3 2 2 4-3h1l4 3 4 1 0 9 3 7v13l2 3h7l6 9 1 1 1 0 3-1 3-2 6 0 1 1 1-3 6-2 4 0 3-1 3 3 5 4 5-1 0-4 2-3h2l2 2 7-1 5-2-1-2-1-2 0-3 3-6 5-2v-4l1-2-3-1-2-4-4-1-1-2 5-4 5-3-3-4-13 0-2 2h-3l-2-2-5 0-2 3-4 1-3-4-1-4-3-3-4 0-4-3v-2l-2-5 4-4 0-2-2-2h-2v-2l2-3 0-3h-3l-5-1-4 4-5 1-8-2-2-6-3-1-2-4h-5l-3-2 4-2 0-1h-4l-5 1-4-2z" />
                <path id="dep_18" d="M494 363l-5 3-5 4v2l5 1 2 4 3 1-1 2v4l-5 2-3 6 0 3 1 2 1 2-5 2-7 1-2-2h-2l-2 3v4l-5 1 0 4-4 3 1 2 2 2 5 0 4-1 5 0 2 2 0 4 4 6v2l-2 3v2l2 2h3l1 1-5 4 1 2-3 1 1 2 4 3v2l-4 2v3l5 3 1 4 3 2 0 1-2 2 0 5-1 1 3 4 0 3-3 4v3l8-1 2-4 4-5 9-2 5 1 5-4 0-2-2-2v-6l10-9 3 4 3-4 3 0 5-6 9 0v2l3-9-2-3 0-5 1-9-4-4 1-9-4-7 0-5-6-5-2-5 4-4v-7l-4-4-4 1-1-1-3-3h-2l-1 0 0 5-2 0-2-1-4-6-2-2-6 0-3-4h-2l-1 2-4 0-3-3-4-1v-1z" />
                <path id="dep_21" d="M656 320l0 5-5 2-12 0 1 3 0 3-4 2v5l1 1h3l2 2-1 6-5 3v3l2 1 0 1-3 1-1 4-4 8-3 5v4l1 2-1 2-4 1 0 4 4 2 1 3-1 4 0 3 2 3 5 1 2 4v1l-2 1v3l1 0 7 8 7-1 6 5 5 4 0 4 5 1 4 3 11-3 8-3 3 0 1-2h4l3 2 4-1 4-3 3 1v-1l3-1-1-2-1-2 2-3 6-3v-3l3-3 2-2-1-3 1-4 1-6h1l0-2-1-1-1-8-3 0-1-5-4-2 2-2 2-1 5-5-1-3-3-6-4-1-1 4-8 2-1-2-6-8-3 2-4 0-2-3-6 1 0-7-3-2 4-5-8-11-6-7-6-3h-11z" />
                <path id="dep_58" d="M552 369l-2 3h-3l-5-1-5 1 0 4 5 5v7l-4 4 2 5 6 5 0 5 4 7-1 9 4 4-1 9 0 5 2 3-3 9 0 3 6 3 5 4 3-2 4-2 1 3h5l2-3 3 2 1 5 3-1 7-9 3 2 1 1 5-3 3 0 2 4 3 0 3-3h3l3-3 2-1 1-2 5 1 1-2-3-2v-2l4-2v-2l-4-2 0-4 0-4-2-1 2-3 1-1 2-3-2-1-2-3 3-4 4-2h5v-4l2-1v-1l-2-4-6-1-1-3 0-3 1-4-1-2-6 4-2 1-3-2 0-5h-3l-3 1-1-2 2-2-2-3-2 3 0 3h-5l-8-8-6 0v-4l-4-3-1-3-1 0v6l-2 1-4-1-3 2-2 0-2-1-2 1-5-3h-3l-3-2 1-3-3-2h-2z" />
                <path id="dep_71" d="M634 413v1h-5l-4 2-3 4 2 3 2 1-1 3-2 1-2 3 2 2 0 3 0 4 4 2v2l-4 2v2l3 2-1 2-5-1-1 2-2 1-3 3h-3l-3 3-3 0-2-4-3 0-5 3 7 13v5l1 2h7l2 3h5l3 4 0 14-8 6 1 0 1 6 5 1 1 3h3l4-3 12 2 2 2 3-3h4l2-11 1-1h4l4 3 4-3 2 3 3-4 4 0 2 6 1 7 3 0 2-5 7-26 2-5 4 0 4 3 3-1 4-2 3 0 2 5 2 1 10-1 4-3-2-2-4-2-1-5 4-3 1-6-3-5-2-3 1-1v-4l-3-2 0-3 8-1 1-3h-3l-2-2h-4l-3-6-3 0 0-4-3-1-4 3-4 1-3-1-4-1-1 2-3 0-8 3-11 3-4-3-5-1 0-4-5-4-6-5-7 1-7-8h-1z" />
                <path id="dep_39" d="M726 394v1h-1l-1 6-1 4 1 3-2 2-3 3v3l-6 3-2 3 1 2 1 2-3 1 0 5 3 0 3 6h4l2 2h3l-1 3-8 1 0 3 3 2v4l-1 1 2 3 3 5-1 6-4 3 1 5 4 2 2 2-4 3-10 1 5 2 7 10 5 2v5l5-1 7-7 6 2v5h10l15-17 0-8 6-6-4-2 1-2-5 0 0-3 3-3-1-2-2-4 7-2 2-4 1-4-5-5-4-1-8-2v-8l-1-5-6 1-10-4 1-3 3-6 0-3-2-4-5-3 0-4v-2h-4l-1 2h-5l-3-3-3-1z" />
                <path id="dep_51" d="M608 176l-4 2 1 4h-8l-7 5v9l5 3 2 4-9 0 0 4 3 2-2 2-3 2 1 2h4l2 3-3 2-3 7-5 3-2 4-2 2 1 2-3 2-1 5 3 2 1 5-2 3 2 3 5 0v1l1 0 7 7 8-2 11-7h6l6-4 7-4 6 0 1 7 6 10h8l10-2 7 3 8-6 1-9 8-1 0-6-7-5 0-3 2-5-2-2 2-5 4-2 3-9-6 1 4-4-3-8-2-5 3-3-2-1-1-2-3-3-4 4h-1l-2-2-8 0-2 2h-2l-3-5h-4l-2 1-4 0-6-5-4-1-2-2-7-5h-9v3l-2 1-7-4z" />
                <path id="dep_60" d="M460 141l-2 2-1 4h2l-1 4-1 7 2 4v6h3l-1 2-3 5-1 3 4 3 1 8 1 3-2 1-3-2-1 4 2 3 2 4 10 1 7-1 4-4 6 4 3 2 4-1 4-2 8 4 8 5 2 3 4-3 4 2 2 2 4-1 2-3 5 3 6-2 3 1 4-3 2-1 1 0 1-5-3-3-4-3-2 3-1 1-1-6 4-1-1-5-4 0 2-4 6-1 2-9 4-2-5-3 2-3 0-11-1-9-8 1-5-1-9 3-9 8-6-3-7 0-5-5-9-3-13 1-3-2h-6l-5 1-2-1v-4l-1-1h-5z" />
                <path id="dep_62" d="M483 9l-20 3-16 13v50l5 1 2 4 4-1 3-3 3 1 7 5 2-1 2 4 7 3v4l5 2 4-2 9-1 2 2 5-2 2 4-6 3v5l2 2 2 0 1-3 3-2 3 2 8 3h3v-4l5 3 0 3-2 3 4-2 3-1 2 2v3l5-3h9l2-4-1-2-3 0h-4l-2-1 4-2 3 0 3 0 1-6 2-2 0-3-4-3-5 0-1-1 3-2 1-2-3-2-3-4 0-2 5-3 1-2-4-2-2-4-6-1-7-2 0-7 4-3-2-4h-3l-3 4-11-1-9-2-5-5v-5l4-1-4-3-8 0-4-12-8-12z" />
                <path id="dep_59" d="M513 0l-11 6-18 2h-2l8 12 4 12 8 0 4 3-4 1v5l5 5 9 2 11 1 3-4h3l2 4-4 3 0 7 7 2 6 0 2 5 4 2-1 2-5 2 0 3 3 4 3 2-1 2-3 2 1 1 5 0 4 3 0 3-2 2-1 6-3 0-3 0-4 2 2 0h4l3 1 1 2-2 4 3 3 3 1 3-2h4l1 2 1 0 5-3 4 3 6-4h2l3 2 6-4 2 1 2 2 9 0 0 3 4-3h2l2 4 7 2 2-1h-1l0-4 7-4-1-7-7-2 2-1v-5l5-4-1-3-12-9-20 1-2 4h-3l1-13-6-7-5 1-2-3-7 3-3-3-5 0-1-5-1-14-3-2 0-2h-2l-1-4-5 0-9 3-4 5h-5l-2-3-1-4-4-4h-5l-2-4v-6l2-4-1-6-5-9z" />
                <path id="dep_02" d="M592 107l-6 5-3-3h-2l-6 4-4-3-5 3-1 0-1-2h-4l-3 2 0 5-4 5v5l-3 3 0 5 2 7 2 13 0 11-2 3 5 3-4 2-2 9-6 1-2 4 4 0 1 5-4 1 1 6 1-1 2-3 4 3 3 3-1 5 3 3 1 8 10 9 3 1 2 4 6 2 1-1 2-4 5-3 3-7 3-2-2-3h-4l-1-2 3-2 2-2-3-2 0-4 9 0-2-4-5-3v-9l7-6h8l-1-3 4-2 7 4 2-1 0-12 1-4 1-5-4-3 1-3 6-1v-5l6-3 1-4-2-3 1-6 3-2-3-7 1-6h-7l-2 1-7-2-2-4h-2l-4 4-1-4-8 0-2-2-2-1z" />
                <path id="dep_80" d="M447 75l-1 12 8 7v4l-10-6-12 14 3 1 4 0 2 4 16 15 1 7 4 6-2 2h5l1 1v4l2 1 5-1h6l3 2 13-1 9 3 5 5 7 0 6 3 9-8 9-3 5 1 8-1-1-4-2-7 0-4 3-4v-5l4-5 0-5-3-1-4-3h-8l-6 3v-3l-1-2-3 1-4 2 2-3 0-3-5-3v4h-3l-8-3-3-2-3 2-1 3-2 0-2-2v-5l6-4-2-3-5 2-2-2-9 1-4 2-5-2v-4l-7-3-2-4-2 1-7-5-3-1-3 3-4 1-2-4-5-1z" />
                <path id="dep_08" d="M664 96l-3 5-4 3v8l-4 3-8 2-4 2-5-4h-7l-1 7 3 6-3 3 0 5 1 3-1 4-6 3v5l-6 1-1 3 4 3-1 4-1 5 0 9h9l7 5 2 2 4 1 6 5 4 0 2-1h4l3 5h2l2-3 8 1 2 2h1l4-4 3 3 0-2 5-2 2-2-2-4 0-2 4-3 1-8-4-5 1-3 4-6 1 1h6l2 2 3-2 3-4-3 0-1-7-3-3-10-1-2-4-3-3-12-1-1-8 2-2v-3l-6-4 1-4 2-3-3-2 4-4v-6l-1-2h-6z" />
                <path id="dep_10" d="M630 249l-7 4-6 4h-6l-11 7-8 2-7-7-1 0v1l-5 3 0 4-3 3-2 8 0 5 2 2h4l10 10-2 10 7 5 4-3 5 7 1 7 4 5 2 4 14 1 8-4 2 4 2 0 2-4 12 0 5-2 0-5h11l1 1-1-5-3-2 4-3 6-1 3-3-1-13-1-8-7-2-6-9 0-6 2-4-3-1-10 2h-8l-6-10-1-7-6 0z" />
                <path id="dep_52" d="M685 251l-8 1-1 9-8 6-4-2-2 4 0 6 6 9 7 2 1 8 1 13-3 3-6 1-4 3 3 2 1 5 5 2 6 7 8 11-4 5 3 2 0 7 6-1 2 3 4 0 3-1 6 7 1 2 8-2 1-4v-4l5-1 6 1 6-1h3l1-8 2-2-4 0 0-5 5-1 0-2h6v-5l3-2-1-3 1 0-3-3-4 1v-7l-10-5 2-10 4-2-1-3-5-1-1-5h-5l-5-6-5-1-3-4 3-3-7-8-4-1-8-4-5-5-7-1-1-7z" />
                <path id="dep_67" d="M873 200l-7 2-3 5v6l-3 2h-2l-5-3-4 3h-4l-4-4-7-1-3-2-2-5-3 3-2 9-5 1v5l5 2 4 2-2 4 3 2 6-4 10 5-4 8 0 3 3 3-2 7-7 8-4-1 3 3-2 6 2 10 6 2 0 1 5 0 3 3 3 4 7 0 3 9 6 2v-1l9-18-1-11 5-14 1-12 9-7v-4l4-5h2l4-3-1-6 3-9 5-1-5-4-9-1-8-4-5 3-3-3h-4z" />
                <path id="dep_54" d="M727 156l-4 4-7 0-2 2v5l2 3-1 2-1 3 1 1 2-1 1-3 4-1 6-1 3 2 1 3 1 3v3l2 2v2l-2 2 0 5 2 2 0 3 0 4 2 2 3 2-1 2 4 4-3 4 0 2 4 2v2h-4l-2 2 0 2 3 3-3 7-2 6 1 4v6l1 3h2l2 2h-4l-2 2v2l3 3v5l4-1 5 0 0 6 2 0-2 2 0 2 3 1 3 3 12-1 2-4h6l2-2 3 2 3-1 5 0 4-1 4-3 2 2 0-5 3-1 1 5 5 0 4 1 2 0 6-2 3-3 3-3 5-2 4-1-2-2 4 0 1 0-5-2-6-4-5-4h-6l-7-4-5 0v-2l-8-4-10-4h-4l-2-5-7-9h-7l-3-4h-6l1-6-8-4 1-5h4v-4l1-3-3-3 3-5-2-5-2-2-5-10 2-3 0-5h-5l-7-7h-8z" />
                <path id="dep_77" d="M553 208l-2 1-4 3-3-1-6 2-5-3-2 3-4 0-2-1-4-2-4 3 0-1-2 10 3 13v8l-3 8 0 4-3 3 2 10-1 2-2 9 3 3-8 6v7l2 3 4 2 1 7-6 4 3 3 4-3 10 0 4 0 1-3 4 0 0 3 9-5 4-4 4-5-3-3 3-6 6-3 14 1 3-3 1 0 0-6 2-7 3-3 0-4 5-3v-2l-6 0-1-3 2-3-1-5-3-2 1-5 3-2-1-2 1-1-6-2-2-4-3-1-10-9-1-8-4-3z" />
                <path id="dep_68" d="M845 282l-5 0-4 8-4 8 1 6-4 8-6 5 0 14-4 4v1l1 2 6 1 6 5 2 2-1 4-2 4 1 4 5-1 1 4 2 8 4-1-1 4 3 2 13 0 7-5 1-8 3-5-5-5-2-6 3-4v-9l2-4v-8l3-4-4-5v-11l-5-2-4-9-7 0-3-4-3-3z" />
                <path id="dep_55" d="M706 152l-3 5-3 2-3-3h-5l-1-1-4 7-1 2 4 6-1 7-4 3 0 2 2 4-2 2-5 2 1 4 2 1-3 3 2 5 3 8-4 4 6-1-3 9-4 2-2 6 2 1-2 5 0 3 7 5 1 13 7 1 5 5 8 4 4 1 7 8-1 1 7-1v-3l7-1v-3h2v2l5-1 3-3h-1v-5l-4-3v-2l3-2h4l-2-2h-1l-2-3v-6l-1-4 2-6 3-7-3-3 0-2 2-2h4v-2l-4-2 0-2 3-4-4-4 1-2-3-2-2-2 0-4 0-3-2-2 0-5 2-2v-2l-2-1v-4l-1-3-1-3-3-2-6 2-4 0-2 3-1 2-1-2 1-2 1-3-2-3 0-4h-2l-1-7-3-3-2 0z" />
                <path id="dep_57" d="M766 160l-5 0-4 4-1 1h-6l-2-2h-1l0 6-2 2 5 10 2 2 2 5-3 5 3 3-1 3v4h-4l0 5 7 4 0 6h5l3 4h7l7 9 2 5h5l9 4 8 4v2l5 0 7 4h6l6 4 5 4 5 2 6-7 2-7-2-3-1-3 5-8-10-5-6 4-4-2 2-4-4-2-5-2v-5l5-1 2-9 3-3 2 5 4 2 7 1 3 4h4l4-3 5 3h2l3-2v-6l3-5-3-3-7-5-3-4-8 1-5 5-13 0-3-2a14 14 0 0 0-4-5h-1c-2 0-5-2-5-2l-5 2 0 4-6 1-4-7-2-1v-5l-5-2-1-9-3-3-8-4h-3l-1 1h-4l-5-4z" />
                <path id="dep_88" d="M833 262l-4 1-5 2-3 4-3 2-6 2-2 0-4-1-5 0-1-5-3 1 0 5-2-2-4 3-4 1-5 0-3 1-3-2-2 2h-6l-2 4-12 1-2-3-4-1 0-2 2-2-2 0 0-6-6 0-2 1-3 3-5 2v-3h-2v3l-7 1v3l-7 1-2 3 3 3 5 1 5 6h5l1 5 5 1 1 3-4 2-2 10 10 5v7l4-1 3 3 3-2-1-2 1-1 3 3 4-3 1-3 6-1 2 1 0 4 5 4 2-1 4-2h7l6 6h2l2-2 1-2 3-1 3 2 3 3 12 6 4-4 0-14 6-5 4-8-1-6 4-8 4-9-7-2-1-10 2-6-1-1z" />
                <path id="dep_91" d="M492 244l-3 2-4 1-1 4-5 3-1 4 3 4-4 5h-5l2 3-2 3-1 5 2 1 0 4 1 2 1 9 11-1 5-4 4 3 9 1 2 2v-7l8-6-3-3 2-9 1-2-2-10 3-3 0-4-4-2h-7l-3-2-3 1-6-3z" />
                <path id="dep_78" d="M450 211l-10 3-2 2 2 3v2l3 1-2 2 0 2 1-1 3 4 1 4 3 3-1 4v4l2 3-2 4 2 6 6 4 0 4 5 0 1 8 3 4 6 1 1-5 2-3-2-3h5l4-5-3-4 1-4 5-3 1-4 4-1 3-2 0 1v-1l-3-3-2-6 3-7-1-5-7-4-8 0-9-6-6 2-9-4z" />
                <path id="dep_95" d="M457 195l-3 4-2 8-2 4 9 4 6-2 9 6 8 0 7 4 1 5h1l6-3 10-1 5-2 4-3 1-7-2-2-8-5-8-4-4 2-4 1-3-2-6-4-4 4-7 1-10-1-2-4-2-3z" />
                <path id="dep_93" d="M516 219l-4 3-5 2-10 1 1 1h1l0 1 0 2h-1l0 2h5l1 2 1 4 1-1 2-1h2l3 2 2 2 1 1 2 0v-5l-3-13 1-3z" />
                <path id="dep_75" d="M503 231h-5l-2 1-1 1h-1l-2 2v1l0 1 3 1 4 2h2l1 0 2-1 4 1 0-2v-1l-3 0 1 1-1 0h-1l1-1-1-4-1-2z" />
                <path id="dep_92" d="M497 225l-6 3h-1l-3 7 2 6 3 4 5 4 2-1-1-2 1-3-1-1 1-2-4-2-3-1 0-1v-1l2-2h1l1-1 2-1 0-2h1l0-2 0-1-1 0-1-1z" />
                <path id="dep_94" d="M508 235l-2 1-1 1-1 1h1l1 0v-1h2v1l0 2-4-1-2 1-1 0h-2l-1 2 1 1-1 3 1 2 1-1 4 2h7l4 2 3-8v-3l-2 0-1-1-2-2-3-2h-2z" />
                <path id="dep_25" d="M812 361l-1 1h-4l-2 3-3 1v4l-7 1-3-3-5 1-5 4-3 5-3 1-2 4-4 1-6 5h-7l-3 1h-2l-7 6h-3v2l0 4 5 3 2 3 0 4-3 6-1 3 10 4 6-1 1 6v7l8 2 4 1 5 5-1 4-2 4-7 2 2 4 1 2-3 3 0 3 5 0 22-21-1-17 8-4 6-3 5-4 0-8 5-2 12-13-2-5 4-1 4-6-2-3-9 2 0-1 8-10-22-10z" />
                <path id="dep_90" d="M819 336l-3 2-3 2v5l1 5v4l0 5-2 2 22 11 1-2 5-1-2-8-1-4-5 1-1-4 2-4 0-4-1-2-6-5-6-1-1-2z" />
            </g>
        </svg>
    );
};

export default CarteFrance;