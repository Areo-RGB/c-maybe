import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdNotificationsNone, MdInfoOutline } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { SidebarResponsive } from "./Sidebar";
import { Icon } from "../ui/icon";
import { Flex } from "../ui/flex";
import { Text } from "../ui/text";
import { Menu, MenuButton, MenuItem, MenuList } from "../ui/menu";
import { Image } from "../ui/image";
import { Button } from "../ui/button";
import { Link } from "../ui/link";
import { SearchBar } from "../../navbar/searchBar/SearchBar";
import { ItemContent } from "../../menu/ItemContent";
import routes from "../../../routes";
import navImage from "../../../assets/img/layout/Navbar.png";

export default function NavbarLinks(props) {
  const { secondary } = props;
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const navigate = useNavigate();
  const [username, setUsername] = useState('User');

  useEffect(() => {
    // Update darkMode state based on localStorage or system preference
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDarkMode);
    
    // Apply theme class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Get username
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  // Toggle dark mode
  const toggleColorMode = () => {
    if (darkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    
    // Use toast notification here when implemented
    // toast({
    //   title: "Logged out successfully",
    //   status: "success",
    //   duration: 2000,
    //   isClosable: true,
    // });
    
    navigate('/auth/sign-in');
  };

  // Dynamic styles
  const navbarIcon = "text-gray-400 dark:text-white";
  const menuBg = "bg-white dark:bg-navy-800";
  const textColor = "text-secondaryGray-900 dark:text-white";
  const textColorBrand = "text-brand-700 dark:text-brand-400";
  const ethColor = "text-gray-700 dark:text-white";
  const borderColor = "border-[#E6ECFA] dark:border-[rgba(135,140,189,0.3)]";
  const ethBg = "bg-secondaryGray-300 dark:bg-navy-900";
  const ethBox = "bg-white dark:bg-navy-800";
  const shadow = "shadow-[14px_17px_40px_4px_rgba(112,144,176,0.18)] dark:shadow-[14px_17px_40px_4px_rgba(112,144,176,0.06)]";
  const borderButton = "border-secondaryGray-500 dark:border-whiteAlpha-200";

  return (
    <Flex
      w={{ sm: '100%', md: 'auto' }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
    >
      <SearchBar
        mb={secondary ? { base: '10px', md: 'unset' } : 'unset'}
        me="10px"
        borderRadius="30px"
      />
      
      <Flex
        bg={ethBg}
        display={secondary ? 'flex' : 'none'}
        borderRadius="30px"
        ms="auto"
        p="6px"
        align="center"
        me="6px"
      >
        <Flex
          align="center"
          justify="center"
          bg={ethBox}
          h="29px"
          w="29px"
          borderRadius="30px"
          me="7px"
        >
          <Icon color={ethColor} w="9px" h="14px" as={FaEthereum} />
        </Flex>
        <Text
          w="max-content"
          color={ethColor}
          fontSize="sm"
          fontWeight="700"
          me="6px"
        >
          1,924
          <Text as="span" display={{ base: 'none', md: 'unset' }}>
            {' '}
            ETH
          </Text>
        </Text>
      </Flex>
      
      <SidebarResponsive routes={routes} />
      
      <Menu>
        <MenuButton p="0px">
          <Icon
            mt="6px"
            as={MdNotificationsNone}
            color={navbarIcon}
            w="18px"
            h="18px"
            me="10px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          me={{ base: '30px', md: 'unset' }}
          minW={{ base: 'unset', md: '400px', xl: '450px' }}
          maxW={{ base: '360px', md: 'unset' }}
        >
          <Flex w="100%" mb="20px">
            <Text fontSize="md" fontWeight="600" color={textColor}>
              Notifications
            </Text>
            <Text
              fontSize="sm"
              fontWeight="500"
              color={textColorBrand}
              ms="auto"
              cursor="pointer"
            >
              Mark all read
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <MenuItem
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="Dashboard Updates" />
            </MenuItem>
            <MenuItem
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="System Notifications" />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
      
      <Menu>
        <MenuButton p="0px">
          <Icon
            mt="6px"
            as={MdInfoOutline}
            color={navbarIcon}
            w="18px"
            h="18px"
            me="10px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          me={{ base: '30px', md: 'unset' }}
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          minW={{ base: 'unset' }}
          maxW={{ base: '360px', md: 'unset' }}
        >
          <Image src={navImage} borderRadius="16px" mb="28px" />
          <Flex flexDirection="column">
            <Link w="100%" href="#">
              <Button w="100%" h="44px" mb="10px" variant="brand">
                View Features
              </Button>
            </Link>
            <Link w="100%" href="#">
              <Button
                w="100%"
                h="44px"
                mb="10px"
                variant="outline"
              >
                Documentation
              </Button>
            </Link>
            <Link w="100%" href="#">
              <Button
                w="100%"
                h="44px"
                variant="no-hover"
                color={textColor}
              >
                Help & Support
              </Button>
            </Link>
          </Flex>
        </MenuList>
      </Menu>
      
      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="10px"
          h="18px"
          w="18px"
          color={navbarIcon}
          as={darkMode ? IoMdSunny : IoMdMoon}
        />
      </Button>
      
      <Menu>
        <MenuButton p="0px">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-100 text-gray-700 dark:bg-navy-700 dark:text-gray-200">
              {username.charAt(0).toUpperCase()}
            </div>
          </div>
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          me={{ base: '30px', md: 'unset' }}
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          minW={{ base: 'unset' }}
          maxW={{ base: '360px', md: 'unset' }}
        >
          <Flex flexDirection="column">
            <MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }}>
              <Text fontSize="sm" fontWeight="500">Profile Settings</Text>
            </MenuItem>
            <MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }}>
              <Text fontSize="sm" fontWeight="500">Newsletter Settings</Text>
            </MenuItem>
            <MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} onClick={handleLogout}>
              <Text fontSize="sm" fontWeight="500">Logout</Text>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

NavbarLinks.propTypes = {
  logoText: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
}; 