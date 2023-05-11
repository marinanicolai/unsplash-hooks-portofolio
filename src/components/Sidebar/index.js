import { Navbar, ScrollArea, Button } from "@mantine/core";
import { useSidebar } from "../../hooks/context/Sidebar";

export default function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <Navbar width={{ base: isOpen ? 250 : 57 }} height="calc(100vh - 60px)">
      this is sidedbar
    </Navbar>
  );
}
