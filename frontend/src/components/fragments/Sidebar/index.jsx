// react
import { useRef, useState } from "react";

// project import
import { ArrowSidebarLeft, ArrowSidebarRight, Logo } from "../../../assets";
import menuItems from "../../../constants/menu-items";
import NavCollapse from "./NavCollapse";
import NavItem from "./NavItem";
import clsx from "clsx";

const Sidebar = ({ setOpenSidebar, openSidebar }) => {
  const [detailSidebar, setDetailSidebar] = useState(true);

  return (
    <div className="">
      <div
        className={clsx(
          " flex-col items-center bg-secondary p-4 gap-4 h-dvh overflow-y-auto flex fixed md:sticky top-0 z-20 duration-500",
          detailSidebar ? "w-[250px]" : "",
          openSidebar ? "" : "-translate-x-full"
        )}
      >
        <div className="flex w-full justify-between ">
          <h1>Din</h1>
          {detailSidebar && (
            <button onClick={() => setDetailSidebar(!detailSidebar)}>
              <ArrowSidebarLeft />
            </button>
          )}
        </div>
        {!detailSidebar && (
          <button onClick={() => setDetailSidebar(!detailSidebar)}>
            <ArrowSidebarRight />
          </button>
        )}

        {menuItems.items?.map((item) => {
          switch (item.type) {
            case "collapse":
              return (
                <NavCollapse
                  key={item.title}
                  data={item}
                  detailSidebar={detailSidebar}
                />
              );
            case "item":
              return (
                <NavItem
                  key={item.title}
                  data={item}
                  detailSidebar={detailSidebar}
                />
              );
            default:
              return "error";
          }
        })}
      </div>
      <div
        onClick={() => setOpenSidebar(false)}
        className={clsx(
          "fixed bg-black/60 w-full h-dvh z-0",
          openSidebar ? "" : "hidden"
        )}
      ></div>
    </div>
  );
};

export default Sidebar;
