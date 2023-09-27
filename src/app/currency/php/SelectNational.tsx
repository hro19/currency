"use client"

import React,{useState} from "react";
import { NATIONAL, NATIONAL_i18n } from "@/zustand/national";
import { Box, Center, Button, Heading, Stack, Select } from "@chakra-ui/react";
import { National } from "@/ts/Currency";

const SelectNational = () => {
  const [currentNational, setCurrentNational] = useState<National>("jpy");

  return (
    <>
      <Box>
        <Center bgColor="orange.500" color="white" p="4">
          <Heading as="h1" size="xl" noOfLines={1}>
            各国の通貨一覧
          </Heading>
        </Center>
      </Box>
      <Stack spacing={8} p={5} direction="row" mb="8" mx="auto" width="80%">
        <Box>
          <Select
            variant="filled"
            placeholder="選択してください"
            bg="#FC8181"
            onChange={(event) => setCurrentNational(event.target.value as National)}
          >
            {NATIONAL.map((national) => (
              <option value={national}>{NATIONAL_i18n[national].name.ja}</option>
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
