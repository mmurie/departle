import React, { Component, Fragment } from "react";
import {getDistanceBetweenTwoPoints, getBearingBetweenTwoPoints} from '../utils/coordinatesFunctions'

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
        const {guessData}= this.props;
        this.setState({guessData: guessData});
    }
    
  onChange = e => {
    //const { data } = this.props;
    const { data, guessData, mode } = this.props;

    //verify Data
    if(data.length > 0 && guessData.code !== undefined){
        let userInput = data[data.length-1];
        console.log(userInput["code"]);
        console.log(guessData.code.slice(0,2));
        if(userInput["code"] == guessData.code.slice(0,2)){
            console.log("touve, bien joue !");
            //callback to Auto
            this.props.parentCallback("0", "0", "✓");
        }else{
            console.log("nope !");
            switch(mode){
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
    this.state.distance=getDistanceBetweenTwoPoints(guessData.centre.coordinates[1], guessData.centre.coordinates[0], userInput.lat, userInput.lon);
    this.state.direction=getBearingBetweenTwoPoints(guessData.centre.coordinates[1], guessData.centre.coordinates[0], userInput.lat, userInput.lon);
    //callback to Auto
    this.props.parentCallback(distance, direction, "✗");
  }

  getFormeDistance = (guessData, userInput) => {
    const { distance, direction } = this.state;
    this.state.distance=getDistanceBetweenTwoPoints(guessData.data_anchor_x, guessData.data_anchor_y, userInput.lat, userInput.lon);
    this.state.direction=getBearingBetweenTwoPoints(guessData.data_anchor_x, guessData.data_anchor_y, userInput.lat, userInput.lon);
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
        
        if(data !== undefined) onChange();

        return(
            <Fragment>     
                
            </Fragment>
        );
    };    
};
export default GameComponent;