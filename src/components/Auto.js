import React, { Component, Fragment } from "react";
import '../styles/auto.scss';
import Guesses from "./Guesses";
import setGameData from '../data/setGameData';
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


    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      location: e.currentTarget.innerText.slice(0, slice)
    });
    setGameData(e.currentTarget.innerText.slice(0, slice), data);
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

      setGameData(filteredSuggestions[activeSuggestion].slice(0, slice), data);

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

  //Callback GameComponent for distance
  handleCallback = (childDataDistance, childDataBearing, childDataSymbol) => {
    if (childDataDistance && childDataBearing) {
      this.state.distance = childDataDistance;
      this.state.data[this.state.data.length - 1]["distance"] = childDataDistance;
      this.state.data[this.state.data.length - 1]["direction"] = childDataBearing;
      this.state.data[this.state.data.length - 1]["symbol"] = childDataSymbol;
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

    const { mode } = this.props;

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
            <em>Pas de suggestions disponibles.</em>
          </div>
        );
      }
    }
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
        </div>

        <div>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </Fragment>
    );
  };
};

export default Auto;