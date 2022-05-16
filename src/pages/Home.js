import { useContext } from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div id="home" class="container">
            <h1 class="title">DEPARTLE</h1>
            <ul class="liste-boutons">
                <NavLink to="/classique" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Mode classique</li>
                </NavLink>
            </ul>
        </div>
    )
};

export default Home;