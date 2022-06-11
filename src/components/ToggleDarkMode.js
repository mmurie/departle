import { useEffect, useState } from 'react';
import variables from '../styles/_vars.scss';

const ToggleDarkMode = () => {
    const root = document.querySelector(':root');
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    function updateTheme() {
        const input = document.querySelector("#toggle-dark-mode input");

        if (theme === "dark") {
            root.style.setProperty('--background-color', variables.noir);
            root.style.setProperty('--text-color', variables.blanc);
            if (input) input.checked = true;
        } else {
            root.style.setProperty('--background-color', variables.blanc);
            root.style.setProperty('--text-color', variables.noir);
            if (input) input.checked = false;
        }
        localStorage.setItem("theme", theme);

        console.log("---func---");
        console.log(localStorage.getItem("theme"));
        console.log(theme);
    }

    useEffect(() => {
        console.log("---init---");
        console.log(localStorage.getItem("theme"));
        console.log(theme);
        updateTheme();
    }, [theme]);



    return (
        <div id="toggle-dark-mode" className={"switch switch-dark-mode " + theme}>
            <input type="checkbox" onChange={(e) => {
                if (e.target.checked) {
                    setTheme("dark");
                } else {
                    setTheme("light");
                }
                console.log("---before update---");
                console.log(localStorage.getItem("theme"));
                console.log(theme);
            }} />
            <span className="slider round"></span>
        </div>
    );
};

export default ToggleDarkMode;