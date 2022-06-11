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
        console.log("trouve, bien joue !");
        //callback to Auto
        this.props.parentCallback("0 km", " ", "✓", true);
      } else {
        let deptCode = guessData.code.slice(0, 2);
        let end = false;
        if (data.length >= (6 * (mode == "ModeCarte" ? 2 : 1))) {  //Pour un meilleur équillibrage, jusqu'à 12 essais pour le mode carte
          //alert("la bonne réponse était: " + deptCode + " - " + Departements[deptCode].nom);
          end = true;
        }
        console.log("nope !");
        switch (mode) {
          case "ModeForme": this.getFormeDistance(guessData, userInput, end);
            break;
          case "ModeCarte": this.getCarteDistance(end);
            break;
          default: this.getDistance(guessData, userInput, end);
        }
      }
    };

  };

  getDistance = (guessData, userInput, end) => {
    const { distance, direction } = this.state;

    let t_coords = [];
    if (guessData.departement) t_coords = Departements[guessData.departement.code]["centre"]["coordinates"];
    if (guessData.code && guessData.code.length <= 2) t_coords = Departements[guessData.code]["centre"]["coordinates"];

    this.state.distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], userInput.lat, userInput.lon).toFixed(2) + " km";
    this.state.direction = getBearingChar(getBearingBetweenTwoPoints(userInput.lat, userInput.lon, t_coords[0], t_coords[1]));
    //callback to Auto
    this.props.parentCallback(distance, direction, "✗", end);
  }

  getFormeDistance = (guessData, userInput, end) => {
    const { distance, direction } = this.state;

    let t_coords = Departements[guessData.code]["centre"]["coordinates"];
    let g_coords = Departements[userInput.code]["centre"]["coordinates"];

    this.state.distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], g_coords[0], g_coords[1]).toFixed(2) + " km";
    this.state.direction = getBearingChar(getBearingBetweenTwoPoints(g_coords[0], g_coords[1], t_coords[0], t_coords[1]));

    //callback to Auto
    this.props.parentCallback(distance, direction, "✗", end);
  }

  getCarteDistance = (end) => {
    //callback to Auto
    this.props.parentCallback("-", "-", "✗", end);
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