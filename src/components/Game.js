import { useEffect, useState } from 'react';
import Commune from '../components/Commune';
import {getDistanceBetweenTwoPoints} from '../utils/coordinatesFunctions';
import Autocomplete from "../components/Auto";
import deptsList from "../data/departements.json";
import FormeDepartement from '../components/FormeDepartement';

const Game = (props) => {
    //TODO get data from commune
    const [commune, setCommune] = useState({});

    const [count, setCount] = useState(0);

    const maxTry = 6;

    const deptsArr = [];

    //Concatenate in order to obtain a string array
    for (const [key, value] of Object.entries(deptsList)) {
        //deptsArr.push(value.nom);
        //deptsArr.push({code: key, value: suggestions[key].nom});
        deptsArr.push(key + " - " + deptsList[key].nom);
    };

    /*const verifyData = (props) => {
      //TODO 
      console.log("test !!!");
    };*/
    const onTest = () => {
      console.log("123 test.")
    };
    function sum(a, b) {
      console.log("a+b")
      return a + b;
    }

    switch(props.mode){
      case "ModeClassique":
        verifyData(props.mode);
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
        const theSum = props.sum(1,1);
        console.log(sum(1,1));
        return(
          <div id="ModeClassique" className="container game">
          <FormeDepartement></FormeDepartement>

          <p>{theSum}</p>
          <div className="search-bar-container">
              <Autocomplete suggestions={deptsArr} slice={2} />
          </div>
      </div>
        );
     break;
     case "ModeCarte":
      ;
   break;
    }

    return (
        <div>
          <p>locationGuess = {props.locationGuess}</p>
        </div>
      );
};

export default Game;

export const initalizeGame = {
  //TODO reprend les donnees du cache si partie en cours
};

export const verifyData = (props) => {
  console.log("test !!");
  console.log(props);
};

export const getData = () => {
  
};

/*export function verifyData(props) {
  //TODO 
  console.log("test !!");
  console.log(props.mode);
};*/


export const endGame = {
  //TODO reprend les donnees du cache si partie en cours
};