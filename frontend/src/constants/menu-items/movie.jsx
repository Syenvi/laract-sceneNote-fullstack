import { AnakIcon, PengantinIcon, PesertaIcon } from "../../assets";

const movie = {
  title: "Movie",
  type: "collapse",
  icon: <PesertaIcon />,
  path: "/admin",
  children: [
    {
      title: "Add Movie",
      icon: <AnakIcon />,
      path: "/add-movie",
    },
    {
      title: "Add Movie Episode",
      icon: <PengantinIcon />,
      path: "/add-movie-episode",
    },
  ],
};

export default movie;
