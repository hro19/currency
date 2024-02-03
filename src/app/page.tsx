import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import CurrencyWrap from "@/components/currency/CurrencyWrap";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "@/app/currency/php/SelectNational";
import HeaderTitle from "@/components/common/HeaderTitle";
import { Box, Heading, Text } from "@chakra-ui/react";
import PastItems from "@/components/top/PastItems";

const Home = async () => {
  const currencyObjData: Awaited<CurrencyObj> = await GetApiCurency("jpy");

  return (
    <>
      <HeaderTitle title="通貨記録 アプリ" />
      <Box mx="auto" w="full" maxW="1060px" py={8} px={4}>
        <SelectNational />
        <CurrencyWrap currencyObjData={currencyObjData} />
      </Box>

      <Box textAlign="center" mt={4} mb={16}>
        <Heading py={4}>プライス記録を貯めて比較</Heading>
        <Text>
          旅行に行く度に過去に利用したサービス・商品・食事を記録しましょう。
          <br />
          過去のデータと比較してみて、過去との価格差を見比べてみましょう。
        </Text>
      </Box>
      <PastItems/>
    </>
  );
};

export default Home;