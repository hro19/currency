import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import CurrencyWrap from "@/components/currency/CurrencyWrap";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "../php/SelectNational";
import HeaderTitle from "@/components/common/HeaderTitle";
import { fetchItems } from "@/api/item/fetchItem";
import { Box } from "@chakra-ui/react";
import JpyTable from "@/components/currency/JpyTable";
import { getAuthSession } from "@/lib/next-auth/getAuthSession";


const UsersList = async () => {
  const currencyObjData: Awaited<CurrencyObj> = await GetApiCurency("jpy");

  const session = await getAuthSession();
  const userEmail = session?.user?.email || "";

  return (
    <>
      <HeaderTitle title="日本円への通貨計算" />
      <Box mx="auto" w="full" maxW="1060px" py={8} px={4}>
        <SelectNational />
        <CurrencyWrap currencyObjData={currencyObjData} />
        <JpyTable userEmail={userEmail} />
      </Box>
    </>
  );
};

export default UsersList;