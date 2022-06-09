import React, { Component, Fragment } from "react";
import GameComponent from "./GameComponent";

class GuessRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      disabled: true,
      location: "",
      distance: 0,
      direction: "",
      symbol: ""
    };
  };


  onChange = e => {
    const { location } = this.props;

    this.setState({
      disabled: false,
      location: location
    });
  };

  render() {
    const {
      onChange,
      state: {
        disabled
      }
    } = this;
    const { id, location, distance, direction, symbol } = this.props;

    return (
      <Fragment>
        <div id={symbol} className="guess gap-4 inline-block flex text-2xl w-full justify-evenly items-center col-span-6 animate-reveal text-center">
          <input
            className="rounded text-center"
            type="text"
            id={symbol}
            value={id + " - " + location}
            onChange={onChange}
            readOnly
            disabled={false}
          />
          <input
            className="rounded text-center w-56 ease-in-out"
            type="text"
            id={symbol}
            value={distance}
            readOnly
            disabled={disabled}
          />
          <input
            className="rounded text-center w-50 ease-in-out"
            type="text"
            id={symbol}
            value={direction}
            readOnly
          />
          <input
            className="rounded text-center w-20 ease-in-out"
            type="text"
            id={symbol}
            //value={"X ✓"}
            value={symbol}
            readOnly
          />
        </div>

        <br />



      </Fragment>
    );
  };
};
export default GuessRow;