import React from "react";
import { TextField } from "@mui/material";
import { SearchDiv } from "../components/Header/NavElement";

const SearchBar = (props) => {
  return (
    <SearchDiv>
      <TextField
        id="outlined-basic"
        onChange={props.inputHandler}
        variant="outlined"
        fullWidth
        label="Search"
      />
    </SearchDiv>
  );
};

export default SearchBar;
