import { React, useState } from "react";
import { TextField } from "@mui/material";
import List from "../components/List";
import { SearchDiv } from "../components/Header/NavElement";

const SearchBar = () => {
  return (
    <SearchDiv>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
      />
      <List />
    </SearchDiv>
  );
};

export default SearchBar;
