import React from "react";
import { 
  Text, 
  Image, 
  Flex, 
  VStack, 
  Stack, 
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure, 
  ModalCloseButton,
} from "@chakra-ui/react";


type Props = {
    name: string;
    about: string;
    img: string;
}

const CouncillorCard = ({ name, about, img }: Props) => {
    const {isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
        <Flex 
            shadow="lg" 
            bgColor="white" 
            borderRadius={["xl", "xl", "xl"]}
            pb={[2, 2, 0]}
            mb={8} 
            w={["100%", "100%", "100%", "80%"]}
            direction={["column", "column", "row"]}
        >
            <Image src={img} alt={name} mr={[0, 0, 8]} />
            <VStack 
                py={[1, 1, 4]} 
                pr={4} 
                pl={[4, 4, 0]}
                alignItems={["center", "center", "flex-start"]} 
                justify="center"
                mt={[2, 2, 0]}
            >
                <Stack 
                    direction={["column", "column", "row"]} 
                    alignItems={["center", "center", "flex-start"]} 
                    justify="center"
                    w={["full", "full", "initial"]}
                >
                    <Text color="pryClr" fontWeight={600} fontSize={["sm", "sm", "md"]} mr={[0, 0, 14, 10]}>Name:</Text>
                    <Text color="#02073E" fontWeight={600} fontSize={["sm", "sm", "md"]}>{name}</Text>
                </Stack>
                <Stack 
                    direction={["column", "column", "row"]} 
                    alignItems={["center", "center", "flex-start"]} 
                    justifyContent={["center", "center", "unset"]}
                    w={["full", "full", "initial"]}
                >
                    <Text color="pryClr" fontWeight={600} fontSize={["sm", "sm", "md"]} mr={[0, 0, 0, 3]}>About me:</Text>
                    <Text color="#02073E" fontWeight={600} fontSize={["xs", "xs", "sm"]} w={["100%", "100%", "70%"]}>{about}</Text>
                </Stack>
                <Button 
                    color="#FFF" 
                    fontSize="md" 
                    fontWeight={600} 
                    rounded="lg" 
                    bgColor="pryClr" 
                    py={3} 
                    px={4}

                    transform={["translate(0, 2px)", "translate(0, 2px)", "translate(100px, 15px)" ]} 
                    w="70%"
                    _hover={{
                        bgColor: "pryClr",
                    }}
                    _active={{
                        bgColor: "pryClr",
                    }}
                    _focus={{
                        bgColor: "pryClr"
                    }}
                    onClick={onOpen}
                > 
                    Dial In
                </Button>
            </VStack>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Box h={100}>
                        <Text>Modal for {name} is Opened</Text>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
  )
}

export default CouncillorCard