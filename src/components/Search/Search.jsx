// import section
import React, { useState } from "react";
import styles from "./Search.module.css";


// In this function component, we are passing our current state as the value for the search input field. When the onChange event is called, the handleSearchInputChanges function is also called which activates the state update function(callSearchFunction) with the new value.
export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  };

  // The resetInputField function basically activates the state update function (setSearchValue) with an empty string in order to clear the input field
  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <form className={styles.search}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="please enter your search..."
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}
