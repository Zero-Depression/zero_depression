import { Box, Heading, Flex, Text, Stack, Tooltip, IconButton, Link, chakra } from "@chakra-ui/react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import SpacedContainer from "../common/SpacedContainer";
import TalkButton from "../common/TalkButton";
import "./styles/header.css";

const Header = () => {
  const socials = [
    {
    id: 0,
    name: "Twitter",
    link: "https://twitter.com/zerodepression_",
    icon: FaTwitterSquare,
  },
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/officialzerodepression/",
    icon: FaInstagram,
  },
  {
    id: 2,
    name: "Youtube",
    link: "https://youtube.com/channel/UC3WrKxaxyLc0kuq5SDg2exA",
    icon: FaYoutube,
  },
  {
    id: 3,
    name: "Facebook",
    link: "https://web.facebook.com/officialzerodepression",
    icon: FaFacebookSquare,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/zero-depression/",
    icon: FaLinkedin,
  },
  
];
  return (
    <Box bgColor="#F6F8FB">
      <SpacedContainer>
        <Flex
          direction={["column", "column", "row"]}
          w="100%"
          py={[4, 4, 8]}
          justify="space-between"
          align="center"
          bgColor="#F6F8FB"
          position="relative"
        >
          <Box mb={[4, 4, 0]} w={["100%", "100%", "40%"]}>
            <Heading color="pryClr" fontSize={["4xl", "4xl", "7xl"]} textAlign={["center", "center", "left"]}>
              Zero
              <chakra.span color="#343D48" display={["inline", "inline", "block"]} ml={[2, 2, 0]}>
                Depression
              </chakra.span>
            </Heading>
            <Text
              color="#343D48"
              fontSize="md"
              fontWeight={400}
              lineHeight="32px"
              my={4}
            >
              Welcome to the safest anonymous place to restore your wellness and
              calm at <span id="accentImg"></span>, We help guide your path away from
              depression and lead you to the path of happiness.
            </Text>
            <TalkButton
              path="/talk"
              color="white"
              bgColor="pryClr"
              size={["60%", "60%", "40%"]}
              
            />
          </Box>
          <Flex align="center" direction={["column", "column", "row"]}>
          <Box 
            h={["350px", "350px", "400px"]} 
            w={["350px", "350px", "400px"]} 
            bgColor="pryClr" 
            rounded="full" 
            mr={[0, 0, 4, 10]}
            my={[6, 6, 0]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <iframe src="https://www.youtube-nocookie.com/embed/RK5Wn3H9QZE?&amp;autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          </Box>
          <Stack direction={["row", "row", "column"]}>
            {socials.map((s) => (
            <Tooltip key={s.id} label={`go to ${s.name} page`} hasArrow placement="bottom-end" bg="pryClr">
              <Link href={s.link} target="_blank">
                <IconButton
                  aria-label={`${s.name} logo`}
                  bgColor="transparent"
                  fontSize={["30px", "30px", "40px"]}
                  _hover={{
                    bgColor: "transparent",
                  }}
                  _active={{
                    bgColor: "transparent",
                  }}
                  _focus={{
                    bgColor: "transparent",
                  }}
                  icon={<s.icon color="#FFA500" />}
                />
              </Link>
            </Tooltip>
          ))}
          </Stack>
          </Flex>
        </Flex>
      </SpacedContainer>
    </Box>
  );
};

export default Header;
