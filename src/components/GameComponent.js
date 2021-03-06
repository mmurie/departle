import React, { Component, Fragment } from "react";
import { getDistanceBetweenTwoPoints, getBearingBetweenTwoPoints, getBearingChar } from '../utils/coordinatesFunctions';
import Departements from "../data/departements.json";
import { updateDepClass } from "./CarteFrance";
import toast from 'react-hot-toast';

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
        toast.success('Bien joué !!!', {
          id: 'win'
        });

        //callback to Auto
        this.props.parentCallback("0 km", " ", "✓", true, mode);
      } else {
        let deptCode = guessData.code.slice(0, 2);
        let end = false;
        if (data.length >= (6 * (mode == "ModeCarte" ? 2 : 1))) {  //Pour un meilleur équillibrage, jusqu'à 12 essais pour le mode carte
          toast.error('Dommage !\nLa bonne réponse était : ' + deptCode + ' - ' + Departements[deptCode].nom, {
            id: 'lose',
            duration: 8000,
          });
          end = true;
        }
        switch (mode) {
          case "ModeForme": this.getFormeDistance(guessData, userInput, end, mode);
            break;
          case "ModeCarte": this.getCarteDistance(end, mode);
            break;
          default: this.getDistance(guessData, userInput, end, mode);
        }
      }
    };

  };

  getDistance = (guessData, userInput, end, mode) => {

    let t_coords = [];
    if (guessData.departement) t_coords = Departements[guessData.departement.code]["centre"]["coordinates"];
    if (guessData.code && guessData.code.length <= 2) t_coords = Departements[guessData.code]["centre"]["coordinates"];

    this.state.distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], userInput.lat, userInput.lon).toFixed(2) + " km";
    this.state.direction = getBearingChar(getBearingBetweenTwoPoints(userInput.lat, userInput.lon, t_coords[0], t_coords[1]));
    //callback to Auto
    const { distance, direction } = this.state;

    this.props.parentCallback(distance, direction, "✗", end, mode);
  }

  getFormeDistance = (guessData, userInput, end, mode) => {
    let t_coords = Departements[guessData.code]["centre"]["coordinates"];
    let g_coords = Departements[userInput.code]["centre"]["coordinates"];

    this.state.distance = getDistanceBetweenTwoPoints(t_coords[0], t_coords[1], g_coords[0], g_coords[1]).toFixed(2) + " km";
    this.state.direction = getBearingChar(getBearingBetweenTwoPoints(g_coords[0], g_coords[1], t_coords[0], t_coords[1]));

    const { distance, direction } = this.state;

    //callback to Auto
    this.props.parentCallback(distance, direction, "✗", end, mode);
  }

  getCarteDistance = (end, mode) => {
    //callback to Auto
    this.props.parentCallback("-", "-", "✗", end, mode);
  }

  render() {
    const {
      onChange,
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