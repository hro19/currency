import React from 'react'
import { Box, Center, Button } from "@chakra-ui/react";

const page = () => {
  return (
    <div className="m-4">
      <h2 className="text-pink-500 text-4xl font-bold">ボタンのページ</h2>
      <Box>
        <Center bgColor="orange.500" color="white" p="4">
          This is the Box
        </Center>
        <Box bgColor="green.500" color="white" p="4" mt="4">
          This is the Box
        </Box>
      </Box>
      <Box>
        <Button className="bg-red-600" colorScheme="red">
          ボタン
        </Button>
      </Box>
    </div>
  );
}

export default page
