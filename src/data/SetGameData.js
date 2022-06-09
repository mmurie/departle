import { useEffect, useState } from 'react';
import deptsList from "./departements.json";

const setGameData = (location, data) => {
  if (location !== "" && data.length < 6) {
    if (!data.some(item => item.code == location)) {
      data.push({ code: location, locationName: deptsList[location].nom, lon: deptsList[location].centre.coordinates[1], lat: deptsList[location].centre.coordinates[0] });
    } else {
      console.log("Departement deja cite !")
    }

    return JSON.stringify(data);

  };
}
export default setGameData;
