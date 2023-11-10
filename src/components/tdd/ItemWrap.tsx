"use client";

import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,Box, Container, Heading, Text, Button, ButtonGroup, Img } from '@chakra-ui/react';
import {dateFormatter} from "@/utils/dateFns";
import Image from 'next/image';

const ItemWrap = ({ items}:any) => {
  return (
    <>
              {items.map((item: any) => (
            <Box key={item.id} className="p-4 border rounded shadow">
            <Heading as={"h1"} className=""><Image src={`/country/${item.currencyCode}.png`} alt={item.currencyCode} width={40} height={40} /></Heading>
            <Text className="text-xl font-bold mb-2">{item.name}</Text>
            <ButtonGroup variant='outline' gap={0} mb={2} >
                <Button colorScheme='blue'>価格追加</Button>
                <Button colorScheme='green'>編集</Button>
            </ButtonGroup>
            <Accordion allowToggle>
              <AccordionItem>
                <Heading as={"h2"}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      プライス履歴
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel>
                  <Box>
                  {item.histories && item.histories.map((history: any) => (
                    <Box className="space-y-1">
                        <Heading as={"h3"} className="text-lg font-semibold">{history.price}</Heading>
                        <Text className="text-xs text-gray-400">{dateFormatter.fun(history.created_at)}</Text>
                    </Box>
                    ))}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            </Box>
        ))}
    </>
  )
}

export default ItemWrap
