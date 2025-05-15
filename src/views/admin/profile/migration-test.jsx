/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Dashboard UI - Migration Test Page
=========================================================

*/

// Chakra imports
import { Box, Flex, Grid, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import BannerShadcn from "views/admin/profile/components/BannerShadcn";
import Information from "views/admin/profile/components/Information";
import InformationShadcn from "views/admin/profile/components/InformationShadcn";
import Project from "views/admin/profile/components/Project";
import ProjectShadcn from "views/admin/profile/components/ProjectShadcn";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import project1 from "assets/img/profile/Project1.png";
import project2 from "assets/img/profile/Project2.png";

export default function MigrationTest() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.100");
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Page Title */}
      <Text
        color={textColor}
        fontSize='2xl'
        ms='24px'
        mb='32px'
        fontWeight='700'
      >
        Migration Test - Component Comparison
      </Text>

      {/* Banner Component Comparison */}
      <Text
        color={textColor}
        fontSize='xl'
        ms='24px'
        mb='20px'
        fontWeight='700'
      >
        Banner Component
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' mb='40px'>
        <Box>
          <Text
            color={textColor}
            fontSize='lg'
            mb='10px'
            fontWeight='600'
            textAlign='center'
          >
            Original (Chakra UI)
          </Text>
          <Banner
            banner={banner}
            avatar={avatar}
            name="Jane Smith"
            job="Product Designer"
            posts="17"
            followers="9.7k"
            following="274"
          />
        </Box>
        
        <Box>
          <Text
            color={textColor}
            fontSize='lg'
            mb='10px'
            fontWeight='600'
            textAlign='center'
          >
            Migrated (Shadcn UI)
          </Text>
          <BannerShadcn
            banner={banner}
            avatar={avatar}
            name="Jane Smith"
            job="Product Designer"
            posts="17"
            followers="9.7k"
            following="274"
          />
        </Box>
      </SimpleGrid>
      
      {/* Information Component Comparison */}
      <Text
        color={textColor}
        fontSize='xl'
        ms='24px'
        mb='20px'
        fontWeight='700'
      >
        Information Component
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' mb='40px'>
        <Box>
          <Text
            color={textColor}
            fontSize='lg'
            mb='10px'
            fontWeight='600'
            textAlign='center'
          >
            Original (Chakra UI)
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px'>
            <Information
              title="Education"
              value="Stanford University"
            />
            <Information
              title="Languages"
              value="English, Spanish, Italian"
            />
            <Information
              title="Department"
              value="Product Design"
            />
            <Information
              title="Work History"
              value="Google, Apple"
            />
          </SimpleGrid>
        </Box>
        
        <Box>
          <Text
            color={textColor}
            fontSize='lg'
            mb='10px'
            fontWeight='600'
            textAlign='center'
          >
            Migrated (Shadcn UI)
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px'>
            <InformationShadcn
              title="Education"
              value="Stanford University"
            />
            <InformationShadcn
              title="Languages"
              value="English, Spanish, Italian"
            />
            <InformationShadcn
              title="Department"
              value="Product Design"
            />
            <InformationShadcn
              title="Work History"
              value="Google, Apple"
            />
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      
      {/* Project Component Comparison */}
      <Text
        color={textColor}
        fontSize='xl'
        ms='24px'
        mb='20px'
        fontWeight='700'
      >
        Project Component
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' mb='40px'>
        <Box>
          <Text
            color={textColor}
            fontSize='lg'
            mb='10px'
            fontWeight='600'
            textAlign='center'
          >
            Original (Chakra UI)
          </Text>
          <Flex direction="column" gap="20px">
            <Project
              title="Horizon UI Dashboard"
              ranking={1}
              link="#"
              image={project1}
            />
            <Project
              title="Horizon UI Design System"
              ranking={2}
              link="#"
              image={project2}
            />
          </Flex>
        </Box>
        
        <Box>
          <Text
            color={textColor}
            fontSize='lg'
            mb='10px'
            fontWeight='600'
            textAlign='center'
          >
            Migrated (Shadcn UI)
          </Text>
          <Flex direction="column" gap="20px">
            <ProjectShadcn
              title="Horizon UI Dashboard"
              ranking={1}
              link="#"
              image={project1}
            />
            <ProjectShadcn
              title="Horizon UI Design System"
              ranking={2}
              link="#"
              image={project2}
            />
          </Flex>
        </Box>
      </SimpleGrid>
      
      {/* Migration Notes */}
      <Box
        p='20px'
        borderWidth='1px'
        borderColor={borderColor}
        borderRadius='20px'
        mb='20px'
      >
        <Text
          color={textColor}
          fontSize='lg'
          mb='10px'
          fontWeight='700'
        >
          Migration Notes
        </Text>
        <Text fontSize='md' mb='10px'>
          This page demonstrates the visual comparison between original Chakra UI components and their
          Shadcn UI equivalents. Key changes include:
        </Text>
        <Text fontSize='md' mb='5px'>• Replacing Chakra's styling props with Tailwind classes</Text>
        <Text fontSize='md' mb='5px'>• Converting theme-based color references to Tailwind classes</Text>
        <Text fontSize='md' mb='5px'>• Maintaining dark/light mode compatibility</Text>
        <Text fontSize='md' mb='5px'>• Using Shadcn's component structure and styling approach</Text>
      </Box>
    </Box>
  );
} 