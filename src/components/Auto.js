import React, { Component, Fragment } from "react";
import '../styles/auto.scss';
import GuessRow from "../components/GuessRow";
import Guesses from "./Guesses";
import deptsList from "../data/departements.json";

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
      data: []
    };
  };

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    /*const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );*/
  
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    const { slice } = this.props;
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
      location: e.currentTarget.innerText.slice(0,slice)
    });
    //this.getData(e.currentTarget.innerText.slice(0,slice));
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions, data } = this.state;
    const { slice } = this.props;

    //press Enter
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        location: filteredSuggestions[activeSuggestion].slice(0,slice)
      });
      this.getData(filteredSuggestions[activeSuggestion].slice(0,slice));
      console.log(filteredSuggestions[activeSuggestion].slice(0,slice));
      //arrow key Up
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  getData(location) {
    //const { location } = this.props;
    const { data } = this.state;
    console.log("getData");
    console.log(location);
    if(location !== "" && data.length < 6){
      if(!data.some(item => item.code == location)){
        //console.log(location);
      data.push({code: location, locationName: deptsList[location].nom});
      //this.setState({data: data});
      console.log("data = ");
      console.log(data);
      }else{
        console.log("Departement deja cite !")
      }
  } else {
    console.log("PERDU !")
  }
  };
 

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
        data
      }
    } = this;

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
      return (
        <Fragment>
          <div>
                <Guesses location={location} data={data}/>
            </div>
            <br/>
            <br/>
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          {suggestionsListComponent}
          <div className="bouton">
          <button onClick={getData.bind(location)}>valider</button>
          </div>
        </Fragment>
      );
    };
  };
  
  export default Auto;