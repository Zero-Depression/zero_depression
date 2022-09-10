import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

type Props = {
    path: string;
    bgColor?: string,
    color?: string,
    size?: string | number | string[] | number[],
}

const TalkButton = ({ path, bgColor, color, size }: Props) => {
    const navigate = useNavigate();
    
  return (
    <Button
            color={color}
            border="2px"
            borderColor="pryClr"
            fontWeight={400}
            fontSize="sm"
            bgColor= {bgColor}
            py={4}
            px={4}
            w={size}
            // mx={["auto", "auto", "0"]}
            _focus={{ bgColor }}
            _hover={{ bgColor, color }}
            _active={{ bgColor, color }}
            onClick={() => navigate(path)}
          >
            Talk with a Councillor
          </Button>
  )
}


TalkButton.defaultProps = {
    bgColor: "transparent", 
    color: "pryClr",
    size: "100%",
}

export default TalkButton;