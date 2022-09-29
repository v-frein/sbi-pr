import { Box, Input } from "@chakra-ui/react";
import { FC } from "react";

export const InputWithLabel: FC<any> = ({
  field,
  label,
  name,
  id,
  value,
  ...props
}) => {
  return (
    <Box>
      <Input id={id} type="text" {...field} {...props} />
    </Box>
  );
};
