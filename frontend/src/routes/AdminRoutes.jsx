import { AdminLayout } from "../components";
// import MovieEpisodeEdit from "../pages/MovieEpisodeEdit";
import MovieEpisodeStore from "../pages/MovieEpisodeStore";
import MovieStore from "../pages/MovieStore";

const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "add-movie",
      element: <MovieStore />,
    },
    {
      path: "add-movie-episode",
      element: <MovieEpisodeStore />,
    },
    // {
    //   path: "edit/:movie/episode/:episode",
    //   element: <MovieEpisodeEdit />,
    // },
  ],
};

export default AdminRoutes;
