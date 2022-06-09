import React, { Component, Fragment } from "react";
import { getDistanceBetweenTwoPoints, getBearingBetweenTwoPoints, getBearingChar } from '../utils/coordinatesFunctions';
import Departements from "../data/departements.json";

class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      location: "",
      distance: 0,
      direction: "",
      data: [],
      guessData: {},
      mode: ""
    };
  };

  onInit = () => {
    const { guessData } = this.props;
    this.setState({ guessData: guessData });
  }

  onChange = e => {
    //const { data } = this.props;
    const { data, guessData, mode } = this.props;

    //verify Data
    if (data.length > 0 && guessData.code !== undefined) {
      let userInput = data[data.length - 1];
      console.log(userInput["code"]);
      console.log(guessData.code.slice(0, 2));
      if (userInput["code"] == guessData.code.slice(0, 2)) {
        console.log("touve, bien joue !");
        //callback to Auto
        this.props.parentCallback("0", "0", "✓");
      } else {
        console.log("nope !");
        switch (mode) {
          //case "ModeClassique": this.getDistance(guessData, userInput);
          //break;
          case "ModeForme": this.getFormeDistance(guessData, userInput);
            break;
          //case "ModeCarte": this.getDistance(guessData, userInput);
          //break;
          default: this.getDistance(guessData, userInput);
        }
      }
    };

  };

  getDistance = (guessData, userInput) => {
    const { distance, direction } = this.state;

    console.log(guessData);

    let t_coords = [];
    if (guessData.departement) t_coords = Departements[guessData.departement.code]["centre"]["coordinates"];
    if (guessData.code && guessData.code.length <= 2) t_coords = Departements[guessData.code]["centre"]["coordinates"];

    this.state.distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], userInput.lat, userInput.lon).toFixed(2) + " km";
    this.state.direction = getBearingChar(getBearingBetweenTwoPoints(userInput.lat, userInput.lon, t_coords[0], t_coords[1]));
    //callback to Auto
    this.props.parentCallback(distance, direction, "✗");
  }

  getFormeDistance = (guessData, userInput) => {
    const { distance, direction } = this.state;
    console.log(userInput);

    let t_coords = Departements[guessData.code]["centre"]["coordinates"];
    let g_coords = Departements[userInput.code]["centre"]["coordinates"];

    console.log(t_coords);
    console.log(g_coords);

    this.state.distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], g_coords[0], g_coords[1]).toFixed(2) + " km";
    this.state.direction = getBearingChar(getBearingBetweenTwoPoints(g_coords[0], g_coords[1], t_coords[0], t_coords[1]));

    console.log(distance);
    //callback to Auto
    this.props.parentCallback(distance, direction, "✗");
  }

  render() {
    const {
      onChange,
      getDistance,
      state: {
        distance
      }
    } = this;
    const { id, data, guessData } = this.props;

    if (data !== undefined) onChange();

    return (
      <Fragment>

      </Fragment>
    );
  };
};
export default GameComponent;