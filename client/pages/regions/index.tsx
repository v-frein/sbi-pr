import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  HStack,
  Select,
  Text,
  VStack,
  Link as Chakralink,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FormValuesType, Navigation, RegionBlock } from "../../components";
import { StatisticsBlock } from "../../components";
import { data, referralData } from "../../components/RegionBlock/data";

const Regions: NextPage = () => {
  const [account, setAccount] = useState<FormValuesType>({});
  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("secret") || "");
    setAccount(accounts.find((account: FormValuesType) => account.isLogged));
  }, []);

  return (
    <Box
      background="linear-gradient(180deg, #FFF9F9 0%, #0017E2 51.04%, #FF0000 100%, rgba(255, 255, 255, 0) 100%);"
      height="100vh"
    >
      <Navigation balance={account.balance || 0} />
      <Center>
        <Text
          my="12px"
          w="478px"
          color="white"
          fontSize="26px"
          fontWeight="bold"
          bgColor="red"
          borderRadius="md"
          p="4px"
          textTransform="uppercase"
        >
          Баланс заработной платы: {account.balance}₽
        </Text>
      </Center>
      <Center>
        <Box w="1024px">
          <VStack py="12px" justifyContent="space-between" align="left">
            <Text my="12px" fontSize="24px" fontWeight="bold">
              {account.type === "referrer"
                ? "Регионы"
                : "Муниципальные образования / Городские округа"}
            </Text>
            {account.type === "referral" && typeof account.id === "number" && typeof account.subId === "number" && (
              <Text my="12px" fontSize="24px" fontWeight="bold">
                Твоя зона ответственности -{" "}
                <Link href={`/municipality/${referralData[account.subId][account.id].id}`}>
                  <Chakralink
                    textDecoration="underline"
                    color="white"
                    bgColor="blue"
                    borderRadius="md"
                    p="4px"
                  >
                    {referralData[account.subId][account.id].name} {" "}
                    <ExternalLinkIcon />
                  </Chakralink>
                </Link>
              </Text>
            )}
          </VStack>
          <Image src="/images/pushkinCard.jpeg" width="1024px" height="600px" />
          <HStack justifyContent="space-between" alignItems="start">
            {account.type === "referrer" &&
              account.id &&
              data[account.id].map((region) => (
                <RegionBlock key={Math.random()} region={region} />
              ))}
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Regions;
