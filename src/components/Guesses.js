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
        counter: 0
      };
    };

    render() {
        const {
          state: {
            userInput,
            rowCount,
            counter
          }
        } = this;
        const{ location } = this.props;

        let data = [];

        if(location != ""){
            
            console.log(deptsList[location]);
            //data = deptsList[location];
            data.push({key:deptsList[location].code, locationName: deptsList[location].nom})
            //const locationName = deptsList[location].nom;
            //console.log(locationName);
        }
        console.log("data = ");
        console.log(data);

        /*<GuessRow id={rowCount} location={location} disabled={true}/>*/
        return (
            <Fragment>
                <div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                        {Array.from(Array(data.length).keys()).map((index) => (
                        <GuessRow
                            id={data.index}
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