// project import
import { MainLayout } from "../components";
import DetailEpisode from "../pages/DetailEpisode";
import DetailMovie from "../pages/DetailMovie";
import HomePage from "../pages/HomePage";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:movie",
      element: <DetailMovie />,
    },
    {
      path: "/:movie/episode/:episode",
      element: <DetailEpisode />,
    },
  ],
};

export default MainRoutes;
