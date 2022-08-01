import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { Navigation, CameraImage } from "./Nav.styles";
import { logo } from "../../utils/resources/index";
const Nav = () => {
  return (
    <Navigation>
      <Link to="/">
        <CameraImage>
          <img alt="camera-img" className="camera-image" src={logo} />
        </CameraImage>
      </Link>
      <SearchBar />

      <Link to="/favorites"> Saved</Link>
    </Navigation>
  );
};

export default Nav;
