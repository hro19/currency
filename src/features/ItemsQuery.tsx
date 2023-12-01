"use client";

import React, { useEffect } from "react";
import ItemCard from "@/components/item/ItemCard";
import { Item } from "@/ts/Item";
import { useQuery } from "@tanstack/react-query";
import { CurrencyObj } from "@/ts/Currency";
import { Grid, GridItem, Progress, Stack, Text } from "@chakra-ui/react";
import { useNational } from "@/zustand/national";
import { fetchItems } from "@/api/item/fetchItem";
import { isfilteredDataEmpty } from "@/features/filter";
import { match } from "ts-pattern";

const ItemsQuery = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  const { currentNational } = useNational();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["items_CurrentNational"],
    queryFn: () => fetchItems.getCurrentNationalAll(currentNational),
  });
  const isEmpty = isfilteredDataEmpty(data);

  useEffect(() => {
    refetch();
  }, [currentNational, refetch]);

  if (isPending) {
    return (
      <Stack>
        <Progress size="sm" isIndeterminate colorScheme="pink" />
        <Progress size="sm" isIndeterminate colorScheme="pink" />
        <Progress size="sm" isIndeterminate colorScheme="pink" />
      </Stack>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return match(isEmpty)
    .with(true, () => (
      <Text fontSize="2xl" color="gray.700">
        選択された国のデータがありません
      </Text>
    ))
    .otherwise(() => (
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={4} mx={3}>
        {data.map((item: Item) => (
          <GridItem key={item.id}>
            <ItemCard
              item={item}
              currencyData={currencyObjData[item.currencyCode.toString()]}
            />
          </GridItem>
        ))}
      </Grid>
    ));
};

export default ItemsQuery;
