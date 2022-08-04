import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchIcon,
  SearchBox,
  Box,
  OuterBox,
  Button,
} from "./SearchBar.styles";

export default function SearchBar({ handleClear }) {
  const formRef = useRef();
  const [searchText, setSearchText] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  const clearComplete = () => {
    formRef.current.reset();
    handleClear();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit} ref={formRef}>
          <OuterBox>
            <Box>
              <SearchIcon>
                <i className="search-icon fa-solid fa-magnifying-glass"></i>
              </SearchIcon>
              <SearchBox
                className="input-box"
                type="text"
                placeholder="Search a photo !"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Box>
            <div>
              <Button type="button" onClick={clearComplete}>
                Clear
              </Button>
            </div>
          </OuterBox>
        </form>
      </div>
    </div>
  );
}
