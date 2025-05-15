import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Text } from "../ui/text";
import { cn } from "../../../lib/utils";

function SidebarLinks(props) {
  const { routes } = props;
  const location = useLocation();

  // Colors
  const activeColor = "text-gray-700 dark:text-white";
  const inactiveColor = "text-secondaryGray-600";
  const activeIcon = "text-brand-500 dark:text-white";
  const textColor = "text-secondaryGray-500 dark:text-white";
  const brandColor = "bg-brand-500 dark:bg-brand-400";

  // Check if route is active
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // Create links from routes config
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <React.Fragment key={index}>
            <Text
              className={cn(
                "text-md font-bold mx-auto pt-[18px] pb-3",
                activeColor,
                "sm:pl-[10px] xl:pl-4"
              )}
            >
              {route.name}
            </Text>
            {createLinks(route.items)}
          </React.Fragment>
        );
      } else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <NavLink key={index} to={route.layout + route.path}>
            {route.icon ? (
              <div>
                <div
                  className={cn(
                    "flex py-[5px] ps-[10px]",
                    activeRoute(route.path.toLowerCase()) ? "space-x-[22px]" : "space-x-[26px]"
                  )}
                >
                  <div className="flex w-full items-center justify-center">
                    <div
                      className={cn(
                        "me-[18px]",
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : textColor
                      )}
                    >
                      {route.icon}
                    </div>
                    <p
                      className={cn(
                        "me-auto",
                        activeRoute(route.path.toLowerCase())
                          ? cn(activeColor, "font-bold")
                          : cn(textColor, "font-normal")
                      )}
                    >
                      {route.name}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "h-9 w-1 rounded-md",
                      activeRoute(route.path.toLowerCase())
                        ? brandColor
                        : "bg-transparent"
                    )}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div
                  className={cn(
                    "flex py-[5px] ps-[10px]",
                    activeRoute(route.path.toLowerCase()) ? "space-x-[22px]" : "space-x-[26px]"
                  )}
                >
                  <p
                    className={cn(
                      "me-auto",
                      activeRoute(route.path.toLowerCase())
                        ? cn(activeColor, "font-bold")
                        : cn(inactiveColor, "font-normal")
                    )}
                  >
                    {route.name}
                  </p>
                  <div className="h-9 w-1 rounded-md bg-brand-400" />
                </div>
              </div>
            )}
          </NavLink>
        );
      }
      return null;
    });
  };

  return <>{createLinks(routes)}</>;
}

SidebarLinks.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default SidebarLinks; 