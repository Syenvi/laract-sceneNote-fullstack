// 3rd party
import { Outlet, useNavigate } from "react-router-dom";
// project import
import { Navbar } from "../fragments";

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full max-w-screen-lg mx-auto  h-dvh flex flex-col md:p-0 ">
      <nav className="cursor-pointer" onClick={() => navigate("/")}>
        <Navbar />
      </nav>
      <main className="flex-1 p-4 md:p-0 ">
        <section className="p-4 rounded-md ">
          <Outlet />
        </section>
      </main>
    </main>
  );
};

export default MainLayout;
