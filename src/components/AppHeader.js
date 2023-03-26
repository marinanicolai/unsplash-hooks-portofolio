import React, { useState } from "react";
import { useMantineTheme, MantineTheme } from "@mantine/core";
import SearchBar from "./SearchBar";
import Toggle from "./Toggle/index";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import {
  Box,
  Group,
  ActionIcon,
  useMantineColorScheme,
  rem,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

import {
  Navigation,
  HeartImage,
  TextHeart,
  StyledLink,
  Switch,
  Image,
  BtnContainer,
  StyledBtn,
} from "./Nav/Nav.styles";
import {
  logo,
  heartIcon,
  camera,
  cameraWhite,
  whiteHeart,
  blackHeart,
  blackMoon,
  greySun,
} from "../utils/resources/index";
import { ThemeContext } from "./Context/Context";
import SearchForm from "./SearchForm";

const AppHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <Group position="apart">
        <Box display="flex">
          <Button component={Link} to="/" mr={8}>
            Home
          </Button>
          <Button component={Link} to="/favorites">
            Favorite
          </Button>
          <SearchForm />
        </Box>
        {colorScheme === "dark" ? (
          <Image alt="camera-img" className="camera-image" src={cameraWhite} />
        ) : (
          <Image alt="camera-img" className="camera-image" src={camera} />
        )}
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === "dark" ? (
            <IconSun size="1rem" />
          ) : (
            <IconMoonStars size="1rem" />
          )}
        </ActionIcon>
      </Group>

      {/* <Form className="d-flex" onSubmit={handleFormSubmit}>
          <Form.Control
            type="search"
            placeholder="Search high-resolution images"
            className="me-2"            
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

export default AppHeader;
