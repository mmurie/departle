import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import ToggleDarkMode from '../components/ToggleDarkMode';


const Home = () => {
    return (
        <div id="home" className="container">
            <h1 className="title">DEPARTLE</h1>
            <ul className="liste-boutons">
                <NavLink to="/classique" className={(nav) => (nav.isActive ? "nav-active" : "") + " bouton"}>
                    <li>Mode classique</li>
                </NavLink>
            </ul>

            <ToggleDarkMode></ToggleDarkMode>
        </div>
    )
};

export default Home;