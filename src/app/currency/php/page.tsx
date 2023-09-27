import React from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { GetApiCurencyPhp } from "@/api/currency/getApiCurrencyPhp";
import {
  Box,
  Center,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const getCurency = GetApiCurencyPhp;

const UsersList = async () => {
  const phpCur: Awaited<Promise<CurrencyObj>> = await getCurency();
  return (
    <div>
      <Box>
        <Center bgColor="orange.500" color="white" p="4" mb="40px">
          <Heading as="h1" size="xl" noOfLines={1}>
            フィリピンから見た通貨一覧
          </Heading>
        </Center>
      </Box>

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
                    <Td>{currencyInfo.date}</Td>
                  </Tr>
                )
              )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
