import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NavbarLinks from "./NavbarLinks";
import { cn } from "../../../lib/utils";
import { Link } from "../ui/link";
import { Text } from "../ui/text";

function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const { secondary, message, brandText, logoText, ...rest } = props;

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  // Dynamic styles
  const mainText = "text-navy-700 dark:text-white";
  const secondaryText = "text-gray-700 dark:text-white";
  const navbarBg = "bg-[rgba(244,247,254,0.2)] dark:bg-[rgba(11,20,55,0.5)]";
  const navbarShadow = scrolled ? "shadow-md" : "shadow-none";
  const navbarBorder = "border-transparent";
  const secondaryMargin = secondary ? "mt-0" : "";
  const paddingX = "px-[15px] md:px-[10px]";

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed z-40",
        navbarBg,
        navbarShadow,
        "border-[1.5px] border-solid",
        navbarBorder,
        "backdrop-blur-xl bg-no-repeat bg-center bg-cover",
        "rounded-2xl",
        secondary ? "block" : "flex",
        "min-h-[75px]",
        secondaryMargin,
        paddingX,
        "right-[12px] md:right-[30px] lg:right-[30px] xl:right-[30px]",
        "pt-2 pb-2",
        "top-[12px] md:top-[16px] lg:top-[20px] xl:top-[20px]",
        "w-[calc(100vw-6%)] md:w-[calc(100vw-8%)] lg:w-[calc(100vw-6%)] xl:w-[calc(100vw-350px)] 2xl:w-[calc(100vw-365px)]",
        "items-center xl:items-center",
        "justify-center",
        "transition-all duration-250 ease-linear",
        rest.className
      )}
    >
      <div
        className={cn(
          "w-full",
          "flex sm:flex-col md:flex-row",
          "items-center xl:items-center",
          "mb-0"
        )}
      >
        <div className="mb-0 sm:mb-2 md:mb-0">
          <div className="breadcrumb-container">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link 
                    href="#" 
                    className={cn("text-sm", secondaryText)}
                  >
                    Pages
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link 
                      href="#" 
                      className={cn("text-sm", secondaryText)}
                    >
                      {brandText}
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <Link
            className={cn(
              mainText,
              "bg-inherit rounded-md font-bold text-[34px] hover:no-underline focus:outline-none"
            )}
            href="#"
          >
            {brandText}
          </Link>
        </div>
        <div className="ms-auto w-full sm:w-full md:w-auto">
          <NavbarLinks
            onOpen={rest.onOpen}
            logoText={logoText}
            secondary={secondary}
            fixed={rest.fixed}
            scrolled={scrolled}
          />
        </div>
      </div>
      {secondary ? <Text className="text-white">{message}</Text> : null}
    </div>
  );
}

Navbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
  logoText: PropTypes.string,
  message: PropTypes.string,
};

export default Navbar; 