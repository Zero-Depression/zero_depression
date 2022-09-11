import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import TeamCard from "../Contact/TeamCard";
import { getAllTeamMemebers, IMembers } from "../../data/teamsData";
import "./styles/team.css";
import SpacedContainer from "./SpacedContainer";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  // adaptiveHeight: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TeamsCarousel = () => {
  const slider = useRef<any>();
  const members = getAllTeamMemebers();
  const navigate = useNavigate();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <SpacedContainer>
        <Box mt={[8, 8, 16]}>
          <Text
            color="pryClr"
            fontWeight={700}
            fontSize={["md", "md", "lg"]}
            textAlign="center"
          >
            Meet Our joy facilitators
          </Text>
          <Text
            color="accent"
            fontWeight={700}
            fontSize={["xl", "xl", "2xl"]}
            textAlign="center"
          >
            Our Team Members
          </Text>
        </Box>
      <Box mt={4}>
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {members.map((member: IMembers) => (
            <TeamCard
              key={member.id}
              img={member.img}
              pos={member.pos}
              name={member.name}
              // fLink={member.fLink}
              // tLink={member.tLink}
              // inLink={member.inLink}
            />
          ))}
        </Slider>
        <Box
          w={["50%", "50%", "10%"]}
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          transform="translateY(40px)"
        >
          <IconButton
            aria-label="arrow left"
            sx={{
              bgColor: "transparent",
              color: "accent",
            }}
            _hover={{
              bgColor: "transparent",
              color: "accent",
            }}
            _focus={{
              border: "2px",
            }}
            icon={<FaArrowLeft size="20px" />}
            onClick={previous}
          />
          <IconButton
            aria-label="arrow left"
            sx={{
              bgColor: "transparent",
              color: "accent",
              ml: "4",
            }}
            _hover={{
              bgColor: "transparent",
              color: "accent",
            }}
            _focus={{
              border: "2px",
            }}
            icon={<FaArrowRight size="20px" />}
            onClick={next}
          />
        </Box>
      </Box>
      <Box w={["50%", "50%", "20%"]} mt={10} mx="auto">
        <Button
          color="#000000"
          fontSize="lg"
          fontWeight="700"
          border="none"
          bgColor="transparent"
          width="100%"
          rightIcon={<FaArrowRight color="#FFA500" />}
          _focus={{
            bgColor: "transparent",
            color: "black",
          }}
          _active={{
            bgColor: "transparent",
            color: "black",
          }}
          _hover={{
            bgColor: "transparent",
            color: "black",
          }}
          onClick={() => navigate("/gallery")}
        >
          View Gallery
        </Button>
      </Box>
    </SpacedContainer>
  );
};

export default TeamsCarousel;
