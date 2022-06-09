import React, { useEffect, useState } from 'react';
import Commune from '../components/Commune';
import { getDistanceBetweenTwoPoints } from '../utils/coordinatesFunctions';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";
import FormeDepartement from '../components/FormeDepartement';
import setGameData from '../data/setGameData';

const Game = (props) => {
  //TODO get data from commune
  //const [commune, setCommune] = useState({});

  //const [count, setCount] = useState(0);
  //const [data, setData] = useState({});

  const maxTry = 6;

  const deptsArr = [];

  const [guessData, setGuessData] = useState({});

  //Quand le composant est monté
  useEffect(() => {
    setGameData().then(c => {
      setGuessData(c);
      /*if (props.setCommuneParent) {
          props.setCommuneParent(c);
      }*/
    });
  }, []);


  //const useGuessData = getData();

  //console.log(useGuessData);

  //const data = [];

  //Concatenate in order to obtain a string array
  for (const [key, value] of Object.entries(deptsList)) {
    //deptsArr.push(value.nom);
    //deptsArr.push({code: key, value: suggestions[key].nom});
    deptsArr.push(key + " - " + deptsList[key].nom);
  };

  const verifyData = (data) => {
    console.log("test !!");
    console.log(data);
    console.log(props.location);
    const guess = data.pop();
    if (guess.code === props.code) {
      console.log("G.G !!!!!!");
    }

  };

  const onTest = () => {
    console.log("123 test.");
    console.log("123: " + props.mode);
  };


  switch (props.mode) {
    case "ModeClassique":
      //verifyData(props.mode);
      onTest();
      /*return (
        <div id="ModeClassique" className="container game">
          <p>location = {JSON.stringify(props.location)}</p>
         <Commune setCommuneParent={setCommune}></Commune>

         <div className="search-bar-container justify-evenly text-2xl">
             <Autocomplete suggestions={deptsArr} slice={2} />
         </div>

         <div>{JSON.stringify(commune)}</div>
         
     </div>
      );*/
      break;
    case "ModeForme":
      verifyData(props.mode);
      /*return(
        <div id="ModeClassique" className="container game">
        <FormeDepartement></FormeDepartement>

        <div className="search-bar-container">
            <Autocomplete suggestions={deptsArr} slice={2} />
        </div>
    </div>
      );*/
      break;
    case "ModeCarte":
      ;
      break;
  }

  return (
    <div>

    </div>
  );
};

export default Game;

export const initalizeGame = {
  //TODO reprend les donnees du cache si partie en cours
};

const Test = (data) => {
  //const [tests, setTests] = useState({});
  //setTests(data);
  const tests = data;
  console.log("tests = ");
  console.log(tests);
  Game("test").verifyData(data);
};


export const endGame = () => {
  //TODO affiche un message et affiche la ligne reponse en vert
  const errorMessage = "Gagne !";

};