import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { AppShell, Header } from "@mantine/core";

import "./App.css";

import { StorageProvider } from "./providers";
import AppHeader from "./components/AppHeader";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import ImageItem from "./components/ImageItem";
import Home from "./pages/Home";
import User from "./pages/User";
import Photo from "./pages/Photo";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/Context/Context";
import { CollectionContext } from "./components/Context/Collection";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const [collection, setCollection] = useState([]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <CollectionContext.Provider value={{ collection, setCollection }}>
          <StorageProvider>
            <BrowserRouter>
              <AppShell
                padding="md"
                header={
                  <Header height={100} p="xs">
                    <AppHeader />
                  </Header>
                }
                styles={(theme) => ({
                  main: {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Intro />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="search/:searchTerm" element={<Search />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="item/:id" element={<ImageItem />} />
                  <Route path="user/:username" element={<User />} />
                  <Route path="photo/:photoid" element={<Photo />} />
                </Routes>
              </AppShell>
            </BrowserRouter>
          </StorageProvider>
          <Footer />
        </CollectionContext.Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
