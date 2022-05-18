import GuessRow from "../components/GuessRow";
import React, { Component, Fragment } from "react";
import deptsList from "../data/departements.json";

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
        const{ location, data } = this.props

        return (
            <Fragment>
                <div>
                    <div>
                        {Array.from(Array(data.length).keys()).map((index) => (
                        <GuessRow
                            id={index}
                            location={data[index].locationName}
                            countryInputRef={location}
                        />
                        ))}
                    </div>
                </div>
            </Fragment>
          );
    };
};

export default Guesses;