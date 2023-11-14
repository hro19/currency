

import React, { useState, useEffect } from 'react';
import { Flex,Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
    Box, Center , Heading, Text, Button, ButtonGroup, Spacer } from '@chakra-ui/react';
import {dateFormatter} from "@/utils/dateFns";
import Image from 'next/image';
import { Item } from "@/ts/Item";
import AddItemHistoryButton from '@/components/item/AddItemHistoryButton';
import EditItemButton from './EditItemButton';

const ItemWrap = ({ item }: { item: Item }) => {
  return (
    <>
      <Box key={item.id} className="relative p-4 border rounded shadow">
        <Box as={"i"} className="absolute -top-3 -right-3">
          <Image
            src={`/country/${item.currencyCode}.png`}
            alt={item.currencyCode.toString()}
            width={40}
            height={40}
          />
        </Box>

        <Flex direction="row" justify="flex-start" gap={3} mb={4}>
          <Box display="grid" placeContent="center">
            <Heading as={"h1"} className="text-xl font-bold">
              {item.name}
            </Heading>
          </Box>
          <Spacer />
          <Flex direction="column" gap={1}>
            <Text className="text-md">
              {item.histories && item.histories.length > 0 && item.histories[0].price}
              フィリピンペソ
            </Text>
            <Text className="text-lg">
              {item.histories &&
                item.histories.length > 0 &&
                Math.floor(item.histories[0].price * 2.66)}
              円（レート:2.66）
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems={"flex-end"} mb={2}>
          <ButtonGroup variant="outline" gap={0}>
            <AddItemHistoryButton />
            <EditItemButton item={item} />
          </ButtonGroup>
          <Spacer />
          <Text className="mr-3 text-xs align-bottom">
            {item.histories &&
              item.histories.length > 0 &&
              `【最新】${dateFormatter.dayJap(item.histories[0].created_at.toString())}`}
          </Text>
        </Flex>

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
              <div>
                {item.histories &&
                  item.histories.map((history: any) => (
                    <Box key={history.id} className="space-y-1">
                      <Flex align="center" gap={2}>
                        <Text className="text-xs text-gray-400">
                          {dateFormatter.fun(history.created_at)}
                        </Text>
                        <Heading as={"h4"} className="text-base">
                          {history.price}フィリピンペソ
                        </Heading>
                        <Text as={"p"} className="text-xl">
                          {history.price}円
                          <Text as="span" className="text-sm">
                            (レート:2.66)
                          </Text>
                        </Text>
                      </Flex>
                    </Box>
                  ))}
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default ItemWrap
