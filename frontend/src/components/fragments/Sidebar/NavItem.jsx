import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ data, detailSidebar }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={data.path}
      className={clsx(
        "flex items-center gap-4  px-3 py-3 rounded-md hover:bg-third hover:fill-white hover:text-white duration-200 ease-in-out",
        pathname == data.path
          ? "bg-third text-white fill-white"
          : " fill-black text-black",
        detailSidebar && "w-full"
      )}
    >
      {data.icon}
      {detailSidebar && data.title}
    </Link>
  );
};

export default NavItem;
