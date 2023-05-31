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
import { useMediaQuery } from '@mantine/hooks';


const AppHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { isOpen, setSidebar } = useSidebar();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
    {isMobile ? null : (
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
      </Group> )}

     
    </>
  );
};

export default AppHeader;
