import { Text, VStack, Link as Chakralink } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

export interface Municipality {
  id: string;
  name: string;
  eventsIds: Array<number>;
}

export interface Region {
  name: string;
  municipalities: Array<Municipality>;
}

interface RegionBlockProps {
  region: Region;
}

export const RegionBlock: FC<RegionBlockProps> = ({ region }) => {
  let num = 1;
  return (
    <VStack alignItems="left">
      <Text fontWeight="bold" fontSize="24px" textAlign="center" color="black">
        {region.name}
      </Text>
      {region.municipalities.map((municipality) => (
        <Link href={`/municipality/${municipality.id}`} key={municipality.id}>
          <Chakralink color="white">
            {num++ + ". " + municipality.name}
          </Chakralink>
        </Link>
      ))}
    </VStack>
  );
};
