import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";
import {
  SearchIcon,
  SearchBox,
  Box,
  OuterBox,
  Button,
  StyledForm,
} from "./SearchBar.styles";
import {
  clearWhite,
  moveGreyIcon,
  moveBlackIcon,
  greyMagn,
  blackMagn,
} from "../../utils/resources/index";

export default function SearchBar({ handleClear }) {
  const { theme, ToggleTheme } = useContext(ThemeContext);
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
    <StyledForm onSubmit={handleFormSubmit} ref={formRef}>
      <OuterBox>
        <Box>
          <SearchIcon>
            {theme === "light" ? (
              <img alt="magnifier-img" id="magnifier" src={blackMagn} />
            ) : (
              <img alt="magnifier-img" id="magnifier" src={greyMagn} />
            )}
          </SearchIcon>
          {theme === "light" ? (
            <SearchBox
              className="input-box"
              type="text"
              placeholder="Search high-resolution images"
              onChange={(e) => setSearchText(e.target.value)}
            />
          ) : (
            <SearchBox
              className="input-box white"
              type="text"
              placeholder="Search high-resolution images"
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}
        </Box>
        <div>
          {/* <Button type="button" onClick={clearComplete}>
            Clear */}
          {theme === "light" ? (
            <img
              alt="clear-img"
              className="camera-image"
              src={moveBlackIcon}
              onClick={clearComplete}
            />
          ) : (
            <img
              alt="clear-img"
              className="camera-image"
              src={moveGreyIcon}
              onClick={clearComplete}
            />
          )}
          {/* </Button> */}
        </div>
      </OuterBox>
    </StyledForm>
  );
}
