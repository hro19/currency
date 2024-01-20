import React from 'react'
import { fetchItems } from '@/api/item/fetchItem';
import { Button, useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNational } from "@/zustand/national";
import { userEmailStore } from "@/zustand/userEmailStore";

const DeliteHstoryButton = ({ historyId }: { historyId:number }) => {
    const toast = useToast();
    const { currentNational } = useNational();
    const { userEmail } = userEmailStore();
  
      const { isSuccess, refetch } = useQuery({
        queryKey: ["items_CurrentNational", currentNational, userEmail],
        queryFn: () => fetchItems.getCurrentNationalAll(currentNational, userEmail),
      });

  const deleteMutation = useMutation({
    mutationFn: () => {
      return fetchItems.deliteItemHistory(historyId);
    },
    onSuccess: () => {
        refetch();
    },
  });

  const handleClick = () => {
      deleteMutation.mutate();
          if (isSuccess) {
            toast({
              title: `ヒストリーId${historyId}削除成功`,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "bottom",
            });
          }
  };
    
    return (
        <>
            <Button
                size="xs"
                color={"pink.500"}
                bg="white"
                border="1px"
                borderColor="pink.500"
                fontSize={"xs"}
                onClick={handleClick}
            >
                削除
            </Button>
        </>
    );
};

export default DeliteHstoryButton