import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "./SelectNational";
import CurrencyDataTable from "./CurrencyDataTable";
import { Box } from "@chakra-ui/react";
import HeaderTitle from "@/components/common/HeaderTitle";

const Page = async () => {
  const currencyData: Awaited<Awaited<CurrencyObj>> = await GetApiCurency();
  return (
    <Box>
      <HeaderTitle title="各国の通貨一覧" />
      <Box my={4}>
        <SelectNational />
      </Box>
      <CurrencyDataTable currencyData={currencyData} />
    </Box>
  );
};

export default Page;