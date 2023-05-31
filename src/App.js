import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { AppShell, Header, Divider, Flex } from "@mantine/core";

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
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./components/Context/Context";
import { SidebarProvider } from "./hooks/context/Sidebar";
import { useMediaQuery } from '@mantine/hooks';
import { CollectionContext } from "./components/Context/Collection";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const [collection, setCollection] = useState([]);
  const isMobile = useMediaQuery('(max-width: 768px)');

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
              <SidebarProvider>
                <AppShell
                  padding="md"
                  navbar={isMobile ? null : <Sidebar />}
                  header={
                    <Header
                      className="inline-block p-6 bg-gradient-to-tr from-green-400 to-blue-400"
                      height={100}
                      p="xs"
                    >
                      <Flex min={50} align="center" justify="center">
                        <p>Search for any high-resolution image</p>
                      </Flex>
                      <AppHeader class="inline-block p-6 bg-gradient-to-tr from-green-400 to-blue-400" />
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
                    <Route path="users/:username" element={<User />} />
                    <Route path="photo/:photoid" element={<Photo />} />
                    <Route path="search/:searchTerm/photo/:photoid" element={<Photo />} />
                    
                  </Routes>
                </AppShell>
              </SidebarProvider>
            </BrowserRouter>
          </StorageProvider>
          <Footer />
        </CollectionContext.Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
