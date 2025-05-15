// Shadcn imports
import { Box } from "components/shadcn/ui/box";
import { Flex } from "components/shadcn/ui/flex";
import { Text } from "components/shadcn/ui/text";
import { Card } from "components/shadcn/ui/card";
import { Image } from "components/shadcn/ui/image";
import React from "react";

export default function BannerShadcn(props) {
  const { banner, avatar, name, job, posts, followers, following } = props;
  // Tailwind classes for dark mode support
  const textColorPrimary = "text-gray-900 dark:text-white";
  const textColorSecondary = "text-gray-400";
  const borderColor = "border-white dark:border-[#111C44]";
  
  return (
    <Card className="mb-5 text-center">
      <Box
        className="w-full h-[131px] rounded-2xl"
        style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}
      />
      <div className="mx-auto mt-[-43px] relative">
        <Image
          src={avatar}
          alt={name}
          width={87}
          height={87}
          className={`rounded-full border-4 ${borderColor}`}
        />
      </div>
      <Text className={`${textColorPrimary} font-bold text-xl mt-2.5`}>
        {name}
      </Text>
      <Text className={`${textColorSecondary} text-sm`}>
        {job}
      </Text>
      <Flex className="w-max mx-auto mt-6">
        <Flex className="mx-auto mr-[60px] items-center flex-col">
          <Text className={`${textColorPrimary} text-2xl font-bold`}>
            {posts}
          </Text>
          <Text className={`${textColorSecondary} text-sm font-normal`}>
            Posts
          </Text>
        </Flex>
        <Flex className="mx-auto mr-[60px] items-center flex-col">
          <Text className={`${textColorPrimary} text-2xl font-bold`}>
            {followers}
          </Text>
          <Text className={`${textColorSecondary} text-sm font-normal`}>
            Followers
          </Text>
        </Flex>
        <Flex className="mx-auto items-center flex-col">
          <Text className={`${textColorPrimary} text-2xl font-bold`}>
            {following}
          </Text>
          <Text className={`${textColorSecondary} text-sm font-normal`}>
            Following
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
} 