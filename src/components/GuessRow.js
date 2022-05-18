import React, { Component, Fragment } from "react";

class GuessRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          disabled: true,
          location: "",
          distance: 0,
          direction: ""
        };
    };

    
  onChange = e => {
    const { location } = this.props;
    console.log("location = ");
    console.log(location);

    this.setState({
      disabled: false,
      location: location
    });
  };

    render() {
        const {
          onChange,
          state: {
            //id,
            disabled,
            //location,
            distance,
            direction
          }
        } = this;
        const { id, location } = this.props;
        return(
            <Fragment>
            <div className="gap-4 inline-block flex text-2xl w-full justify-evenly items-center col-span-6 animate-reveal text-center">
            <input
            className="rounded text-center"
                    type="text"
                    value={id+" - "+location}
                    onChange={onChange}
                    readOnly
                    disabled={false}
                />
            <input
            className="rounded text-center"
                    type="text"
                    value={distance}
                    readOnly
                    disabled={disabled}
                />
            </div>
            <br/>

                
            </Fragment>
        );
    };    
};
export default GuessRow;