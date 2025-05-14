/*eslint-disable*/
import React from "react";
import {
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  let linkColor = useColorModeValue({ base: "gray.400", lg: "white" }, "white");
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "0px" }}
      pb='30px'>
      {/* Footer content removed */}
    </Flex>
  );
}
