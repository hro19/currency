"use client";

import React, { useEffect,useState } from "react";
import ItemCard from "@/components/item/ItemCard";
import { Item } from "@/ts/Item";
import { useQuery } from "@tanstack/react-query";
import { CurrencyObj } from "@/ts/Currency";
import { Grid, GridItem, Progress, Stack, Text } from "@chakra-ui/react";
import { useNational } from "@/zustand/national";
import { fetchItems } from "@/api/item/fetchItem";
import { isfilteredDataEmpty } from "@/features/filter";
import { match } from "ts-pattern";
import { userEmailStore } from "@/zustand/userEmailStore";

const ItemsQuery = ({
  currencyObjData,
  userEmail,
}: {
  currencyObjData: CurrencyObj;
  userEmail:string;
}) => {
  const { currentNational } = useNational();
  
  const { setUserEmail } = userEmailStore();
  useEffect(() => {
    setUserEmail(userEmail);
  }, [setUserEmail, userEmail]);

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["items_CurrentNational", currentNational, userEmail],
    queryFn: () => fetchItems.getCurrentNationalAll(currentNational, userEmail),
  });

  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  useEffect(() => {
    setIsEmpty(isfilteredDataEmpty(data));
    refetch();
  }, [refetch, data, setIsEmpty]);

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
        {Array.isArray(data) ? (
          data.map((item: Item) => (
            <GridItem key={item.id}>
              <ItemCard
                item={item}
                currencyData={currencyObjData[item.currencyCode.toString()]}
              />
            </GridItem>
          ))
        ) : (
          <p>表示できるデータがありません</p>
        )}
      </Grid>
    ));
  };

export default ItemsQuery;
