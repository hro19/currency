import React from 'react'
import { fetchItems } from "@/api/item/fetchItem";
import ItemWrap from '@/components/tdd/ItemWrap';
import { Box, Container, Heading } from '@chakra-ui/react';


  export default async function Page() {
    const data = await fetchItems.getAll()
    console.log(data);
    
    return (
      <Box>
        <Container>
        <Heading as={"h1"} className="text-2xl text-blue-500 font-bold my-4 ml-2">テスト開発【item】</Heading>
        <Box className="grid grid-cols-1 gap-4">
          <ItemWrap items={data} />
        </Box>
        </Container>
      </Box>
      )
    }