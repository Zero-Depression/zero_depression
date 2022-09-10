import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Tooltip,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SpacedContainer from "./SpacedContainer";

const socials = [
  {
    id: 0,
    name: "Facebook",
    link: "https://web.facebook.com/officialzerodepression",
    icon: FaFacebookSquare,
  },
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com/zerodepression_",
    icon: FaTwitterSquare,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/zero-depression/",
    icon: FaLinkedin,
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://www.instagram.com/officialzerodepression/",
    icon: FaInstagram,
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <SpacedContainer>
      <Flex
        mt={4}
        py={4}
        direction={["column", "column", "column", "row"]}
        align="center"
        justify="space-between"
      >
        <Box display="flex" alignItems="center" flexDirection={["column", "column", "row"]}>
          <Text color="pryClr" fontSize="md" fontWeight="400">
            Zero
            <span style={{ color: "#0F2137" }}>Depression</span>
          </Text>
          <Text
            color="accent"
            fontSize="md"
            fontWeight="400"
            opacity="0.6"
            ml={3}
          >
            Copyright by {year} ZeroDepression
          </Text>
        </Box>
        <HStack>
          {socials.map((s) => (
            <Tooltip key={s.id} label={`go to ${s.name} page`} hasArrow placement="bottom-end" bg="accent">
              <ChakraLink href={s.link} target="_blank">
                <IconButton
                  aria-label={`${s.name} logo`}
                  bgColor="transparent"
                  fontSize="30px"
                  _hover={{
                    bgColor: "transparent",
                  }}
                  _active={{
                    bgColor: "transparent",
                  }}
                  _focus={{
                    bgColor: "transparent",
                  }}
                  icon={<s.icon color="rgba(2, 7, 62, 0.74)" />}
                />
              </ChakraLink>
            </Tooltip>
          ))}
        </HStack>
        <HStack flexDirection={["column", "column", "row"]}>
          <Link to="/home">
            <Text
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            _hover={{
              textDecoration: "none",
            }}
            >
              Home
            </Text>
          </Link>
          <Link to="/about">
            <Text
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
             _hover={{
              textDecoration: "none",
            }}
            >
              About Us
            </Text>
          </Link>
          <Link to="/contact">
            <Text
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
             _hover={{
              textDecoration: "none",
            }}
            >
              Contact Us
            </Text>
          </Link>
          <Link to="terms-and-policies">
            <Text
             _hover={{
              textDecoration: "none",
            }}
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            >
              Terms of use
            </Text>
          </Link>
          <Link to="terms-and-policies">
            <Text
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            _hover={{
              textDecoration: "none",
            }}
            >
              Privacy Policies
            </Text>
          </Link>
        </HStack>
      </Flex>
    </SpacedContainer>
  );
};

export default Footer;
