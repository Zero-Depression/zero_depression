import { Flex, HStack, Text, Link, Box } from "@chakra-ui/react";
import { FaTwitter, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import SpacedContainer from "./SpacedContainer";
import "./styles/share.css";
import TalkButton from "./TalkButton";

type Props = {
  buttonIsVisible?: boolean;
  iconsIsVisible?: boolean;
};

const ShareComponent = ({ buttonIsVisible, iconsIsVisible }: Props) => {
  return (
    <SpacedContainer>
      <Flex
        bgColor="pryClr"
        rounded="xl"
        direction={["column", "column", "row"]}
        align="center"
        justify="space-around"
        height="200px"
        className="share-container"
        py={4}
        px={[2, 2, 0]}
        my={8}
      >
        <Text
          w={["100%, 100%", "42%"]}
          color="white"
          fontSize={["xl", "xl", "2xl"]}
          fontWeight={700}
          textAlign={["center", "center", "left"]}
        >
          {buttonIsVisible
            ? "Connect with the most compassionate councillors for free"
            : " Share ZeroDepression With Your Friends And Family"}
        </Text>
        {iconsIsVisible && (
          <HStack
            className="share-logos"
            position="relative"
            w={["100%, 100%", "15%"]}
          >
            <Link
            href="https://twitter.com/intent/tweet?text=Chat%20with%20a%20counsellor%20now%0Ahttps%3A//www.zerodepression.org"
              textDecoration="none"
              fontSize="30px"
              _hover={{
                textDecoration: "none"
              }}
              _active={{
                textDecoration: "none",
              }}
              _focus={{
                textDecoration: "none",
              }}
            >
              <FaTwitter color="#55ACEE" />
            </Link>
            <Link
               href="https://web.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fweb.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.zerodepression.org&cancel_url=https%3A%2F%2Fweb.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
              textDecoration="none"
              _hover={{
                textDecoration: "none"
              }}
              fontSize="30px"
              _active={{
                textDecoration: "none",
              }}
              _focus={{
                textDecoration: "none",
              }}
            >
              <FaFacebookMessenger color="#1542DF" />
            </Link>
            <Link
               href="https://whatsapp.com"
              textDecoration="none"
              _hover={{
                textDecoration: "none"
              }}
              fontSize="30px"
              _active={{
                textDecoration: "none",
              }}
              _focus={{
                textDecoration: "none",
              }}
             
            >
              <FaWhatsapp color="#00E676" />
            </Link>
          </HStack>
        )}

        {buttonIsVisible && (
          <Box className="share-logos" 
          w={["100%, 100%", "15%"]} 
          display="flex" 
          alignItems="center" 
          justify-Content="center" 
          position="relative">
            <TalkButton
              path="/talk"
              bgColor="white"
              size="95%"
            />

          </Box>
        )}
      </Flex>
    </SpacedContainer>
  );
};

ShareComponent.defaultProp = {
  buttonIsVisible: false,
  iconsIsVisible: true,
};

export default ShareComponent;
