import React, { useState } from "react";
import AutoCompleteItem from "./AutocompleteItem";

const AutocompleteInput = () => {
  const [isVisible, setVisibility] = useState(false);
  const test = "123";
  //const showSuggestion = true;
  //const showSuggestion = () => setVisibility(true);
  const hideSuggestion = () => setVisibility(false);
  return (
    <div>
      <input>
        <label>
          Departement : 
          <input type="text"
          name="search"
          className="search-bar"
          autoComplete="off"
          onClick={showSuggestion}
          />
        </label>
        <div className={`search-result ${
          isVisible ? "visible" : "invisible"
        }`}>
          <ul className="list-group">
            <AutoCompleteItem />
            <AutoCompleteItem />
          </ul>
        </div>
        <input type="submit" value="Envoyer" />
      </input>
    </div>
  );
};

export default AutocompleteInput;
