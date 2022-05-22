import React, { useEffect, useState } from 'react';
import deptsList from "../data/departements.json";

export const setGameData = (location, data) => {
  console.log(data);
    //const [dataGuesses, setDataGuesses] = useState({});
    //const { data, errorMessage } = this.state;
    console.log("getData");
    console.log(location);
    if (location !== "" && data.length < 6) {
      if (!data.some(item => item.code == location)) {
        //console.log(location);
        data.push({ code: location, locationName: deptsList[location].nom });
        //this.setState({data: data});
        console.log("data = ");
        console.log(data);
      } else {
        const errorMessage = "Reponse deja utilisee";
        //errorMessage = "Reponse deja utilisee";
        console.log("Departement deja cite !")
      }
    } else {
      console.log("PERDU !")
    }
    //this.verifyData(data);
    console.log("Before verfiy: ");
    console.log(data);
    //access to Game verify data to access props
    //Game().verifyData(data);
    //this.useGuessData();
    //Test.setTests(data);
    //Test(data);
    
    //const [usedata, setData] = useState({});
    //setData(data)
    
    //return data;
    
    //const StaticData = data;
    //Game(data);
    
      //return [dataGuesses, setDataGuesses];
      //this.setData(data);
      //return data;
  };

  /*const getGameData = (data) => {
    const [usedata, setData] = useState({});
    setData(data)
    return usedata;
  };*/

  //export default SetGameData;