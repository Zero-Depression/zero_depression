import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Heading, 
  Text, 
  Image, 
  Flex, 
  IconButton, 
  VStack, 
  HStack, 
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure, 
  ModalCloseButton,
  RadioGroup, 
  Radio,
  Textarea,
  Tooltip,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import SpacedContainer from "../components/common/SpacedContainer";
import threeDots from "../assets/3dots.png";
import fourDots from "../assets/4dots.png";
import fiveDots from "../assets/5dots.png";
import chatSmiley from "../assets/chatSmiley.png";
import exSat from "../assets/exSat.svg";
import satisfied from "../assets/satisfied.svg";
import annoyed from "../assets/annoyed.svg";
import "../components/HomeComponents/styles/chat.css";

type Props = {}

const Chat = (props: Props) => {
  const navigate = useNavigate();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [reply, setReply] = useState("");
  const [cancel, setCancel] = useState(true);
  const [feedback, setShowFeedback] = useState(false);
  const [value, setValue] = useState("");
  const [comment, setComment] = useState("")
  const [showForm, setShowForm] = useState(false);
  const [showSent, setShowSent] = useState(false);

//social lists
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
  // const handleEndChat = () => {
  //   alert("Chat Ended")
  // };

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
              w={["10%", "10%", "8%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
            <Image
              src={fourDots}
              alt="smiley image"
              w={["12%", "12%", "12%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
            <Image
              src={fiveDots}
              alt="smiley image"
              w={["14%", "14%", "15%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
          </VStack>
        </Box>
        <Text color="black" fontSize="sm" fontStyle="italic" my={3} ml={[3, 3, 8]}>Typing..........</Text>
        <Flex w={["100%", "100%", "50%"]} alignItems="flex-start">
            <Image
              src={chatSmiley}
              alt="smiley image"
              w={["10%", "10%", "8%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
            <Box mt={6}>
              <Text
                color="white"
                bgColor="pryClr"
                fontWeight={500}
                fontSize="lg"
                py={2}
                px={8}
                w="fit-content"
                rounded="full"
                className="angle"
                position="relative"
              >
                Hello Champion !!!
              </Text>
              <Text
                color="white"
                bgColor="pryClr"
                fontWeight={500}
                fontSize="lg"
                py={2}
                px={8}
                rounded="full"
                // className="angle"
                position="relative"
                my={4}
              >
                What should our councillor call you ?
              </Text>
            </Box>
          </Flex>
            <HStack
              bgColor="white" 
              color="pryClr"
              px={8} 
              py={4} 
              fontWeight={500} 
              shadow="xl"
              ml={[0, 0, 20]}
              w={["100%", "100%", "40%"]}
              fontSize={["md", "md", "lg"]}
            >
              <Text fontWeight={700} mr={2}> 
                Note:
              </Text>
              <Text>
                You can reply in the reply section
                Click send or enter key to send reply
              </Text>
            </HStack>
            <Box h="50vh" w="100%" my={4}>

            </Box>
            <VStack align="center" w="full" >
              <Button
                bgColor="transparent"
                color="pryClr"
                rounded="lg"
                border="2px solid #FFA500" 
                py={4}
                px={6}
                _hover={{
                  bgColor: "transparent",
                }}
                // _active={{
                //   outline: "none"
                // }}
                // _focus={{
                //   outline: "none"
                // }}
                onClick={onOpen}
              >
                End Chat
              </Button>
              <Flex w="full" transform="translateY(20px)">
                <Input
                  p={4}
                  placeholder="Type here......."
                  color="accent"
                  w="90%"
                  onChange={(e) => setReply(e.target.value)}
                  value = {reply}
                  borderColor="pryClr"
                  borderWidth="2px"
                  display="inline-block"
                  _focus={{
                    outline: "none"
                  }}
                />
                <Button
                  bgColor="pryClr"
                  color="white"
                  rounded="lg"
                  border="2px solid #FFA500" 
                  py={4}
                  px={6}
                  display="flex"
                  alignItems="center"
                  _hover={{
                    bgColor:"pryClr",
                    color:"white"
                  }}
                  _active={{
                    bgColor:"pryClr",
                    color:"white",
                    outline: "none"
                  }}
                  _focus={{
                    outline: "none"
                  }}
              >
                <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 3L16.5 19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M33 3L22.5 33L16.5 19.5L3 13.5L33 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <Text ml={3}>Reply</Text>
              </Button>
              </Flex>
            </VStack>
            {/* modal overlay */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
               <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  {
                    cancel && (
                    <Box 
                    rounded="xl" 
                    p={6} 
                    bgColor="white" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    flexDirection="column"
                  >
                    <Text color="black" fontWeight={400} fontSize="md">Chat ended can not be viewed again, do you want to end chat? </Text>
                    <HStack mt={6}>
                      <Button 
                        bgColor="pryClr" 
                        color="white" 
                        fontSize="md"
                        _hover={{
                          bgColor: "pryClr"
                        }}
                        _focus={{
                          outline: "none"
                        }}
                        _active={{
                          bgColor: "pryClr"
                        }}
                        onClick={() => {
                          setCancel(false);
                          setShowFeedback(!feedback);
                        }}
                      >
                        Yes
                      </Button>
                      <Button
                        bgColor="transparent" 
                        color="pryClr" 
                        fontSize="md"
                        borderColor="pryClr"
                        borderWidth="2px"
                        _hover={{
                          bgColor: "transparent"
                        }}
                        _focus={{
                          outline: "none"
                        }}
                        _active={{
                          bgColor: "transparent"
                        }}
                        onClick={onClose}
                      >
                        No
                      </Button>
                    </HStack>
                    </Box>
                    )
                  }
                  {
                    feedback && (
                      <Box p={2}>
                        <Text color="accent" fontSize="lg" fontWeight={700}>Give Us Your Feedback</Text>
                        <Text color="accent" fontSize={["sm", "sm", "sm"]} fontWeight={300} w={["100%", "100%", "80%"]}>React with an emoji, how satisfied are you with your Counsellor?</Text>
                        <RadioGroup mt={20} w="full" onChange={setValue} value={value}>
                          <HStack mt={4} w="full" justifyContent="space-between">
                            <Radio position="relative" value="not satisfied" colorScheme="yellow" _active={{outline: "none"}} _focus={{outline: "none"}}>
                              <Image src={annoyed} alt="" position="absolute" maxWidth="30%" top={-8} right={5}/>
                              <Text fontSize="xs" color="#000">Not Satisfied</Text>
                            </Radio>
                            <Radio position="relative" value="satisfied" colorScheme="yellow" _active={{outline: "none"}} _focus={{outline: "none"}}>
                              <Image src={satisfied} alt="" position="absolute" maxWidth="35%" top={-8} right={5}/>
                              <Text fontSize="xs" color="#000">Satisfied</Text>
                            </Radio>
                            <Radio position="relative" value="extremely satisfied" colorScheme="yellow" _active={{outline: "none"}} _focus={{outline: "none"}}>
                              <Image src={exSat} alt="" position="absolute" maxWidth="20%" top={-8} right={8}/>
                              <Text fontSize="xs" color="#000">Extremely Satisfied</Text>
                            </Radio>
                          </HStack>
                        </RadioGroup>
                        <Button
                          bgColor="pryClr"
                          color="white"
                          p={3}
                          w="150px"
                          fontWeight={600}
                          mt={3}
                          _hover={{
                            bgColor: "transparent",
                            color: "pryClr",
                            borderColor: "pryClr",
                            borderWidth: "1px"
                          }}
                          _active={{
                            outline: "none"
                          }}
                          onClick={() => {
                            setShowFeedback(!feedback);
                            setShowForm(!showForm);
                          }}
                        >
                          Next
                        </Button>
                      </Box>
                    )
                  }
                  {
                    showForm && (
                      <Box p={2}>
                        <Text color="accent" fontSize="lg" fontWeight={700}>Give Us Your Feedback</Text>
                        <Text color="accent" fontSize={["sm", "sm", "sm"]} fontWeight={300} w={["100%", "100%", "80%"]}>Any more comment or suggestion?</Text>
                        <Textarea 
                          borderColor="pryClr"
                          color="accent"
                          borderWidth="1px"
                          cols={30}
                          rows={5}
                          onChange={(e) => setComment(e.target.value)}
                          value= {comment}
                        />
                        <Button
                          bgColor="pryClr"
                          color="white"
                          p={3}
                          w="150px"
                          fontWeight={600}
                          mt={3}
                          _hover={{
                            bgColor: "transparent",
                            color: "pryClr",
                            borderColor: "pryClr",
                            borderWidth: "1px"
                          }}
                          _active={{
                            outline: "none"
                          }}
                          onClick={() => {
                            setShowFeedback(false);
                            setShowForm(!showForm);
                            setShowSent(true);
                            // send response to backend
                          }}
                        >
                          Submit
                        </Button>
                      </Box>
                    )
                  }

                  {
                    showSent && (
                      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" p={3}>
                        <Text color="accent" fontWeight={700} textAlign="center" fontSize="2xl">Feedback Sent</Text>
                        <Text color="accent" fontSize="sm" fontWeight={300} w={["100%", "100%", "80%"]} mx="auto" textAlign="center">Thanks for your feedback, this helps us serve you better.</Text>
                        <Button 
                          rightIcon={<AiOutlineRight color="#FFA500" />}
                          color="pryClr" 
                          bgColor="transparent"
                          display="block"
                          fontSize="md" 
                          fontWeight={300} 
                          w={["100%", "100%", "80%"]} 
                          mx="auto" 
                          mt={4}
                          textAlign="center"
                          _hover={{
                            bgColor: "transparent",
                            color: "pryClr"
                          }}
                          _active={{
                            outline: "none"
                          }}
                          onClick={() => navigate("/blog")}
                        >
                          Stay motivated via our blog
                        </Button>
                        <Heading color="#000" my={2} textAlign="center" fontSize="2xl">Follow and Like</Heading>
                        <HStack w="60%" ml={[0, 0, 10]}>
                            {socials.map((s) => (
                              <Tooltip key={s.id} label={`go to ${s.name} page`} hasArrow placement="bottom-end" bg="accent">
                                <ChakraLink href={s.link} target="_blank">
                                  <IconButton
                                    aria-label={`${s.name} logo`}
                                    bgColor="transparent"
                                    fontSize="25px"
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
                        <Flex mt={2}>
                          <Text color="#000" fontSize="2xl" mr={4}>Share: </Text>
                          <HStack
                            w={["100%, 100%", "15%"]}
                          >
                              <ChakraLink
                                href="https://twitter.com/intent/tweet?text=Chat%20with%20a%20counsellor%20now%0Ahttps%3A//www.zerodepression.org"
                                target="_blank"
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
                              </ChakraLink>
                              <ChakraLink
                                href="https://web.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fweb.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.zerodepression.org&cancel_url=https%3A%2F%2Fweb.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                                target="_blank"
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
                              </ChakraLink>
                              <ChakraLink
                                href="https://whatsapp.com"
                                target="_blank"
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
                              </ChakraLink>
                          </HStack>
                        </Flex>
                      </Box>
                    )
                  }
                </ModalBody>
               </ModalContent>
            </Modal>
      </SpacedContainer>
    </Box>
  )
}

export default Chat