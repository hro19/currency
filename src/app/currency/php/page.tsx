import React from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import { dateUntilFun } from "@/utils/dateFns"; 
import SelectNational from "./SelectNational";
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

const Page = async () => {
  const phpCur: Awaited<Awaited<CurrencyObj>> = await GetApiCurency("php");
  return (
    <div>
      <SelectNational />
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
            {phpCur &&
              Object.entries(phpCur).map(
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
    </div>
  );
};

export default Page;
