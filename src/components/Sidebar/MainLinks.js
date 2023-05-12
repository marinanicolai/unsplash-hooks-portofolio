import React from "react";
import routes from "./../../routes";
import { createStyles } from "@mantine/styles";
import { Link } from "react-router-dom";
import { Title, Anchor, ActionIcon, Group } from "@mantine/core";
import { useSidebar } from "../../hooks/context/Sidebar";

const useStyles = createStyles((theme) => ({
  button: {
    display: "block",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      textDecoration: "none",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

function MainLink({ icon: Icon, color, name, path }) {
  const { isOpen } = useSidebar();
  const { classes } = useStyles();
  return (
    <>
      <Anchor component={Link} to={path} className={classes.button}>
        <Group>
          <ActionIcon title={name}>
            <Icon />
          </ActionIcon>

          {isOpen && <Title order={6}>{name}</Title>}
        </Group>
      </Anchor>
    </>
  );
}

function MainLinksContainer() {
  const links = routes.map((link) => <MainLink {...link} key={link.name} />);
  return <div>{links}</div>;
}

export default MainLinksContainer;
