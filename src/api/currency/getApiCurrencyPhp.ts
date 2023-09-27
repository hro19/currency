import { Currency, CurrencyObj } from "@/ts/Currency";

export const GetApiCurencyPhp = async (): Promise<CurrencyObj> => {
  const response = await fetch("https://www.floatrates.com/daily/php.json", {
    cache: "no-store",
  });
  const phpCur = await response.json();
  return phpCur;
};
