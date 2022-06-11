import React from "react";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import Stats from '../components/Stats';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export const statsColors = {
    "Classique": {
        borderColor: 'rgb(129, 230, 226)',
        backgroundColor: 'rgba(129, 230, 226, 0.5)'
    },
    "Carte": {
        borderColor: 'rgb(235, 167, 223)',
        backgroundColor: 'rgba(235, 167, 223, 0.5)'
    },
    "Forme": {
        borderColor: 'rgb(153, 252, 129)',
        backgroundColor: 'rgba(153, 252, 129, 0.5)'
    },
    "Global": {
        borderColor: 'rgb(230, 164, 129)',
        backgroundColor: 'rgba(230, 164, 129, 0.5)'
    }
};

const PageStats = () => {
    return (
        <div id="pageStats" className="container">
            <Stats></Stats>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton bouton-retour"}>
                <li><FontAwesomeIcon icon={solid('arrow-left')} /> Retour</li>
            </NavLink>

            <ToggleDarkMode></ToggleDarkMode>
        </div>
    )
};

export default PageStats;