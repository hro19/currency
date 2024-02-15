"use client"

import React from "react";
import { NATIONALexceptJap, NATIONAL_i18n } from "@/zustand/national";
import { Box, Heading, Stack, Select } from "@chakra-ui/react";
import { National } from "@/ts/Currency";
import { useNational } from "@/zustand/national";

const SelectNational = () => {
  const { currentNational, setCurrentNational } = useNational();
  
  return (
    <>
      <Stack
        spacing={{ base: 4, md: 8 }}
        px={5}
        direction="row"
        alignItems="center"
      >
        <Box>
          <Select
            variant="filled"
            _hover={{ bg: "pink.200" }}
            fontSize={{ base: "md", md: "xl" }}
            className="bg-pink-400"
            value={currentNational}
            onChange={(event) => setCurrentNational(event.target.value as National)}
          >
            {NATIONALexceptJap.map((national) => (
              <option key={national} value={national}>
                {NATIONAL_i18n[national].name.ja}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Heading fontSize={{ base: "sm", md: "xl" }}>
            選択された国：{NATIONAL_i18n[currentNational].name.ja}
          </Heading>
        </Box>
      </Stack>
    </>
  );
};

export default SelectNational;