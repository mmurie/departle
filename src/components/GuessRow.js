import React, { Component, Fragment } from "react";

class GuessRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          disabled: true,
          location: "blbl",
          distance: 0,
          direction: ""
        };
    };

    
  onChange = e => {
    //const { suggestions } = this.props;
    //const location = e.currentTarget.value;

    this.setState({
      disabled: false,
      location: e.currentTarget.value
    });
  };

    render() {
        const {
          onChange,
          state: {
            id,
            disabled,
            location,
            distance,
            direction
          }
        } = this;
        return(
            <Fragment>
            <div className={`flex text-2xl w-full justify-evenly items-center col-span-6 border-2 h-8 rounded`}>
            test
            <input
                    type="text"
                    value={id+" - "+location}
                    onChange={onChange}
                    readOnly
                    disabled={disabled}
                />
            <input
                    type="text"
                    value={distance}
                    readOnly
                    disabled={disabled}
                />
            </div>
            <div className="flex items-center justify-center border-2 h-8 col-span-1 animate-reveal rounded">

            </div>
                
            </Fragment>
        );
    };    
};
export default GuessRow;