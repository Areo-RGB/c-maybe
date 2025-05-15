// Chakra imports
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import Footer from "components/footer/FooterAuth";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
// Custom components
import { NavLink } from "react-router-dom";
// Assets
import { FaChevronLeft } from "react-icons/fa";

function AuthIllustration(props) {
  const { children } = props;
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays automatically
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Error playing video:", err);
      });
    }
  }, []);
  
  // Chakra color mode
  return (
    <Flex position='relative' h='max-content'>
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        overflow="hidden"
        zIndex="0"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.600"
          zIndex="1"
          className="auth-overlay"
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
          }}
        >
          <source
            src="https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/DJI_20250511145110_0050_D%20-%20(4x5)_2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Flex
        position="relative"
        zIndex="2"
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w='100%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent='start'
        direction='column'>
        <NavLink
          to='/admin'
          style={() => ({
            width: "fit-content",
            marginTop: "40px",
          })}>
          <Flex
            align='center'
            ps={{ base: "25px", lg: "0px" }}
            pt={{ lg: "0px", xl: "0px" }}
            w='fit-content'>
            <Icon
              as={FaChevronLeft}
              me='12px'
              h='13px'
              w='8px'
              color='white'
            />
            <Text ms='0px' fontSize='sm' color='white' className="auth-text-shadow">
              Back to Dashboard
            </Text>
          </Flex>
        </NavLink>
        {children}
        <Footer />
      </Flex>
      <FixedPlugin />
    </Flex>
  );
}
// PROPS

AuthIllustration.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthIllustration;
