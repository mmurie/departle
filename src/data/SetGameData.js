import { useEffect, useState } from 'react';
import deptsList from "./departements.json";
import toast from 'react-hot-toast';


const setGameData = (location, data, endGame, carte = false) => {
  if (location !== "" && !endGame && data.length < (6 * (carte ? 2 : 1))) { //Pour un meilleur équillibrage, jusqu'à 12 essais pour le mode carte
    if (!data.some(item => item.code == location)) {
      data.push({ code: location, locationName: deptsList[location].nom, lon: deptsList[location].centre.coordinates[1], lat: deptsList[location].centre.coordinates[0] });
    } else {
      toast('Département déjà cité !', {
        id: 'repeat'
      });
    }

    return JSON.stringify(data);

  };
}
export default setGameData;
