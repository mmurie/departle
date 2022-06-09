import GuessRow from "../components/GuessRow";
import React, { Component, Fragment } from "react";

class Guesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowCount: 6,
      guesses: [],
      location: "",
      counter: 0,
      data: []
    };
  };

  render() {
    const {
      //getData,
      state: {
        userInput,
        rowCount,
        counter
      }
    } = this;
    const { location, data } = this.props

    return (
      <Fragment>
        <div>
          <div>
            {Array.from(Array(data.length).keys()).map((index) => (
              <GuessRow
                id={index}
                location={data[index].locationName}
                countryInputRef={location}
                distance={data[index].distance}
                direction={data[index].direction}
                symbol={data[index].symbol}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  };
};

export default Guesses;