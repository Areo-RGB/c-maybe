/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Dashboard UI - v2.0.0
=========================================================

* Copyright 2023

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Custom components
import DefaultAuth from "layouts/auth/Default";
// Assets
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("white", "white");
  const textColorSecondary = "gray.200";
  const textColorDetails = useColorModeValue("white", "white");
  const textColorBrand = useColorModeValue("white", "white");
  const brandStars = useColorModeValue("white", "white");
  const inputBg = useColorModeValue("whiteAlpha.200", "whiteAlpha.200");
  const inputColor = useColorModeValue("white", "white");

  // State
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Navigation and toast
  const navigate = useNavigate();
  const toast = useToast();

  // Handlers
  const handleClick = () => setShow(!show);
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials
    const validUsername = "Finley";
    const validPassword = "1234";
    
    if (username === validUsername && password === validPassword) {
      // Success: Store login state in localStorage and redirect
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", username);
      
      toast({
        title: "Login successful!",
        description: `Welcome back, ${username}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      
      // Redirect to dashboard
      navigate("/admin");
    } else {
      // Failed login
      setError("Invalid username or password");
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <DefaultAuth>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px' className="auth-text-shadow">
            Sign In
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='500'
            fontSize='md'
            className="auth-text-shadow">
            Enter your username and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='rgba(0, 0, 0, 0.5)'
          backdropFilter="blur(8px)"
          borderRadius='15px'
          border="1px solid"
          borderColor="whiteAlpha.200"
          p="30px"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.2)"
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}
          className="auth-form-container">
          <FormControl>
            {error && (
              <Text color="red.300" mb="15px" fontSize="sm" textAlign="center">
                {error}
              </Text>
            )}
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'
              className="auth-text-shadow">
              Username<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Enter username'
              mb='24px'
              fontWeight='500'
              size='lg'
              bg={inputBg}
              color={inputColor}
              borderColor="whiteAlpha.200"
              _focus={{ borderColor: "whiteAlpha.400" }}
              _hover={{ borderColor: "whiteAlpha.300" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'
              className="auth-text-shadow">
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                placeholder='Enter password'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                variant='auth'
                bg={inputBg}
                color={inputColor}
                borderColor="whiteAlpha.200"
                _focus={{ borderColor: "whiteAlpha.400" }}
                _hover={{ borderColor: "whiteAlpha.300" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='center'>
                <Checkbox
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  fontWeight='normal'
                  color={textColor}
                  fontSize='sm'
                  className="auth-text-shadow">
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <NavLink to='/auth/forgot-password'>
                <Text
                  color={textColorBrand}
                  fontSize='sm'
                  w='124px'
                  fontWeight='500'
                  className="auth-text-shadow">
                  Forgot password?
                </Text>
              </NavLink>
            </Flex>
            <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'
              onClick={handleLogin}>
              Sign In
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
