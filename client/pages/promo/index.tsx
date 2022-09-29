import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Promo: NextPage = () => {
  return (
    <Box>
      <Flex
        height="100vh"
        backgroundImage="./images/promoBackground.png"
        backgroundSize="cover"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="24px"
      >
        <Box>
          <Text
            fontSize="36px"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Студенческий Бизнес Инкубатор
          </Text>
          <Text
            fontSize="48px"
            fontWeight="bold"
            color="white"
            textAlign="center"
            textTransform="uppercase"
          >
            {'"Плафторма роста"'}
          </Text>
        </Box>
        <Text w="640px" fontSize="18px" color="white" textAlign="left">
          При поддержке:
          <Text>1. ДОСААФ России</Text>
          <Text>
            2. Управлением по работе с молодёжью при ВОО
            {'"Трудовая Доблесть России"'}
          </Text>
          <Text>
            3. ООО{" "}
            {'"Союз директоров средних специальных учебных заведений России'}
          </Text>
          <Text>4. ООО {'"Городской Родительский Комитет'}</Text>
        </Text>
        <Link href="/login">
          <Button colorScheme="red">Твоя точка входа</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Promo;
