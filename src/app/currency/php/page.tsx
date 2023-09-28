import React from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "./SelectNational";
import CurrencyDataTable from "./CurrencyDataTable";
import { Box, Center, Heading } from "@chakra-ui/react";


const Page = async () => {
  const currencyData: Awaited<Awaited<CurrencyObj>> = await GetApiCurency();
  return (
    <div>
      <Box>
        <Center bgColor="orange.500" color="white" p="4">
          <Heading as="h1" size="xl" noOfLines={1}>
            各国の通貨一覧
          </Heading>
        </Center>
      </Box>
      <SelectNational />
      <CurrencyDataTable currencyData={currencyData} />
    </div>
  );
};

export default Page;
