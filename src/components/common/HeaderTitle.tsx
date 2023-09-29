import React from 'react';
import { Box, Center, Heading } from "@chakra-ui/react";

const HeaderTitle = ({ title }:{title:string}) => {
  return (
    <Box w="100%" bgGradient="linear(to-r, blue.200, pink.500)">
      <Center color="white" p="4">
        <Heading as="h1" size="xl" noOfLines={1}>
          {title}
        </Heading>
      </Center>
    </Box>
  );
};

export default HeaderTitle
