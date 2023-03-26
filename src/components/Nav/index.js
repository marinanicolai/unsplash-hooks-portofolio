import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SearchBar from "../SearchBar";
import Toggle from "../Toggle/index";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import {
  Navigation,
  HeartImage,
  TextHeart,
  StyledLink,
  Switch,
  Image,
  BtnContainer,
  StyledBtn,
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

const NavComponent = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);
  const formRef = useRef();
  const [searchText, setSearchText] = useState(null);

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };
  return (
    <>
      {/* <Navbar.Brand href="#">
        {" "}
        <Link to="/">
          {theme === "light" ? (
            <Image alt="camera-img" className="camera-image" src={camera} />
          ) : (
            <Image
              alt="camera-img"
              className="camera-image"
              src={cameraWhite}
            />
          )}
        </Link>
      </Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
      {/* <Navbar.Collapse id="navbarScroll"> */}
      {/* <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/favorites">
            Favorite
          </Button>
        </Nav> */}
      {/* <Form className="d-flex" onSubmit={handleFormSubmit}>
          <Form.Control
            type="search"
            placeholder="Search high-resolution images"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form> */}
      {/* <Navbar.Brand href="#">
        {" "}
        <Link to="/">
          {theme === "light" ? (
            <Image
              alt="camera-img"
              className="camera-image"
              src={blackMoon}
              onClick={ToggleTheme}
            />
          ) : (
            <Image
              alt="camera-img"
              className="camera-image"
              src={greySun}
              onClick={ToggleTheme}
            />
          )}
        </Link>
      </Navbar.Brand> */}
      {/* </Navbar.Collapse> */}
    </>
  );
};

export default NavComponent;
