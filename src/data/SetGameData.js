import { useEffect, useState } from 'react';
import deptsList from "./departements.json";

/*const SetGameData = (location, data, endGame) => {

    if (location !== "" && data.length < 6 && !endGame) {
      if (!data.some(item => item.code == location)) {
        data.push({ code: location, locationName: deptsList[location].nom, lon: deptsList[location].centre.coordinates[1], lat: deptsList[location].centre.coordinates[0]});
        //this.setState({data: data});
        console.log("data = ");
        console.log(data);
      } else {
        const errorMessage = "Reponse deja utilisee";
        console.log("Departement deja cite !")
      }
    } else {
      console.log("PERDU !");
    }
  }*/

  const setGameData = (location, data, carte = false, endGame) => {
    if (location !== "" && !endGame && data.length < (6 * (carte ? 2 : 1))) {
      if (!data.some(item => item.code == location)) {
        data.push({ code: location, locationName: deptsList[location].nom, lon: deptsList[location].centre.coordinates[1], lat: deptsList[location].centre.coordinates[0] });
      } else {
        console.log("Departement deja cite !")
      }
  
      return JSON.stringify(data);
  
    };
  }
export default setGameData;
