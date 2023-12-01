"use client";

import React from "react";
import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";
import { dateFormatter } from "@/utils/dateFns";
import Image from "next/image";
import AddItemHistoryButton from "@/components/item/AddItemHistoryButton";
import EditItemButton from "@/components/item/EditItemButton";
import DeliteHstoryButton from "../item/DeliteHstoryButton";
import { NATIONAL_i18n } from "@/zustand/national";
import { Item } from "@/ts/Item";
import { Currency } from "@/ts/Currency";
import { ItemHistory } from "@/ts/Item";

const ItemCard = ({ item, currencyData }: { item: Item; currencyData: Currency }) => {
  return (
    <>
      <Box key={item.id} className="relative rounded border p-4 shadow">
        <Box as={"i"} className="absolute -right-3 -top-3">
          <Image
            src={`/country/${item.currencyCode}.png`}
            alt={item.currencyCode.toString()}
            width={40}
            height={30}
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
            <Text fontSize={"xl"} fontWeight={"bold"}>
              {item.histories && item.histories.length > 0 && item.histories[0].price}
              {NATIONAL_i18n[item.currencyCode.toString()].currencyName.ja}
            </Text>
            <Text className="text-lg">
              {item.histories &&
                item.histories.length > 0 &&
                Math.floor(item.histories[0].price * item.histories[0].inverseRate)}
              円（レート:{item.histories[0].inverseRate.toFixed(2)}）
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems={"flex-end"} mb={2}>
          <ButtonGroup variant="outline" gap={0}>
            <AddItemHistoryButton itemId={item.id} currencyData={currencyData} />
            <EditItemButton item={item} />
          </ButtonGroup>
          <Spacer />
          <Text className="mr-3 text-xs">
            {item.histories &&
              item.histories.length > 0 &&
              `【最新】${dateFormatter.dayJap(item.histories[0].created_at)}`}
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
                  item.histories.map((history: ItemHistory) => (
                    <Box key={history.id} className="space-y-1">
                      <Flex align="center" gap={2}>
                        <Text className="text-xs text-gray-400">
                          {dateFormatter.fun(history.created_at)}
                        </Text>
                        <Heading as={"h4"} className="text-base">
                          {history.price}
                          {NATIONAL_i18n[item.currencyCode.toString()].currencyName.ja}
                        </Heading>
                        <Text as={"p"} className="text-xl">
                          {Math.floor(history.price * history.inverseRate)}円
                          <Text as="span" className="text-sm">
                            (レート:{history.inverseRate.toFixed(2)})
                          </Text>
                        </Text>
                        <DeliteHstoryButton historyId={history.id} />
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

export default ItemCard;