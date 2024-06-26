import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController } from "@/context";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl border border-blue-gray-100 transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="m-4">
        {routes.map(
          ({ layout, title, pages }, key) =>
            layout === "dashboard" && (
              <ul key={key} className="mb-4 flex flex-col gap-1">
                {pages.map(({ icon, name, path }) => (
                  
                  <li key={name}>
                    <NavLink to={`/${layout}${path}`}>
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "gradient" : "text"}
                          color={
                            isActive
                              ? sidenavColor
                              : sidenavType === "dark"
                              ? "white"
                              : "blue-gray"
                          }
                          className="flex items-center gap-4 px-4 capitalize"
                          fullWidth
                        >
                          {icon}
                          <Typography
                            color="inherit"
                            className="font-medium capitalize"
                          >
                            {name}
                          </Typography>
                        </Button>
                      )}
                    </NavLink>
                  </li>
                ))}
                {/* <li>
                  <NavLink target="_blank" to={import.meta.env.VITE_CHAT_APP_URL}>
                    <Button
                      color={
                         "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-inherit" />
                      <Typography color="inherit" className="font-medium capitalize">
                        Chat
                      </Typography>
                    </Button>
                  </NavLink>
                </li> */}
              </ul>
            ),
        )}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Material Tailwind React",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
