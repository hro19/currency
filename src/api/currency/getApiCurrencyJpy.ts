import { Currency, CurrencyObj } from "@/ts/Currency";

export const GetApiCurencyJpy = async (): Promise<CurrencyObj> => {
  const response = await fetch("https://www.floatrates.com/daily/jpy.json", {
    cache: "no-store",
  });
  const currencyObj: CurrencyObj = await response.json();
  return currencyObj;
};
