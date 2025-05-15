/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Dashboard UI - Shadcn Migration - NFT Marketplace
=========================================================

* Copyright 2023

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Shadcn imports
import { Box } from "components/shadcn/ui/box";
import { Flex } from "components/shadcn/ui/flex";
import { Text } from "components/shadcn/ui/text";
import { SimpleGrid } from "components/shadcn/ui/simple-grid";
import { Link } from "components/shadcn/ui/link";
import { Card } from "components/shadcn/ui/card";

// Custom components
import BannerShadcn from "views/admin/marketplace/components/BannerShadcn";
import HistoryItemShadcn from "views/admin/marketplace/components/HistoryItemShadcn";
import { NFTCard } from "components/shadcn/ui/nft-card";
import TableTopCreatorsShadcn from "views/admin/marketplace/components/TableTopCreatorsShadcn";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

export default function MarketplaceShadcn() {
  // Tailwind dark mode classes
  const textColor = "text-secondaryGray-900 dark:text-white";
  const textColorBrand = "text-brand-500 dark:text-white";
  
  return (
    <Box className="pt-[180px] md:pt-20 xl:pt-20">
      {/* Main Fields */}
      <div className="grid mb-5 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-[1fr_0.46fr] gap-5 xl:gap-5">
        <Flex
          className="flex-col col-span-1 xl:col-span-2 2xl:col-span-1"
        >
          <BannerShadcn />
          <Flex className="flex-col">
            <Flex
              className="mt-[45px] mb-5 justify-between flex-col md:flex-row items-start md:items-center"
            >
              <Text className={`${textColor} text-2xl font-bold ml-6`}>
                Trending NFTs
              </Text>
              <Flex
                className="items-center mr-5 ml-6 md:ml-0 mt-5 md:mt-0"
              >
                <Link
                  className={`${textColorBrand} font-medium mr-8 md:mr-11`}
                  href="#art"
                >
                  Art
                </Link>
                <Link
                  className={`${textColorBrand} font-medium mr-8 md:mr-11`}
                  href="#music"
                >
                  Music
                </Link>
                <Link
                  className={`${textColorBrand} font-medium mr-8 md:mr-11`}
                  href="#collectibles"
                >
                  Collectibles
                </Link>
                <Link
                  className={`${textColorBrand} font-medium`}
                  href="#sports"
                >
                  Sports
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} className="gap-5">
              <NFTCard
                name='Abstract Colors'
                author='By Esthera Jackson'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft1}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFTCard
                name='ETH AI Brain'
                author='By Nick Wilson'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft2}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFTCard
                name='Mesh Gradients'
                author='By Will Smith'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft3}
                currentbid='0.91 ETH'
                download='#'
              />
            </SimpleGrid>
            <Text
              className={`${textColor} text-2xl font-bold ml-6 mt-[45px] mb-9`}
            >
              Recently Added
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              className="gap-5 mb-5 xl:mb-0"
            >
              <NFTCard
                name='Swipe Circles'
                author='By Peter Will'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft4}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFTCard
                name='Colorful Heaven'
                author='By Mark Benjamin'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft5}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFTCard
                name='3D Cubes Art'
                author='By Manny Gates'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft6}
                currentbid='0.91 ETH'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          className="flex-col col-span-1 xl:col-span-1 2xl:col-span-1"
        >
          <Card className="px-0 mb-5">
            <TableTopCreatorsShadcn
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card className="p-0">
            <Flex
              className="items-center sm:items-start lg:items-center justify-between w-full px-[22px] py-[18px]"
            >
              <Text className={`${textColor} text-xl font-semibold`}>
                History
              </Text>
              <button className="bg-transparent hover:bg-gray-100 text-brand-500 font-semibold py-2 px-4 rounded">
                See all
              </button>
            </Flex>

            <HistoryItemShadcn
              name='Colorful Heaven'
              author='By Mark Benjamin'
              date='30s ago'
              image={Nft5}
              price='0.91 ETH'
            />
            <HistoryItemShadcn
              name='Abstract Colors'
              author='By Esthera Jackson'
              date='58s ago'
              image={Nft1}
              price='0.91 ETH'
            />
            <HistoryItemShadcn
              name='ETH AI Brain'
              author='By Nick Wilson'
              date='1m ago'
              image={Nft2}
              price='0.91 ETH'
            />
            <HistoryItemShadcn
              name='Swipe Circles'
              author='By Peter Will'
              date='1m ago'
              image={Nft4}
              price='0.91 ETH'
            />
            <HistoryItemShadcn
              name='Mesh Gradients '
              author='By Will Smith'
              date='2m ago'
              image={Nft3}
              price='0.91 ETH'
            />
            <HistoryItemShadcn
              name='3D Cubes Art'
              author='By Manny Gates'
              date='3m ago'
              image={Nft6}
              price='0.91 ETH'
            />
          </Card>
        </Flex>
      </div>
    </Box>
  );
} 