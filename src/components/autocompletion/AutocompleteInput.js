import React, { useState } from "react";
import AutoCompleteItem from "./AutocompleteItem";

const AutocompleteInput = () => {
  const [isVisible = false, setVisibility] = useState(false);
  //const showSuggestion = true;
  const showSuggestion = () => setVisibility(true);
  const hideSuggestion = () => setVisibility(false);
  return (
    <div>
      <label>
        Departement :
      </label>
      <input type="text"
        name="search"
        className="search-bar"
        autoComplete="off"
        onClick={showSuggestion}
        onAbort={hideSuggestion}
      />

      <div className={`search-result ${isVisible ? "visible" : "invisible"}`}>
        <ul className="list-group">
          <AutoCompleteItem />
        </ul>
      </div>
      <input type="submit" value="Envoyer" />
    </div>
  );
};

export default AutocompleteInput;
