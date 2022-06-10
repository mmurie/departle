import React from "react";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import Stats from '../components/Stats';

export const statsColors = {
    "Classique": {
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    "Carte": {
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)'
    },
    "Forme": {
        borderColor: 'rgb(0, 255, 0)',
        backgroundColor: 'rgba(0, 255, 0, 0.5)'
    },
    "Global": {
        borderColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)'
    }
};

const PageStats = () => {
    return (
        <div id="pageStats" className="container">
            <Stats></Stats>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton bouton-retour"}>
                <li>Retour</li>
            </NavLink>
        </div>
    )
};

export default PageStats;