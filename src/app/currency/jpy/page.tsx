import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import CurrencyWrap from "@/components/currency/CurrencyWrap";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "../php/SelectNational";
import { Box, Center, Heading } from "@chakra-ui/react";

const UsersList = async () => {
  const currencyObjData: Awaited<CurrencyObj> = await GetApiCurency("jpy");

  return (
    <>
      <Box>
        <Center bgColor="orange.500" color="white" p="4">
          <Heading as="h1" size="xl" noOfLines={1}>
            日本円への通貨計算
          </Heading>
        </Center>
      </Box>
      <div className="mx-auto w-full max-w-[860px] py-8">
        <SelectNational />
        <CurrencyWrap currencyObjData={currencyObjData} />
      </div>
    </>
  );
};

export default UsersList;
