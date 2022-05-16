import { useEffect, useState } from 'react';
import variables from '../styles/_vars.scss';

const ToggleDarkMode = () => {
    const root = document.querySelector(':root');
    const [theme, setTheme] = useState("light");

    return (
        <div className={"switch switch-dark-mode " + theme}>
            <input type="checkbox" onChange={(e) => {
                if (e.target.checked) {
                    setTheme("dark");
                    root.style.setProperty('--background-color', variables.noir)
                    root.style.setProperty('--text-color', variables.blanc)
                } else {
                    setTheme("light");
                    root.style.setProperty('--background-color', variables.blanc)
                    root.style.setProperty('--text-color', variables.noir)
                }
            }} />
            <span className="slider round"></span>
        </div>
    );
};

export default ToggleDarkMode;