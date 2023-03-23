import React from "react";
import { useContext } from "react";

import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import {
  Navigation,
  HeartImage,
  TextHeart,
  StyledLink,
  Switch,
  Image,
} from "./Nav.styles";
import {
  logo,
  heartIcon,
  camera,
  cameraWhite,
  whiteHeart,
  blackHeart,
  blackMoon,
  greySun,
} from "../../utils/resources/index";
import { ThemeContext } from "../Context/Context";
import ReactSwitch from "react-switch";

const Nav = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <Navigation>
      <Link to="/">
        {theme === "light" ? (
          <Image alt="camera-img" className="camera-image" src={camera} />
        ) : (
          <Image alt="camera-img" className="camera-image" src={cameraWhite} />
        )}
      </Link>
      <SearchBar />
      <StyledLink to="/favorites">
        <HeartImage>
          {theme === "light" ? (
            <Image alt="camera-img" className="camera-image" src={blackHeart} />
          ) : (
            <Image alt="camera-img" className="camera-image" src={whiteHeart} />
          )}
        </HeartImage>
      </StyledLink>
      {/* <p>Saved</p> */}
      <Switch>
        <label>
          {theme === "light" ? (
            <Image alt="camera-img" className="camera-image" src={blackMoon} />
          ) : (
            <Image alt="camera-img" className="camera-image" src={greySun} />
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
