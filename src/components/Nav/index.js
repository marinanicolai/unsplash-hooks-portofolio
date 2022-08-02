import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { Navigation, CameraImage, HeartImage } from "./Nav.styles";
import { logo, heartIcon } from "../../utils/resources/index";
const Nav = () => {
  return (
    <Navigation>
      <Link to="/">
        <CameraImage>
          <img alt="camera-img" className="camera-image" src={logo} />
        </CameraImage>
      </Link>
      <p>Photos</p>
      <SearchBar />

      <Link to="/favorites">
        <HeartImage>
          <img alt="camera-img" className="camera-image" src={heartIcon} />
        </HeartImage>
      </Link>
      <p>Saved</p>
    </Navigation>
  );
};

export default Nav;
