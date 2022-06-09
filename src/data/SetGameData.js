import { useEffect, useState } from 'react';
import deptsList from "../data/departements.json";

const SetGameData = (location, data, endGame) => {

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
    //this.verifyData(data);
    console.log("Before verify: ");
    console.log(data);
    
    return JSON.stringify(data) ;
    
  };

export default SetGameData;