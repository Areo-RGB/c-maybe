import React from "react";
import { Box } from "components/shadcn/ui/box";
import { Flex } from "components/shadcn/ui/flex";
import { Text } from "components/shadcn/ui/text";
import { Image } from "components/shadcn/ui/image";
import { Card } from "components/shadcn/ui/card";
import { FaEthereum } from "react-icons/fa";

export default function HistoryItemShadcn(props) {
  const { image, name, author, date, price } = props;
  
  // Tailwind dark mode classes
  const textColor = "text-gray-900 dark:text-white";
  const textColorDate = "text-secondaryGray-600 dark:text-white";
  
  return (
    <Card 
      className="bg-transparent hover:bg-white dark:hover:bg-navy-700 shadow-none hover:shadow-lg px-6 py-5 transition-all duration-200"
    >
      <Flex className="flex-col justify-center">
        <Flex className="relative items-center">
          <Image 
            src={image} 
            alt={name}
            width={66} 
            height={66} 
            className="rounded-[20px] mr-4" 
          />
          <Flex 
            className="flex-col w-[70%] md:w-full mr-1 md:mr-8 xl:mr-2.5 3xl:mr-8"
          >
            <Text
              className={`${textColor} text-md mb-[5px] font-bold mr-[14px]`}>
              {name}
            </Text>
            <Text
              className="text-secondaryGray-600 text-sm font-normal mr-[14px]">
              {author}
            </Text>
          </Flex>
          <Flex className="mr-1 md:mr-8 xl:mr-2.5 3xl:mr-8 items-center">
            <FaEthereum className={`${textColor} w-[9px] mr-[7px]`} />
            <Text className={`${textColor} font-bold text-md`}>
              {price}
            </Text>
          </Flex>
          <Text className={`ml-auto font-bold text-sm ${textColorDate}`}>
            {date}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
} 