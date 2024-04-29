// 3rd party
import { Outlet } from "react-router-dom";
// project import
import { Header } from "../fragments";
import Sidebar from "../fragments/Sidebar";
import { useState } from "react";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <main className="w-full max-w-screen-2xl mx-auto overflow-y-auto h-dvh flex md:p-0 bg-primary">
      <nav className="h-dvh sticky top-0">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </nav>
      <main className="flex-1 p-4 md:p-0 ">
        <Header setOpenSidebar={setOpenSidebar} />
        <section className="p-4 rounded-md ">
          <Outlet />
        </section>
      </main>
    </main>
  );
};

export default AdminLayout;
