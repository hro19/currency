"use client";

import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import Image from "next/image";
import { dateFormatter } from "@/utils/dateFns";
import { NATIONAL_i18n, useNational } from "@/zustand/national";
import { inputPriceStore } from "@/zustand/inputPriceStore";
import { chakra, AspectRatio, Flex, Box, Text, Heading } from "@chakra-ui/react";
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
            <AspectRatio width={{ base: "50px", md: "70px" }} ratio={4 / 3}>
              <Image
                src={`/country/${currentNational}.png`}
                alt="交換元通貨のフラグ"
                sizes="100%"
                fill
                priority
              />
            </AspectRatio>
          </chakra.i>
          <Box as={"section"} className="text-center">
            <Heading as="h2" size={{ base: "sm", md: "md" }} className="font-bold">
              {NATIONAL_i18n[currentNational].name.ja}のレート
              <br />
              {currencyObjData[currentNational].inverseRate.toFixed(2)}円
              <chakra.span className="text-sm">
                (/{NATIONAL_i18n[currentNational].currencyName.ja})
              </chakra.span>
            </Heading>
            <chakra.span className="block text-xs">
              更新日（{dateFormatter.zi(currencyObjData[currentNational].date)}）
            </chakra.span>
            <JpyForm currencyObjData={currencyObjData} />
          </Box>
        </Box>
        <Box bg={"green.200"} px={4} py={12} w={"100%"} className="relative">
          <chakra.i className="absolute left-2 top-3">
            <AspectRatio width={{ base: "50px", md: "70px" }} ratio={4 / 3}>
              <Image
                src="/country/jpy.png"
                alt="交換目的通貨のフラグ"
                sizes="100%"
                fill
                priority
              />
            </AspectRatio>
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