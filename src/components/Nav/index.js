import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home-logo</Link>
      <SearchBar />
      <Link to="/favorites">Saved</Link>
    </nav>
  );
};

export default Nav;
