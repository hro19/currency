"use client";

import React,{useState} from 'react';
import { Currency, CurrencyObj } from "@/ts/Currency";
import { dateUntilFun } from "@/utils/dateFns";
import { useNational } from "@/zustand/national";
import {
  Box,
  Center,
  Button,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Select,
} from "@chakra-ui/react";

const CurrencyDataTable = ({ currencyData }: { currencyData: CurrencyObj }) => {
    const [currentCurrencyData, setCurrentCurrencyData] =
        useState<CurrencyObj>(currencyData);
    const { currentNational, setCurrentNational } = useNational();
  return (
    <>
      <Center bgColor="green.500" color="white" p="4">{currentNational}</Center>
      <TableContainer maxWidth="90%" mx="auto">
        <Table size="sm" variant="striped" colorScheme="orange">
          <TableCaption>Free JSON Currency Exchange Rate Feeds</TableCaption>
          <Thead>
            <Tr>
              <Th>国</Th>
              <Th>国情報</Th>
              <Th>レート率</Th>
              <Th>インバートレート率</Th>
              <Th>更新日時</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentCurrencyData &&
              Object.entries(currentCurrencyData).map(
                ([currencyCode, currencyInfo]: [string, Currency]) => (
                  <Tr key={currencyCode}>
                    <Td>{currencyCode}</Td>
                    <Td>{currencyInfo.name}</Td>
                    <Td>{currencyInfo.rate}</Td>
                    <Td>{currencyInfo.inverseRate}</Td>
                    <Td>{dateUntilFun(currencyInfo.date)}</Td>
                  </Tr>
                )
              )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CurrencyDataTable
