import React, { Component, Fragment } from "react";

class GameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          location: "",
          distance: 0,
          direction: "",
          data: [],
          guessData: {}
        };
    };

    
  onChange = e => {
    const { data } = this.props;
    const { guessData } = this.state;

    console.log(guessData);

    //verify Data
    if(data){
        if(data == guessData.nom){
            console.log("touve, bien joue !");
        }else{
            console.log("nope !")
        }
    };

    /*this.setState({
        data: data
    });*/
  };

  /*verify = e => {
      if(data){
          if(data == guessData){
              console.log("touve, bien joue !");
          }else{
              console.log("nope !")
          }
      };
  };*/

    render() {
        const {
          onChange,
          state: {
            //id,
            //location,
            distance,
            guessData
          }
        } = this;
        const { id, data } = this.props;
        console.log("GameComponent");
        console.log(data);
        if(data) onChange();
        return(
            <Fragment>      
                <p>{JSON.stringify(guessData)}</p>
            </Fragment>
        );
    };    
};
export default GameComponent;