import React, { Component, Fragment, useEffect } from "react";
import '../styles/auto.scss';
import GuessRow from "../components/GuessRow";
import Guesses from "./Guesses";
import deptsList from "../data/departements.json";
//import { getData } from "./Game";
//import {setGameData} from './SetGameData';
import SetGameData from '../data/SetGameData';
import GameComponent from "./GameComponent";


class Auto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      location: "",
      slice: 0,
      data: [],
      errorMessage: "",
      guessData: {}, 
      distance: 0,
      mode: ""
    };
  };

  onChange = e => {
    const { suggestions, guessData } = this.props;
    const userInput = e.currentTarget.value;

    /*const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );*/

    //Priorité des suggestions : numéro de département -> au début du nom -> contenu dans le nom
    let filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) == 0
    );

    filteredSuggestions = filteredSuggestions.concat(suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) == 5
    ));

    filteredSuggestions = filteredSuggestions.concat(suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > 5
    ));

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
      guessData: guessData
    });
  };

  onClick = e => {
    const { slice } = this.props;
    const { data } = this.state;
    
    //getData(e.currentTarget.innerText.slice(0, slice));
    //getData(e.currentTarget.innerText.slice(0, slice), data);
    //SetGameData(e.currentTarget.innerText.slice(0, slice), JSON.stringify(data));
    
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      location: e.currentTarget.innerText.slice(0, slice)
    });
    SetGameData(e.currentTarget.innerText.slice(0, slice), data);

    //this.getData(e.currentTarget.innerText.slice(0, slice));
    //this.getData(e.currentTarget.innerText.slice(0, slice));
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions, data } = this.state;
    const { slice } = this.props;

    //press Enter
    if (e.keyCode === 13) {
      if (!filteredSuggestions[activeSuggestion]) return;
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: "",
        location: filteredSuggestions[activeSuggestion].slice(0, slice)
      });
      //getData(e.currentTarget.innerText.slice(0, slice));
      //getData(filteredSuggestions[activeSuggestion].slice(0, slice), data);
      SetGameData(filteredSuggestions[activeSuggestion].slice(0, slice), data);

      //console.log(filteredSuggestions[activeSuggestion].slice(0, slice));
      //arrow key Up
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion + 1 >= filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  /*getData(location) {
    const [guessData, setGuessData] = useState({});
    useEffect(() => {
      getRandomCommune().then(c => {
          setCommune(c);
          if (props.setCommuneParent) {
              props.setCommuneParent(c);
          }
      });
  }, []);
    //if (!this.state) return;
    //const { location } = this.props;
    
    /*const { data, errorMessage } = this.state;
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
        this.setState({ errorMessage: "Reponse deja utilisee" });
        //errorMessage = "Reponse deja utilisee";
        console.log("Departement deja cite !")
      }
    } else {
      console.log("PERDU !")
    }*/
  //};

  //Callback GameComponent for distance
  handleCallback = (childDataDistance, childDataBearing, childDataSymbol) =>{
    if(childDataDistance && childDataBearing){
      //this.setState({distance: childData});
      this.state.distance = childDataDistance;
      this.state.data[this.state.data.length-1]["distance"] = childDataDistance;
      this.state.data[this.state.data.length-1]["direction"] = childDataBearing;
      this.state.data[this.state.data.length-1]["symbol"] = childDataSymbol;
    }
  }


  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      getData,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
        location,
        data,
        errorMessage,
        guessData,
        distance
      }
    } = this;

    const {mode} = this.props;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }
    console.log("mode");
    console.log(mode);
    return (
      <Fragment>
        <div>
          <GameComponent guessData={guessData} data={data} mode={mode} parentCallback={this.handleCallback} />
          <Guesses location={location} data={data} />
        </div>
        <br />
        <br />
        <div>
          <input
            className="w-full"
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          {suggestionsListComponent}
          <div className="bouton">
            <button >valider</button>
          </div>
        </div>

        <div>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </Fragment>
    );
  };
};

export default Auto;