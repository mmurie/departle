import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Home = () => {
    return (
        <div id="home" className="container">
            <h1 className="title">DEPARTLE</h1>
            <ul className="liste-boutons">
                <NavLink to="/classique" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton"}>
                    <li><FontAwesomeIcon icon={solid('city')} /> Mode classique</li>
                </NavLink>
                <NavLink to="/carte" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton"}>
                    <li><FontAwesomeIcon icon={solid('map-location-dot')} /> Mode carte</li>
                </NavLink>
                <NavLink to="/forme" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton"}>
                    <li><FontAwesomeIcon icon={solid('shapes')} /> Mode forme</li>
                </NavLink>
                <NavLink to="/stats" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton"}>
                    <li><FontAwesomeIcon icon={solid('chart-line')} /> Statistiques</li>
                </NavLink>
            </ul>

            <ToggleDarkMode></ToggleDarkMode>
        </div>
    )
};

export default Home;