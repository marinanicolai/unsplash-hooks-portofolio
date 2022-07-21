import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { Navigation, CameraImage, Image } from "./Nav.styles";


const Nav = () => {
  return (
    <Navigation>
      <Link to="/">
        <CameraImage>
          <img
            alt="camera-img"
            className="camera-image"
            src="https://a-thousand-words-ia23oi68u-redliz5808.vercel.app/static/media/AThousandWordsLogoOnly.30fa16bc.png"
          />
        </CameraImage>
      </Link>
      <SearchBar />

      <Link to="/favorites"> Saved</Link>
    </Navigation>
  );
};

export default Nav;
