//import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Popup from '../components/Popup';

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
            <Popup content={
                <div>
                    <h2>DEPARTLE</h2>
                    <p>Departle est un petit jeu de géographie sur les départements français !<br></br>Il est notamment inspiré de <a href="https://worldle.teuteuf.fr/">Worldle</a>, <a href="https://globle-game.com/">Globle</a> et <a href="https://babelle.terrylaire.fr/">Babelle</a>.</p>

                    <h2>COMMENT JOUER ?</h2>
                    <p>Plusieurs modes de jeu sont disponibles :</p>
                    <h3>Mode Classique</h3>
                    <p>Un nom de commune est donné, le but est de retrouver le bon département en 6 essais. Le nombre de km d'écart et la direction vers le bon département sont donnés pour chaque essai.</p>
                    <h3>Mode Carte</h3>
                    <p>Cette fois-ci le but est de deviner le bon département aléatoire sur la carte. Pour chaque essai, plus le département proposé est proche, plus ce dernier est coloré avec une couleur chaude :</p>
                    <div className="colors">
                        <p><i>Proche</i></p>
                        <span className="color color-1"></span>
                        <span className="color color-2"></span>
                        <span className="color color-3"></span>
                        <span className="color color-4"></span>
                        <span className="color color-5"></span>
                        <span className="color color-6"></span>
                        <span className="color color-7"></span>
                        <span className="color color-8"></span>
                        <p><i>Loin</i></p>
                    </div>
                    <p>Pour un meilleur équillibrage, il y a jusqu'à 12 essais pour retrouver le département dans ce mode.</p>
                    <h3>Mode Forme</h3>
                    <p>Comme le mode classique, mais cette fois-ci une forme de département est donnée.</p>
                    <p className="end-message">Bonne chance !</p>
                </div>
            }></Popup>

            <ToggleDarkMode></ToggleDarkMode>
        </div>
    )
};

export default Home;