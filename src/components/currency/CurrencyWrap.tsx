"use client";

import React, { useEffect,useState } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import Image from "next/image";
import { dateFormatter } from "@/utils/dateFns";
import { NATIONAL_i18n } from "@/zustand/national";
import { useNational } from "@/zustand/national";
import { Flex,Box } from "@chakra-ui/react";

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  // console.log(currencyObjData);
  // console.log(currencyObjData["php"]);
 const { currentNational, setCurrentNational } = useNational();

  return (
    <>
      <Flex>
        <Box bg={"cyan.100"} px={4} py={12} w={"100%"} className="relative">
          <i className="absolute top-3 left-2">
            <Image
              src={`/country/${currentNational}.png`}
              alt="交換元通貨のフラグ"
              width={80}
              height={55}
              priority
            />
          </i>
          <section className="text-center">
            <h3 className="text-lg font-bold">
              {NATIONAL_i18n[currentNational].name.ja}のレート
              <br />
              {currencyObjData[currentNational].inverseRate.toFixed(5).toString()}円
              <span className="text-sm">
                (/{NATIONAL_i18n[currentNational].currencyName.ja})
              </span>
            </h3>
            <span className="text-xs block">
              更新日（{dateFormatter.zi(currencyObjData[currentNational].date)}）
            </span>

            <input
              type="text"
              id="name"
              placeholder="商品名"
              className="my-4 text-2xl border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              id="local_price"
              placeholder="商品現地価格"
              className="my-4 text-2xl border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </section>
        </Box>
        <Box bg={"green.200"} px={4} py={12} w={"100%"} className="relative">
          <i className="absolute top-3 left-2">
            <Image
              src="/country/jpy.png"
              alt="交換目的通貨のフラグ"
              width={80}
              height={55}
              priority
            />
          </i>
          {/* <h2 className="text-md font-bold text-right">日本円のコンテンツ</h2> */}
          <section className="grid place-content-center place-items-center h-full">
            <h3 className="mb-3">両替時の日本円</h3>
            <p className="text-4xl">
              {Math.floor(432300).toLocaleString("ja-JP")}
              <span className="text-sm">円</span>
            </p>
          </section>
        </Box>
      </Flex>
      <div className="flex justify-center mt-10 mx-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">商品名</th>
              <th className="px-4 py-2">国名</th>
              <th className="px-4 py-2">レート計算日時</th>
              <th className="px-4 py-2">現地価格</th>
              <th className="px-4 py-2">日本円価格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Product A</td>
              <td className="border px-4 py-2">USD</td>
              <td className="border px-4 py-2">2023-08-25 12時</td>
              <td className="border px-4 py-2">$100.00</td>
              <td className="border px-4 py-2">¥11,000.00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Product B</td>
              <td className="border px-4 py-2">EUR</td>
              <td className="border px-4 py-2">2023-08-25 13時</td>
              <td className="border px-4 py-2">$75.50</td>
              <td className="border px-4 py-2">¥9,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CurrencyWrap;