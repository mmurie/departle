import { useEffect, useState } from 'react';
import variables from '../styles/_vars.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = (ev) => {
        setIsOpen(!isOpen);
        ev.stopPropagation();
    }

    function clickStopPropagation(ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        else if (window.event) {
            window.event.cancelBubble = true;
        }
    }


    return (
        <div className='popup-container'>
            <div className="help-btn" onClick={togglePopup}><FontAwesomeIcon icon={solid('circle-question')} /></div>

            {isOpen && <div className="popup-box" onClick={clickStopPropagation}>
                <div className="box" onClick={clickStopPropagation}>
                    <span className="close-icon" onClick={togglePopup}><FontAwesomeIcon icon={solid('xmark')} /></span>
                    {props.content}
                </div>
            </div>}
        </div>
    );
};

export default Popup;