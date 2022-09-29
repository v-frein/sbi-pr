import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface StatisticsBlock {
  name: string;
  value: number;
}

export const StatisticsBlock: FC<StatisticsBlock> = ({ name, value }) => {
  return (
    <Box p="12px" border="1px" borderColor="gray.200" borderRadius="md">
      <Text textAlign="center" fontSize="18px" fontWeight="bold">
        {name}
      </Text>
      <Text textAlign="center">{value}</Text>
    </Box>
  );
};
