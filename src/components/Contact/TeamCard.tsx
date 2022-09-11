import React from "react";
import { Box, Image, HStack, Text, Link, IconButton } from "@chakra-ui/react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

type Props = {
  img: string;
  name: string;
  pos: string;
  // fLink: string;
  // tLink: string;
  // inLink: string;
};

const TeamCard = ({ 
  img, name, pos,
}: Props) => {
  return (
    <Box borderRadius="10px" w={["95%", "95%", "90%"]} boxShadow="4px 4px 4px rgba(0, 0, 0, 0.3)">
      <Box>
        <Image src={img} alt={`${name} image`} fit="contain" />
      </Box>
      <Box bgColor="white" py={2} px={4} borderBottomRadius="10px">
        <Text fontSize="lg" color="accent" fontWeight={700}>
          {name}
        </Text>
        <Text fontSize="sm" color="accent" fontWeight={500} opacity="0.6">
          {pos}
        </Text>
        {/* <HStack>
          <Link href={fLink} _hover={{ textDecoration: "none" }}>
            <IconButton
              aria-label="social icon"
              bgColor="transparent"
              fontSize="20px"
              _hover={{
                bgColor: "transparent",
              }}
              _active={{
                bgColor: "transparent",
              }}
              _focus={{
                bgColor: "transparent",
              }}
              icon={<FaFacebookSquare color="#395185" />}
            />
          </Link>
          <Link href={tLink} _hover={{ textDecoration: "none" }}>
            <IconButton
              aria-label="social icon"
              bgColor="transparent"
              fontSize="20px"
              _hover={{
                bgColor: "transparent",
              }}
              _active={{
                bgColor: "transparent",
              }}
              _focus={{
                bgColor: "transparent",
              }}
              icon={<FaLinkedin color="#0A66C2" />}
            />
          </Link>
          <Link href={inLink} _hover={{ textDecoration: "none" }}>
            <IconButton
              aria-label="social icon"
              bgColor="transparent"
              fontSize="20px"
              _hover={{
                bgColor: "transparent",
              }}
              _active={{
                bgColor: "transparent",
              }}
              _focus={{
                bgColor: "transparent",
              }}
              icon={<FaTwitterSquare color="#55ACEE" />}
            />
          </Link>
        </HStack> */}
      </Box>
    </Box>
  );
};

export default TeamCard;
