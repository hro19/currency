import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import CurrencyWrap from "@/components/currency/CurrencyWrap";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "@/app/currency/php/SelectNational";
import HeaderTitle from "@/components/common/HeaderTitle";
import { Box, Heading, Text } from "@chakra-ui/react";
import ItemAnalysis from "@/components/top/ItemAnalysis";
import { gapaoData } from "@/lib/rechart/gapao";
import { cinemaData } from "@/lib/rechart/cinema";
import {potetochipData} from "@/lib/rechart/potetochip";

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
      <Box>
        <ItemAnalysis
          bgColor={"bg-gray-800"}
          itemName={"ガパオライス（1皿）"}
          itemPicture={"food_gapao_rice"}
          graphData={gapaoData}
          currencyName={"タイバーツ"}
          currencyLineColor={"#8884d8"}
          jpyLineColor={"#82ca9d"}
        />
        <ItemAnalysis
          bgColor={"bg-gray-400"}
          itemName={"映画チケット（1枚）"}
          itemPicture={"building_cinema"}
          graphData={cinemaData}
          currencyName={"韓国ウォン"}
          currencyLineColor={"#2a5996"}
          jpyLineColor={"#229120"}
        />
        <ItemAnalysis
          bgColor={"bg-gray-700"}
          itemName={"ポテトチップス（1袋:80g）"}
          itemPicture={"gomi_potatochips_fukuro"}
          graphData={potetochipData}
          currencyName={"フィリピンペソ"}
          currencyLineColor={"#8884d8"}
          jpyLineColor={"#82ca9d"}
        />
      </Box>
    </>
  );
};

export default Home;