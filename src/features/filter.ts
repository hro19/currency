import { Item } from "@/ts/Item";

export const filterCurrentNationalData = (data: Item[], currentNational: string) => {
  const filteredData: Item[] = data.filter(
    (item: Item) => item.currencyCode.toString() === currentNational
  );
  
  return filteredData;
};

export const isfilteredDataEmpty = (filteredData: Item[] | undefined) => {
  return filteredData?.length === 0 ? true : false;
}