import { useContext } from 'react';
import CarteFrance from '../components/CarteFrance';
import AutocompleteInput from '../components/AutocompleteInput';

const Home = () => {
    return (
        <div>
            <CarteFrance></CarteFrance>
            <AutocompleteInput></AutocompleteInput>
        </div>
    )
};

export default Home;