import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let staticLink = [
    {
      name: "Home",
      path: "/",
    },
  ];
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  crumbs.map((crumb) =>
    staticLink.push({
      name:
        crumb == "add-movie"
          ? "Add Movie"
          : crumb == "add-movie-episode"
          ? "Add Movie Episode"
          : crumb.split("-").join(""),
      path: location.pathname,
      key: crumb,
    })
  );

  // eslint-disable-next-line no-constant-condition
  if (staticLink.length == 1) {
    staticLink.push({
      name: "Dashboard",
      path: "/",
    });
  }

  return (
    <div className="flex md:items-center gap-2 flex-col md:flex-row justify-start items-start ">
      {staticLink.map((link, index) => (
        <>
          <div
            key={index}
            className={`flex font-medium items-center gap-2 ${
              index == staticLink.length - 1 ? "" : "text-black"
            }`}
          >
            <div className="flex md:hidden">•</div>
            <Link to={link.path}>{link.name}</Link>
            {index !== staticLink.length - 1 && (
              <div className="hidden md:flex">•</div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
