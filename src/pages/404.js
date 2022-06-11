import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleDarkMode from '../components/ToggleDarkMode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Page404 = () => {
    return (
        <div id="page404" className="container">
            <h1 className="title">Page not found !</h1>
            <ul className="liste-boutons">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton"}>
                    <li><FontAwesomeIcon icon={solid('home')} /> Retour à la page d'accueil</li>
                </NavLink>
            </ul>

            <ToggleDarkMode></ToggleDarkMode>
        </div>
    )
};

export default Page404;