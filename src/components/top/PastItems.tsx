"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { gapaoData } from "@/lib/rechart/gapao";
import { cinemaData } from "@/lib/rechart/cinema";
import { potetochipData } from "@/lib/rechart/potetochip";
import { motion } from "framer-motion";
import ItemAnalysis from "@/components/top/ItemAnalysis";

const PastItems = () => {
  return (
    <>
      <Box>
        <ItemAnalysis
          bgColor={"bg-gray-800"}
          countryFlag={"thb"}
          itemName={"ガパオライス（1皿）"}
          itemPicture={"food_gapao_rice"}
          graphData={gapaoData}
          currencyName={"タイバーツ"}
          currencyLineColor={"#8884d8"}
          jpyLineColor={"#82ca9d"}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <ItemAnalysis
            bgColor={"bg-gray-400"}
            countryFlag={"krw"}
            itemName={"映画チケット（1枚）"}
            itemPicture={"building_cinema"}
            graphData={cinemaData}
            currencyName={"韓国ウォン"}
            currencyLineColor={"#2a5996"}
            jpyLineColor={"#229120"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <ItemAnalysis
            bgColor={"bg-gray-700"}
            countryFlag={"php"}
            itemName={"ポテトチップス（1袋:80g）"}
            itemPicture={"gomi_potatochips_fukuro"}
            graphData={potetochipData}
            currencyName={"フィリピンペソ"}
            currencyLineColor={"#8884d8"}
            jpyLineColor={"#82ca9d"}
          />
        </motion.div>
      </Box>
    </>
  );
}

export default PastItems

