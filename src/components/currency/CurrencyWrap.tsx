"use client";

import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import Image from "next/image";
import { dateFormatter } from "@/utils/dateFns";
import { NATIONAL_i18n, useNational } from "@/zustand/national";
import { inputPriceStore } from "@/zustand/inputPriceStore";
import { chakra, Flex, Box, Text } from "@chakra-ui/react";
import JpyForm from "@/components/currency/JpyForm";

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  // console.log(currencyObjData);
  // console.log(currencyObjData["php"]);
  const { currentNational } = useNational();
  const { inputPrice } = inputPriceStore();

  return (
    <>
      <Flex maxW="860px" mx={"auto"} mt={3}>
        <Box bg={"cyan.100"} px={4} py={12} w={"100%"} className="relative">
          <chakra.i className="absolute left-2 top-3">
            <Image
              src={`/country/${currentNational}.png`}
              alt="交換元通貨のフラグ"
              width={80}
              height={55}
              priority
            />
          </chakra.i>
          <Box as={"section"} className="text-center">
            <chakra.h3 className="text-lg font-bold">
              {NATIONAL_i18n[currentNational].name.ja}のレート
              <br />
              {currencyObjData[currentNational].inverseRate.toFixed(2)}円
              <chakra.span className="text-sm">
                (/{NATIONAL_i18n[currentNational].currencyName.ja})
              </chakra.span>
            </chakra.h3>
            <chakra.span className="block text-xs">
              更新日（{dateFormatter.zi(currencyObjData[currentNational].date)}）
            </chakra.span>
            <JpyForm currencyObjData={currencyObjData} />
          </Box>
        </Box>
        <Box bg={"green.200"} px={4} py={12} w={"100%"} className="relative">
          <chakra.i className="absolute left-2 top-3">
            <Image
              src="/country/jpy.png"
              alt="交換目的通貨のフラグ"
              width={80}
              height={55}
              priority
            />
          </chakra.i>
          <Box className="grid h-full place-content-center place-items-center">
            <chakra.h3 className="mb-3">両替時の日本円</chakra.h3>
            <Text className="text-4xl">
              {inputPrice && inputPrice !== 0
                ? Math.floor(
                    inputPrice * currencyObjData[currentNational].inverseRate
                  ).toLocaleString("ja-JP")
                : 0}
              <span className="text-sm">円</span>
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default CurrencyWrap;