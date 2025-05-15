import React from "react";
import { HorizonLogo } from "../../icons/Icons";
import { Separator } from "../ui/separator";

function SidebarBrand() {
  // Color for the logo
  const logoColor = "text-navy-700 dark:text-white";

  return (
    <div className="flex items-center flex-col">
      <HorizonLogo className={`h-[26px] w-[175px] my-8 ${logoColor}`} />
      <Separator className="mb-5 w-full" />
    </div>
  );
}

export default SidebarBrand; 