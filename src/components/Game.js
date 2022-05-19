import { useEffect, useState } from 'react';
import Commune from '../components/Commune';
import {getDistanceBetweenTwoPoints} from '../utils/coordinatesFunctions';

const Game = () => {
    //TODO get data from commune

    const [count, setCount] = useState(0);

    const [commune, setCommune] = useState('');

    useEffect(() => {    document.title = `Vous avez cliqué ${count} fois`;  });



    return (
        <div>
          <p>Vous avez cliqué {count} fois</p>
          <button onClick={() => setCount(count + 1)}>
            Cliquez ici
          </button>
        </div>
      );
};

export default Game;