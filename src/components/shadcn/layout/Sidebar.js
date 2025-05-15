import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars-2";
import { IoMenuOutline } from "react-icons/io5";
import { renderThumb, renderTrack, renderView } from "../../scrollbar/Scrollbar";
import SidebarContent from "./SidebarContent";
import { cn } from "../../../lib/utils";
import { Icon } from "../ui/icon";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from "../ui/drawer";

function Sidebar(props) {
  const { routes, ...rest } = props;

  // Colors and styles
  const sidebarBg = "bg-white dark:bg-navy-800";
  const shadow = "shadow-light dark:shadow-none";

  // SIDEBAR
  return (
    <div className={cn("hidden xl:block w-full fixed min-h-full", rest.className)}>
      <div
        className={cn(
          sidebarBg,
          shadow,
          "w-[300px] h-screen m-0 min-h-full overflow-x-hidden transition-all duration-200 ease-linear"
        )}
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <SidebarContent routes={routes} />
        </Scrollbars>
      </div>
    </div>
  );
}

// Responsive sidebar for mobile and tablet
export function SidebarResponsive(props) {
  const { routes, ...rest } = props;

  // Colors
  const sidebarBg = "bg-white dark:bg-navy-800";
  const menuColor = "text-gray-400 dark:text-white";

  // Drawer states
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className="flex xl:hidden items-center">
      <div 
        ref={btnRef} 
        className="w-max h-max cursor-pointer"
        onClick={onOpen}
      >
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          className="my-auto w-5 h-5 mr-2.5"
        />
      </div>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className={cn("w-[285px] max-w-[285px]", sidebarBg)}>
          <DrawerCloseButton
            className="z-[3] focus:outline-none focus:shadow-none hover:shadow-none"
            onClick={onClose}
          />
          <DrawerBody className="max-w-[285px] px-0 pb-0">
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <SidebarContent routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

// PropTypes
Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};

SidebarResponsive.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar; 