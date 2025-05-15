import React from "react";
import PropTypes from "prop-types";
import SidebarBrand from "./SidebarBrand";
import SidebarLinks from "./SidebarLinks";

function SidebarContent(props) {
  const { routes } = props;
  
  return (
    <div className="flex flex-col h-full pt-6 px-4 rounded-[30px]">
      <SidebarBrand />
      <div className="flex flex-col mb-auto mt-2">
        <div className="ps-5 pe-4 2xl:pe-0.5">
          <SidebarLinks routes={routes} />
        </div>
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default SidebarContent; 