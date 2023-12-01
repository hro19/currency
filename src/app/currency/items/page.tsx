import React from "react";
import SelectNational from "@/app/currency/php/SelectNational";
import HeaderTitle from "@/components/common/HeaderTitle";
import { CurrencyObj } from "@/ts/Currency";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import ItemsQuery from "@/features/ItemsQuery";
import DrawerItem from "@/components/item/DrawerItem";

export default async function Page() {
  const currencyObjData: Awaited<CurrencyObj> = await GetApiCurency("jpy");

  return (
    <Box>
      <HeaderTitle title="アイテム" />
      <Box display="flex" flexDirection="row" mb="8" mx="auto" width="80%">
        <Flex mt={4}>
          <SelectNational />
          <DrawerItem currencyObjData={currencyObjData} />
        </Flex>
      </Box>
      <Container maxW="1180px">
        <Heading as={"h1"} className="my-4 ml-2 text-2xl font-bold text-blue-500">
          テスト開発【item】
        </Heading>
        <ItemsQuery currencyObjData={currencyObjData} />
      </Container>
    </Box>
  );
}
