"use client";

import React, { useState, useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { dateFormatter } from "@/utils/dateFns";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import { useNational, NATIONAL_i18n } from "@/zustand/national";
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
  //選択された国の英３文字を取得
  const { currentNational } = useNational();
  //選択された国のデータ
  const [currentCurrencyData, setCurrentCurrencyData] =
    useState<CurrencyObj>(currencyData);

  useEffect(() => {
    // 非同期関数を呼び出す
    const fetchData = async () => {
      const newData: Awaited<CurrencyObj> = await GetApiCurency(currentNational);
      setCurrentCurrencyData(newData);
    };

    // fetchData() を呼び出す
    fetchData();
  }, [currentNational]);

  return (
    <>
      <Center fontSize={"2xl"} bgColor="green.500" color="white" p="4" mb="12">
        {NATIONAL_i18n[currentNational].currencyName.ja}
      </Center>
      <TableContainer maxWidth="90%" mx="auto">
        <Table size="sm" variant="striped" colorScheme="orange">
          <TableCaption>Free JSON Currency Exchange Rate Feeds</TableCaption>
          <Thead className="bg-gray-200 text-gray-700 py-4">
            <Tr>
              <Th fontSize="xl" lineHeight="tall">
                国
              </Th>
              <Th fontSize="xl" lineHeight="tall">
                国情報
              </Th>
              <Th fontSize="xl" lineHeight="tall">
                レート率
              </Th>
              <Th fontSize="xl" lineHeight="tall">
                インバートレート率
              </Th>
              <Th fontSize="xl" lineHeight="tall">
                更新日時
              </Th>
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
                    <Td>{dateFormatter.fun(currencyInfo.date)}</Td>
                  </Tr>
                )
              )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CurrencyDataTable;
