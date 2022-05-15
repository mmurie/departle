import { useState } from 'react';
import CarteFrance from '../components/CarteFrance';
import AutocompleteInput from '../components/autocompletion/AutocompleteInput';

const Home = () => {
    const deptsList = [];
    const [dept, setdept] = useState("");
    console.log(dept);
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