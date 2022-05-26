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

    onInit = () => {
        const {guessData}= this.props;
        this.setState({guessData: guessData});
    }
    
  onChange = e => {
    //const { data } = this.props;
    const { data, guessData } = this.props;

    //verify Data
    if(data.length > 0 && guessData.code !== undefined){
        let userInput = data[data.length-1];
        console.log(userInput["code"]);
        console.log(guessData.code.slice(0,2));
        if(userInput["code"] == guessData.code.slice(0,2)){
            console.log("touve, bien joue !");
        }else{
            console.log("nope !")
        }
    };

    /*this.setState({
        data: data
    });*/
  };

  /*componentDidMount(){
      //if(this.props.guessData)
      this.setState({guessData: this.state.guessData});
  }*/

  /*componentDidUpdate(prevProps, prevState) {
      console.log("conponentdidupdate");
    if (prevState.guessData !== this.props.guessData) {
      console.log('pokemons state has changed.')
      this.setState({guessData: prevProps.guessData});
      this.guessDataImmutable = this.state.guessData;
    }
    console.log("guessdata componentdidupdate");
    console.log(this.state.guessData);
  }*/
  

  /*componentDidUpdate(prevProps){
      console.log("prevprops.guessdata");
      console.log(prevProps.guessData);
    if(prevProps.guessData != this.state.guessData && this.props.guessData!={}){
        this.setState ({guessData: prevProps.guessData});
    };
    console.log("value guessData");
    console.log(this.state.guessData);
  };*/


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
          onInit,
          state: {
            //id,
            //location,
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