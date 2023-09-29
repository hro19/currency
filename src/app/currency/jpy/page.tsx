import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import CurrencyWrap from "@/components/currency/CurrencyWrap";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "../php/SelectNational";
import HeaderTitle from "@/components/common/HeaderTitle";


const UsersList = async () => {
  const currencyObjData: Awaited<CurrencyObj> = await GetApiCurency("jpy");

  return (
    <>
      <HeaderTitle title="日本円への通貨計算" />
      <div className="mx-auto w-full max-w-[860px] py-8">
        <SelectNational />
        <CurrencyWrap currencyObjData={currencyObjData} />
      </div>
    </>
  );
};

export default UsersList;
