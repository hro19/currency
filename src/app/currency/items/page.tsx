import React from 'react'
import { fetchItems } from "@/api/item/fetchItem";
import ItemCard from '@/components/tdd/ItemCard';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Item } from '@/ts/Item';

  export default async function Page() {
    const data = await fetchItems.getAll()
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((item: Item) => (
        <ItemCard item={item} key={item.id} />
        ))}
      </div>
      )
    }