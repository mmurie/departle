import React, { Component, Fragment } from "react";
import '../styles/auto.scss';
import Guesses from "./Guesses";
import setGameData from '../data/SetGameData';
import GameComponent from "./GameComponent";
import updateHistory from '../data/history';

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
      mode: "",
      endGame: false
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
    const { data, endGame } = this.state;

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      location: e.currentTarget.innerText.slice(0, slice)
    });
    setGameData(e.currentTarget.innerText.slice(0, slice), data, endGame);
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions, data, endGame } = this.state;
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

      setGameData(filteredSuggestions[activeSuggestion].slice(0, slice), data, endGame, this.props.mode == "ModeCarte");

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
  handleCallback = (childDataDistance, childDataBearing, childDataSymbol, childEndGame, mode) => {
    if (childDataDistance && childDataBearing) {
      //this.setState({distance: childData});
      this.state.distance = childDataDistance;
      this.state.data[this.state.data.length - 1]["distance"] = childDataDistance;
      this.state.data[this.state.data.length - 1]["direction"] = childDataBearing;
      this.state.data[this.state.data.length - 1]["symbol"] = childDataSymbol;

      if (childEndGame && !this.state.endGame) {
        updateHistory(mode, (mode !== "ModeCarte" ? this.state.data.length : Math.ceil(this.state.data.length / 2)));
        this.setState({ endGame: childEndGame });
      } else {
        this.state.endGame = childEndGame;
      }
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
        distance,
        endGame
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
        <div class="guesses">
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
            disabled={endGame}
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