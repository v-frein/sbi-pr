import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { NextPage } from "next";
import { Auth } from "../../components";

const Login: NextPage = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundImage="./images/promoBackground.png"
      backgroundSize="cover"
    >
      <Auth />
    </Box>
  );
};

export default Login;
