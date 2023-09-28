"use client"

import React from "react";
import { NATIONAL, NATIONAL_i18n } from "@/zustand/national";
import { Box, Heading, Stack, Select } from "@chakra-ui/react";
import { National } from "@/ts/Currency";
import { useNational } from "@/zustand/national";

const SelectNational = () => {
  const { currentNational, setCurrentNational } = useNational();
  
  return (
    <>
      <Stack spacing={8} p={5} direction="row" mb="8" mx="auto" width="80%">
        <Box>
          <Select
            variant="filled"
            placeholder="選択してください"
            bg="#FC8181"
            value={currentNational}
            onChange={(event) => setCurrentNational(event.target.value as National)}
          >
            {NATIONAL.map((national) => (
              <option key={national} value={national}>
                {NATIONAL_i18n[national].name.ja}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Heading fontSize="xl">
            選択された国：{NATIONAL_i18n[currentNational].name.ja}
          </Heading>
        </Box>
      </Stack>
    </>
  );
};

export default SelectNational;
