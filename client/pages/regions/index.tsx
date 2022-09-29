import { Box, Center, HStack, Select, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FormValuesType, Navigation, RegionBlock } from "../../components";
import { StatisticsBlock } from "../../components";
import { data } from "../../components/RegionBlock/data";

const Regions: NextPage = () => {
  const [id, setId] = useState(0);
  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("secret") || "");
    setId(accounts.find((account: FormValuesType) => account.isLogged).id);
  }, []);

  return (
    <Box background="linear-gradient(180deg, #FFF9F9 0%, #0017E2 51.04%, #FF0000 100%, rgba(255, 255, 255, 0) 100%);">
      <Navigation />
      <Center>
        <Box w="1024px">
          <HStack py="12px" justifyContent="space-between" alignItems="center">
            <Text my="12px" fontSize="24px" fontWeight="bold">
              Регионы
            </Text>
          </HStack>
          <Image src="/images/pushkinCard.jpeg" width="1024px" height="600px" />
          <HStack justifyContent="space-between" alignItems="start">
            {data[id].map((region) => (
              <RegionBlock key={Math.random()} region={region} />
            ))}
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Regions;
