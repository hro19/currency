import React from 'react'
import Image from "next/image";
import SimpleAreaChart from "@/lib/rechart/SimpleAreaChart";


interface ItemAnalysisProps {
  bgColor: string;
  itemName: string;
  itemPicture: string;
  graphData: any;
  currencyName: string;
  currencyLineColor: string;
  jpyLineColor: string;
}

const ItemAnalysis: React.FC<ItemAnalysisProps> = ({
  bgColor,
  itemName,
  itemPicture,
  graphData,
  currencyName,
  currencyLineColor,
  jpyLineColor,
}) => {
  return (
    <section className={`dark: py-2 ${bgColor} dark:text-gray-100`}>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col items-center justify-center justify-items-center lg:items-end">
          <Image src={`/items/${itemPicture}.png`} alt="写真" width="200" height="150" />
          <h2 className="text-xl">{itemName}</h2>
        </div>
        <div className="flex flex-col p-6 md:p-8 lg:p-12">
          <SimpleAreaChart
            graphData={graphData}
            currencyName={currencyName}
            currencyLineColor={currencyLineColor}
            jpyLineColor={jpyLineColor}
          />
        </div>
      </div>
    </section>
  );
};

export default ItemAnalysis;
