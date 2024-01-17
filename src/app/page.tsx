import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import CurrencyWrap from "@/components/currency/CurrencyWrap";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "@/app/currency/php/SelectNational";
import HeaderTitle from "@/components/common/HeaderTitle";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

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
        <Heading py={4}>記録を貯めて比較</Heading>
        <Text>
          旅行に行く度に過去に利用したサービス・商品・食事を記録しましょう。
          <br />
          過去のデータと比較してみて、過去との価格差を見比べてみましょう。
        </Text>
      </Box>
      <Box>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center justify-items-center lg:w-1/3">
              <Image
                src="/items/food_gapao_rice.png"
                alt="写真"
                width="200"
                height="150"
              />
              <h2 className="text-xl">ガパオライス（1皿）</h2>
            </div>
            <div className="flex w-full flex-col p-6 md:p-8 lg:w-2/3 lg:p-12">ままま</div>
          </div>
        </section>
        <section className="py-6 dark:bg-gray-400 dark:text-gray-100">
          <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center justify-items-center lg:w-1/3">
              <Image
                src="/items/building_cinema.png"
                alt="写真"
                width="200"
                height="150"
              />
              <h2 className="text-xl">映画鑑賞（1チケット）</h2>
            </div>
            <div className="flex w-full flex-col p-6 md:p-8 lg:w-2/3 lg:p-12">ままま</div>
          </div>
        </section>
        <section className="py-6 dark:bg-gray-700 dark:text-gray-100">
          <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center justify-items-center lg:w-1/3">
              <Image
                src="/items/gomi_potatochips_fukuro.png"
                alt="写真"
                width="200"
                height="150"
              />
              <h2 className="text-xl">ポテトチップス（1袋:80g）</h2>
            </div>
            <div className="flex w-full flex-col p-6 md:p-8 lg:w-2/3 lg:p-12">ままま</div>
          </div>
        </section>
      </Box>
    </>
  );
};

export default Home;