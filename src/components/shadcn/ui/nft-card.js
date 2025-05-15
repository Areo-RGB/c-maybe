import React, { useState } from "react";
import { Card } from "components/shadcn/ui/card";
import { Box } from "components/shadcn/ui/box";
import { Flex } from "components/shadcn/ui/flex";
import { Text } from "components/shadcn/ui/text";
import { Image } from "components/shadcn/ui/image";
import { Link } from "components/shadcn/ui/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

export function NFTCard(props) {
  const { image, name, author, bidders, download, currentbid } = props;
  const [like, setLike] = useState(false);
  
  // Tailwind dark mode classes
  const textColor = "text-navy-700 dark:text-white";
  const textColorBid = "text-brand-500 dark:text-white";
  
  return (
    <Card className="p-5">
      <Flex className="flex-col justify-center">
        <Box className="mb-5 relative">
          <Image
            src={image}
            alt={name}
            className="w-full h-full rounded-[20px]"
          />
          <button
            className="absolute bg-white hover:bg-white/90 p-0 top-[14px] right-[14px] rounded-full min-w-[36px] h-[36px] flex items-center justify-center"
            onClick={() => setLike(!like)}
          >
            {like ? (
              <IoHeart className="w-5 h-5 text-brand-500 transition-all duration-200" />
            ) : (
              <IoHeartOutline className="w-5 h-5 text-brand-500 transition-all duration-200" />
            )}
          </button>
        </Box>
        
        <Flex className="flex-col justify-between h-full">
          <Flex className="justify-between flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row mb-auto">
            <Flex className="flex-col">
              <Text className={`${textColor} text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-md 3xl:text-lg mb-[5px] font-bold mr-[14px]`}>
                {name}
              </Text>
              <Text className="text-secondaryGray-600 text-sm font-normal mr-[14px]">
                {author}
              </Text>
            </Flex>
            
            <div className="flex mt-0 md:mt-[10px] lg:mt-0 xl:mt-[10px] 2xl:mt-0">
              {bidders && bidders.length > 0 && (
                <div className="flex -space-x-2 overflow-hidden">
                  {bidders.slice(0, 3).map((avt, key) => (
                    <img
                      key={key}
                      src={avt}
                      alt={`Bidder ${key}`}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    />
                  ))}
                  {bidders.length > 3 && (
                    <span className={`flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-navy-700 text-xs ${textColorBid} font-medium ring-2 ring-white`}>
                      +{bidders.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Flex>
          
          <Flex className="items-start justify-between flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row mt-[25px]">
            <Text className={`font-bold text-sm ${textColorBid}`}>
              Current Bid: {currentbid}
            </Text>
            <Link 
              href={download}
              className="mt-0 md:mt-[10px] lg:mt-0 xl:mt-[10px] 2xl:mt-0"
            >
              <button className="bg-brand-900 dark:bg-brand-400 text-white text-sm font-medium rounded-[70px] px-6 py-[5px]">
                Place Bid
              </button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
} 