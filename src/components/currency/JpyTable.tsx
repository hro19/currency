"use client";

import React from "react";

import { chakra,Box, Table, Thead, Tbody, Tr, Th, Td, Stack, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Item } from "@/ts/Item";
import { dateFormatter } from "@/utils/dateFns";
import { NATIONAL_i18n } from "@/zustand/national";
import { National } from "@/ts/Currency";
import Image from "next/image";
import { fetchItems } from "@/api/item/fetchItem";
import ItemDelete from "./ItemDelete";
import { useSession } from "next-auth/react";

const JpyTable = () => {
  const { data: session } = useSession();
  const userEmail:string | null | undefined = session?.user?.email;

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["items", userEmail],
    queryFn: () => fetchItems.getAll(userEmail || ""),
    enabled: typeof userEmail === "string",
  });

  if (isPending) {
    return (
      <Stack spacing={4} my={9}>
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} height="20px" />
        ))}
      </Stack>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Box mt={10} mx="auto">
      <Table colorScheme="gray">
        <Thead>
          <Tr bg="gray.100">
            <Th px={4} py={2}>
              商品名
            </Th>
            <Th px={4} py={2}>
              国名
            </Th>
            <Th px={4} py={2}>
              レート計算日時
            </Th>
            <Th px={4} py={2}>
              現地価格
            </Th>
            <Th px={4} py={2}>
              日本円価格
            </Th>
            <Th px={4} py={2}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: Item) => (
            <Tr key={item.id}>
              <Td px={4} py={2}>
                {item.name}
              </Td>
              <Td px={4} py={2}>
                <Image
                  src={`/country/${item.currencyCode}.png`}
                  alt="交換元通貨のフラグ"
                  width={22}
                  height={15}
                  priority
                />
              </Td>
              <Td px={4} py={2} fontSize={"sm"}>
                {dateFormatter.funJap(item.created_at as unknown as string)}
              </Td>
              <Td px={4} py={2}>
                <chakra.strong>{item.histories[0].price}</chakra.strong>
                <chakra.span className="pl-1 text-xs">
                  {
                    NATIONAL_i18n[item.currencyCode as unknown as National].currencyName
                      .ja
                  }
                </chakra.span>
              </Td>
              <Td px={4} py={2}>
                <chakra.strong>
                  {(item.histories[0].price * item.histories[0].inverseRate).toFixed(0)}
                </chakra.strong>
                <chakra.span className="pl-1 text-xs">円</chakra.span>
              </Td>
              <Td px={4} py={2}>
                <ItemDelete item={item} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default JpyTable;