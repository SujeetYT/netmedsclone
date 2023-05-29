import { Box, Container, Flex, Image, Text, Button } from "@chakra-ui/react";
import UploadButton from "./UploadButton";
import UserButton from "./UserButton";

import InputComponent from "./InputComponent";
import { Link } from "react-router-dom";
import CartNavbar from "./CartNavbar";
import Logo from "../../../../assets/Carewell.png";
import { SlWallet } from "react-icons/sl";

// import {
//   Button,
//   Text,
// } from "@chakra-ui/react";

const TopNavbar = () => {
  return (
    <>
      <Box top="0px" position="fixed" width={"100%"} zIndex="1">
        <Container
          width={"100%"}
          maxW="100%"
          bg={"rgba(255, 255, 255, 0.29)"}
          paddingBlock="15px"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(13px)"
          borderBottom="1px solid rgba(255, 255, 255, 0.19)"
        >
          <Flex justifyContent={"center"} gap="20px" alignItems={"center"}>
            <Link to={"/"}>
              <Box paddingRight={"20px"}>
                <Image
                  src={Logo}
                  alt="CarewellLogo"
                  w={"130px"}
                  minWidth="130px"
                  maxWidth="130px"
                ></Image>
              </Box>
            </Link>
            <InputComponent />
            <UploadButton />
            <Link to={"/Cart"}>
              <CartNavbar />
            </Link>

            {/* <UserButton /> */}
            <Button
              bgColor={"rgb(50,174,177)"}
              _hover={{ bg: "rgb(50,174,177)" }}
              size="md"
            >
              <Flex>
                <SlWallet size={18} color="#fff" /> &nbsp;&nbsp;&nbsp;
                <Text color={"white"} fontSize="14px" fontWeight="semibold">
                  Connect Wallet
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Container>
      </Box>
      <Box width={"100%"} height="60px" bg={"rgb(50,174,177)"}></Box>
    </>
  );
};

export default TopNavbar;
