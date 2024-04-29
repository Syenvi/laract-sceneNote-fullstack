// 3d party
import AdminRoutes from "./AdminRoutes";
import MainRoutes from "./MainRoutes";

// routes
import { useRoutes } from "react-router-dom";

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AdminRoutes]);
}
