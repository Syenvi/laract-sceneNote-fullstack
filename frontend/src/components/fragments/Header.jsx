import { BurgerIcon } from "../../assets";
import Breadcrumbs from "./Breadcrumbs";
import { useLocation } from "react-router-dom";

const Header = ({ setOpenSidebar }) => {
  const { pathname } = useLocation();
  const arr = pathname.split("/").filter((crumb) => crumb !== "");
  const title = arr[arr.length - 1];
  return (
    <section className="flex w-full justify-between bg-primary md:py-4 pb-4 md-pb-0 px-4 items-start border-b-2 border-secondary">
      <div className="flex flex-col">
        <div className="title">
          <h1>dashboard</h1>
        </div>
        <div className="breadcrumbs mt-4 md:mt-0">
          <Breadcrumbs />
        </div>
      </div>
      <div
        className="fill-black md:hidden"
        onClick={() => setOpenSidebar(true)}
      >
        <BurgerIcon />
      </div>
    </section>
  );
};

export default Header;
