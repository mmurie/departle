import { useContext, useState } from 'react';
import CarteFrance from '../components/CarteFrance';
import AutocompleteInput from '../components/autocompletion/AutocompleteInput';

const Home = () => {
    const [dept, setdept] = useState("");
    return (
        <div>
            <CarteFrance></CarteFrance>

            <div className="justify-content-center">
                <div className="search-bar-container">
                    <AutocompleteInput
                    data={deptsList}
                    onSelect={dept => setdept(dept)}
                    />
                </div>
            </div>
            
        </div>
    )
};

export default Home;