import React from "react";
import { Box } from "components/shadcn/ui/box";
import { Flex } from "components/shadcn/ui/flex";
import { Text } from "components/shadcn/ui/text";
import { Link } from "components/shadcn/ui/link";

// Assets
import banner from "assets/img/nfts/NftBanner1.png";

export default function BannerShadcn() {
  return (
    <Flex
      className="flex-col rounded-[30px] py-[30px] md:py-[56px] px-[30px] md:px-[64px]"
      style={{ 
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover'
      }}
    >
      <Text
        className="text-2xl md:text-[34px] text-white mb-3.5 font-bold leading-8 md:leading-[42px] max-w-full md:max-w-[64%] lg:max-w-[46%] xl:max-w-[70%] 2xl:max-w-[50%] 3xl:max-w-[42%]"
      >
        Discover, collect, and sell extraordinary NFTs
      </Text>
      <Text
        className="text-md text-[#E3DAFF] font-medium mb-10 leading-7 max-w-full md:max-w-[64%] lg:max-w-[40%] xl:max-w-[56%] 2xl:max-w-[46%] 3xl:max-w-[34%]"
      >
        Enter in this creative world. Discover now the latest NFTs or start
        creating your own!
      </Text>
      <Flex className="items-center">
        <button
          className="bg-white text-black hover:bg-white/90 active:bg-white font-medium text-sm py-5 px-[27px] mr-[38px] rounded-lg"
        >
          Discover now
        </button>
        <Link className="text-white text-sm font-medium">
          Watch video
        </Link>
      </Flex>
    </Flex>
  );
} 