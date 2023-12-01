import { CurrencyObj, National } from "@/ts/Currency";

//デフォルト値はjpy（日本）とする
export const GetApiCurency = async (national: National = "jpy"): Promise<CurrencyObj> => {
  const response = await fetch(`https://www.floatrates.com/daily/${national}.json`, {
    cache: "no-store",
  });
  const phpCur = await response.json();
  return phpCur;
};
