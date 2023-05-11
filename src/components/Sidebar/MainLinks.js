import React from "react";
import { useSidebar } from "../../hooks/context/Sidebar";

function MainLinks() {

    const {isOpen} = useSidebar()
  return <div>{isOpen && <p>MainLinks</p> }</div>;
}

export default MainLinks;
