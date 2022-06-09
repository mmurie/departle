import React, { Component, Fragment } from "react";
import { getDistanceBetweenTwoPoints, getBearingBetweenTwoPoints, getBearingChar } from '../utils/coordinatesFunctions';
import Departements from "../data/departements.json";
import { updateDepClass } from "./CarteFrance";

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
    const { data, guessData, mode } = this.props;

    //verify Data
    if (data.length > 0 && guessData.code !== undefined) {
      let userInput = data[data.length - 1];

      if (mode == "ModeCarte") {
        let targetCode = "";
        if (guessData.departement) targetCode = guessData.departement.code;
        if (guessData.code && guessData.code.length <= 2) targetCode = guessData.code;
        updateDepClass(targetCode, userInput.code);
      }

      if (userInput["code"] == guessData.code.slice(0, 2)) {
        console.log("touve, bien joue !");
        //callback to Auto
        this.props.parentCallback("0 km", " ", "✓");
      } else {
        console.log("nope !");
        switch (mode) {
          case "ModeForme": this.getFormeDistance(guessData, userInput);
            break;
          case "ModeCarte": this.getCarteDistance();
            break;
          default: this.getDistance(guessData, userInput);
        }
      }
    };

  };

  getDistance = (guessData, userInput) => {
    const { distance, direction } = this.state;

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

    let t_coords = Departements[guessData.code]["centre"]["coordinates"];
    let g_coords = Departements[userInput.code]["centre"]["coordinates"];

    this.state.distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], g_coords[0], g_coords[1]).toFixed(2) + " km";
    this.state.direction = getBearingChar(getBearingBetweenTwoPoints(g_coords[0], g_coords[1], t_coords[0], t_coords[1]));

    //callback to Auto
    this.props.parentCallback(distance, direction, "✗");
  }

  getCarteDistance = () => {
    //callback to Auto
    this.props.parentCallback("-", "-", "✗");
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