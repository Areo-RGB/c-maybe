// Shadcn imports
import { Box } from "components/shadcn/ui/box";
import { Flex } from "components/shadcn/ui/flex";
import { Text } from "components/shadcn/ui/text";
import { Card } from "components/shadcn/ui/card";
import { Image } from "components/shadcn/ui/image";
import { Link } from "components/shadcn/ui/link";
import React from "react";
// Assets
import { MdEdit } from "react-icons/md";

export default function ProjectShadcn(props) {
  const { title, ranking, link, image, className, ...rest } = props;
  // Tailwind dark mode classes
  const textColorPrimary = "text-gray-900 dark:text-white";
  const textColorSecondary = "text-gray-400";
  const brandColor = "text-brand-500 dark:text-white";
  const bgColor = "bg-white dark:bg-navy-700";
  
  return (
    <Card className={`${bgColor} p-3.5 ${className || ''}`} {...rest}>
      <Flex className="items-center flex-col md:flex-row">
        <Image 
          src={image} 
          alt={title}
          width={80}
          height={80}
          className="rounded-lg mr-5"
        />
        <Box className="mt-2.5 md:mt-0">
          <Text
            className={`${textColorPrimary} font-medium text-md mb-1`}>
            {title}
          </Text>
          <Text
            className={`${textColorSecondary} font-medium text-sm`}>
            Project #{ranking} •{" "}
            <Link href={link} className={`${brandColor} font-medium text-sm`}>
              See project details
            </Link>
          </Text>
        </Box>
        <Link
          href={link}
          className="ml-auto mr-4 p-0">
          <MdEdit className="text-gray-500 h-[18px] w-[18px]" />
        </Link>
      </Flex>
    </Card>
  );
} 