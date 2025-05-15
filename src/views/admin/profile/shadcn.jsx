/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Dashboard UI - Shadcn Migration
=========================================================

* Copyright 2023

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Shadcn imports
import { Box } from "components/shadcn/ui/box";
import { SimpleGrid } from "components/shadcn/ui/simple-grid";

// Custom components - Use migrated Shadcn components
import BannerShadcn from "views/admin/profile/components/BannerShadcn";

// For components not yet migrated to Shadcn, use originals
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";

export default function ShadcnProfile() {
  return (
    <Box className="pt-20 md:pt-20 xl:pt-20">
      {/* Main Fields */}
      <SimpleGrid 
        columns={{ base: 1, lg: 3 }}
        className="gap-5"
        style={{ 
          gridTemplateColumns: {
            base: "1fr",
            lg: "1.34fr 1fr 1.62fr"
          }
        }}
      >
        <Box 
          className="col-span-1"
          style={{ gridArea: {base: "1 / 1 / 2 / 2"} }}
        >
          <BannerShadcn
            banner={banner}
            avatar={avatar}
            name='Adela Parkson'
            job='Product Designer'
            posts='17'
            followers='9.7k'
            following='274'
          />
        </Box>
        <Box 
          className="col-span-1"
          style={{ gridArea: {base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3"} }}
        >
          <Storage
            used={25.6}
            total={50}
          />
        </Box>
        <Box 
          className="col-span-1"
          style={{ 
            gridArea: {base: "3 / 1 / 4 / 2", lg: "1 / 3 / 2 / 4"},
            minHeight: {base: "auto", lg: "420px", "2xl": "365px"},
            paddingRight: "20px", 
            paddingBottom: {base: "100px", lg: "20px"}
          }}
        >
          <Upload />
        </Box>
      </SimpleGrid>
      
      <SimpleGrid 
        columns={{ base: 1, lg: 2, "2xl": 3 }}
        className="gap-5 mb-5 mt-5"
        style={{ 
          gridTemplateColumns: {
            base: "1fr",
            lg: "repeat(2, 1fr)",
            "2xl": "1.34fr 1.62fr 1fr"
          }
        }}
      >
        <Box
          className="col-span-1"
          style={{ gridArea: "1 / 2 / 2 / 2" }}
        >
          <Projects
            banner={banner}
            avatar={avatar}
            name='Adela Parkson'
            job='Product Designer'
            posts='17'
            followers='9.7k'
            following='274'
          />
        </Box>
        <Box 
          className="col-span-1"
          style={{ 
            gridArea: {base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3"},
            minHeight: "365px",
            paddingRight: "20px"
          }}
        >
          <General />
        </Box>
        <Box 
          className="col-span-1"
          style={{ 
            gridArea: {
              base: "3 / 1 / 4 / 2",
              lg: "2 / 1 / 3 / 3",
              "2xl": "1 / 3 / 2 / 4"
            }
          }}
        >
          <Notifications
            used={25.6}
            total={50}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
} 