import React from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { GetApiCurency } from "@/api/currency/getApiCurrency";
import SelectNational from "./SelectNational";
import CurrencyDataTable from "./CurrencyDataTable";


const Page = async () => {
  const currencyData: Awaited<Awaited<CurrencyObj>> = await GetApiCurency();
  return (
    <div>
      <SelectNational />
      <CurrencyDataTable currencyData={currencyData} />
    </div>
  );
};

export default Page;
