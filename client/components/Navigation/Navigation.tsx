import {
  Box,
  Center,
  HStack,
  Text,
  Link as Chakralink,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

export const Navigation: FC = () => {
  const onExit = () => {
    localStorage.clear();
  };
  return (
    <Box backgroundColor="blue.500">
      <Center>
        <HStack w="1024px" py="6px" justifyContent="space-between">
          <Text color="white" fontSize="32px" fontWeight="bold">
            SBI
          </Text>
          <HStack gap="24px">
            <Link href="/regions" color="white">
              <Chakralink color="white" fontWeight="bold">
                Регионы
              </Chakralink>
            </Link>
            <Link href="/login" color="white">
              <Chakralink onClick={onExit} color="white" fontWeight="bold">
                Выход
              </Chakralink>
            </Link>
          </HStack>
        </HStack>
      </Center>
    </Box>
  );
};
