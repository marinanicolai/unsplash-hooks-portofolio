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
  Tooltip,
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
import { SignInIcon, SignOutIcon } from "@primer/octicons-react";
import {
  logo,
  heartIcon,
  camera,
  cameraWhite,
  unsplashLogo,
  Logo,
  LogoBlack,
  whiteHeart,
  blackHeart,
  blackMoon,
  greySun,
} from "../utils/resources/index";
import { useSidebar } from "../../src/hooks/context/Sidebar";
import SearchForm from "./SearchForm";

const AppHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { isOpen, setSidebar } = useSidebar();
  return (
    <>
      <Group position="apart">
        <Box display="flex">
          {colorScheme === "dark" ? (
            <img className="logo" alt="logo-img" src={LogoBlack} />
          ) : (
            <img className="logo" alt="logo-img" src={Logo} />
          )}
        </Box>
        <SearchForm />
        <Group spacing="xs">
          {colorScheme === "dark" ? (
            <Image
              alt="camera-img"
              className="camera-image"
              src={cameraWhite}
            />
          ) : (
            <Image alt="camera-img" className="camera-image" src={camera} />
          )}

          <ActionIcon variant="default" onClick={() => setSidebar?.()}>
            {isOpen ? <SignInIcon /> : <SignOutIcon />}
          </ActionIcon>
          <ActionIcon
            variant="default"
            onClick={() => toggleColorScheme()}
            size={30}
          >
            <Tooltip withArrow transition="fade" label="Ctrl + J">
              {colorScheme === "dark" ? (
                <IconSun size="1rem" />
              ) : (
                <IconMoonStars size="1rem" />
              )}
            </Tooltip>
          </ActionIcon>
        </Group>
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
