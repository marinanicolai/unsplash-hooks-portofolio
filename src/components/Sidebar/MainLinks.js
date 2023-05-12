import React from "react";
import routes from "./../../routes";
import { useSidebar } from "../../hooks/context/Sidebar";

function MainLink() {
  const { isOpen } = useSidebar();
  return <div>{isOpen && <p>MainLinks</p>}</div>;
}

function MainLinksContainer() {
  const links = routes.map((link) => <MainLink {...link} key={link.name} />);
  return <div>{links}</div>;
}

export default MainLinksContainer;
