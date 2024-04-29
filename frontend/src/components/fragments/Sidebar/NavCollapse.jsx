// import 3rd party
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

// project import
import { Button } from "../../elements";
import { ArrowUpIcon } from "../../../assets";

const NavCollapse = ({ data, detailSidebar }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [onHover, setOnHover] = useState(false);

  // untuk logic active path
  const checkPathname = pathname.split("/").filter((crumb) => crumb !== "");
  const activeMenu =
    pathname == "/add-movie" || pathname == "/add-movie-episode";

  useEffect(() => {
    if (activeMenu) {
      setOpen(true);
    }
  }, []);

  return (
    <div className={`${detailSidebar && "w-full"}`}>
      <Button
        className={clsx(
          "flex items-center justify-between px-3 py-3 rounded-md hover:bg-third  duration-200 ease-in-out stroke-black fill-black ",
          activeMenu ? "bg-third " : "",
          detailSidebar ? "gap-4 w-full" : ""
        )}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <div
          className={clsx(
            "flex items-center gap-4",
            activeMenu ? "fill-white  text-white" : "text-black",
            onHover ? "fill-white text-white" : ""
          )}
        >
          {data.icon}
          {detailSidebar && data.title}
        </div>
        <div
          className={clsx(
            "flex items-center gap-4 duration-200 ease-in-out",
            activeMenu ? "stroke-white" : "",
            onHover ? "stroke-white" : "",
            open ? "rotate-180" : ""
          )}
        >
          {detailSidebar && <ArrowUpIcon />}
        </div>
      </Button>
      {/* --- SUB MENU --- */}
      <div
        className={clsx(
          "flex flex-col w-full gap-2 duration-200 ease-in-out",
          open ? "mt-2" : "opacity-0 h-0 overflow-hidden ",
          detailSidebar && "ml-4"
        )}
      >
        {data.children?.map((item) => {
          const subMenuPath = item.path.split("/");
          const activeSubMenu = checkPathname.some((value) =>
            subMenuPath.includes(value)
          );
          return (
            <Link
              key={item.title}
              className={clsx(
                "py-2  w-full hover:text-white hover:fill-white duration-200 ease-in-out flex justify-start items-center gap-4 px-2",
                activeSubMenu
                  ? "text-white fill-white"
                  : "fill-black text-black"
              )}
              to={data.path + item.path}
            >
              {item.icon}
              {detailSidebar && item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavCollapse;
