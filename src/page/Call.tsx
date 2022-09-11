import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Heading, 
  Text, 
  Image, 
  IconButton, 
  VStack, 
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import SpacedContainer from "../components/common/SpacedContainer";
import threeDots from "../assets/3dots.png";
import fourDots from "../assets/4dots.png";
import fiveDots from "../assets/5dots.png";
import { getCounsellors, ICounsellor } from "../data/dataCounsellors";
import CouncillorCard from "../components/CouncillorCard";

const Call = () => {
    const navigate = useNavigate();
    const counsellors = getCounsellors()
  return (
    <Box bgColor="rgba(246, 248, 251, 0.5)" py={8}>
      <SpacedContainer>
        <Box display="flex" alignItems="center">
         <IconButton
            aria-label="back arrow"
            bgColor="transparent"
            fontSize="30px"
            transform="translateY(-15px)"
            _hover={{
             bgColor: "transparent"
            }}
            _active={{
             bgColor: "transparent",
            }}
            _focus={{
            bgColor: "transparent",
            }}
            icon={<BiArrowBack color="#FFA500" />}
            onClick = {() => navigate(-1)}
         />  
        <Heading
          color="pryClr"
          fontWeight="700"
          fontSize={["2xl", "2xl", "5xl"]}
          textAlign="center"
          mb={8}
          ml={[10, 10, 16, 32, 80]}
        >
          Zero
          <span style={{ color: "#0F2137", fontWeight: 500 }}>Depression</span>
        </Heading>
        </Box>
        <Box mb={8}>
          <VStack w={["100%", "100%", "50%"]} alignItems="flex-start">
            <Image
              src={threeDots}
              alt="smiley image"
              w={["10%", "10%", "10%", "8%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
            <Image
              src={fourDots}
              alt="smiley image"
              w={["15%", "15%", "15%", "12%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
            <Image
              src={fiveDots}
              alt="smiley image"
              w={["20%", "20%", "20%", "15%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
          </VStack>
        </Box>
        <Box
            bgColor="white" 
            color="pryClr"
            px={[4, 4, 8]} 
            py={[4, 4, 8]} 
            fontWeight={500} 
            shadow="2xl"
            my={[4, 4, 8]}
            w={["100%", "100%", "70%", "40%"]}
            fontSize={["md", "md", "lg"]}
        >
            <Text fontWeight={600} mr={2}> 
              “All calls are free of charge, so feel free to dial any line below“
            </Text>
        </Box>
        <VStack alignItems="flex-start" mt={6}>
            <Heading color="#000000" fontSize="2xl">Meet Our Councillors</Heading>
            <Box mt={4}>
                {
                    counsellors.map((counsel: ICounsellor) => (
                        <CouncillorCard 
                            name={counsel.name}
                            about={counsel.about}
                            img={counsel.img}
                            key= {counsel.id}
                        />
                    ))
                }
            </Box>

        </VStack>
      </SpacedContainer>
    </Box>
  )
}

export default Call