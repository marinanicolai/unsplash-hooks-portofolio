import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

import { HomeIcon, BellIcon, HeartIcon } from "@primer/octicons-react";

const routes = [
  {
    name: "Home",
    path: "/",
    element: Home,
    icon: HomeIcon,
    breadcrumb: "Home",
  },
  {
    name: "Favorites",
    path: "/favorites",
    element: Favorites,
    icon: HeartIcon,
    color: "lime",
  },
];

/**
 * We define routes in object, then we can use `useRoutes` hook from react-router
 * @see https://reactrouter.com/docs/en/v6/examples/route-objects
 * Instead of creating our own object, just pass it all as a props
 * @see https://github.com/remix-run/react-router/issues/8716
 * Find icons
 * @see https://primer.style/octicons/
 */

export default routes;
