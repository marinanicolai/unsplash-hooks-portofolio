import React from "react";
import { useContext } from "react";

import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import {
  Navigation,
  CameraImage,
  HeartImage,
  TextHeart,
  StyledLink,
  Switch,
  Image,
} from "./Nav.styles";
import { logo, heartIcon } from "../../utils/resources/index";
import { ThemeContext } from "../Context/Context";
import ReactSwitch from "react-switch";

const Nav = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <Navigation>
      <Link to="/">
        {/* <CameraImage> */}
        <Image alt="camera-img" className="camera-image" src={logo} />
        {/* </CameraImage> */}
      </Link>
      <SearchBar />

      <StyledLink to="/favorites">
        <HeartImage>
          <img alt="camera-img" className="camera-image" src={heartIcon} />
          <TextHeart>Saved</TextHeart>
        </HeartImage>
      </StyledLink>
      {/* <p>Saved</p> */}
      <Switch>
        <label>
          {theme === "light" ? (
            <span className="theme">🌒</span>
          ) : (
            <span className="theme">☀️</span>
          )}
        </label>
        <ReactSwitch
          onChange={ToggleTheme}
          checked={theme === "dark"}
          onColor="#808080"
        />
      </Switch>
    </Navigation>
  );
};

export default Nav;
