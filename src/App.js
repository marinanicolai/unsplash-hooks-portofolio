import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./components/Search";
import About from "./components/About";
import Item from "./components/Item";
import React from "react";

class App extends React.Component() {
  state = { images: [] };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Search onSearch={this.handleSubmit} />} />
            <Route path="about" element={<About />} />
            <Route path="item/:id" element={<Item />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
