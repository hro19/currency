import React from 'react'
import { fetchItems } from "@/api/item/fetchItem";
import ItemCard from '@/components/tdd/ItemCard';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Item } from '@/ts/Item';

  export default async function Page() {
    const data = await fetchItems.getAll()
    
    return (
      <Box>
        <Container maxW="1180px">
        <Heading as={"h1"} className="text-2xl text-blue-500 font-bold my-4 ml-2">テスト開発【item】</Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((item: Item) => (
        <ItemCard item={item} key={item.id} />
        ))}
      </div>
        </Container>
      </Box>
      )
    }