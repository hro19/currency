import React from 'react'
import { fetchItems } from '@/api/item/fetchItem';
import { Button, useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Item } from "@/ts/Item";

const DeliteItemButton = ({ item }: { item: Item }) => {
  const toast = useToast();
  const { data: session } = useSession();
  const userEmail: string | null | undefined = session?.user?.email;
  //console.log(userEmail)

  const { isSuccess, refetch } = useQuery({
    queryKey: ["items", userEmail],
    queryFn: () => fetchItems.getAll(userEmail || ""),
    enabled: typeof userEmail === "string",
  });

  const deleteMutation = useMutation({
    mutationFn: () => {
      return fetchItems.deleteItem(item.id);
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleClick = () => {
    deleteMutation.mutate();
    if (isSuccess) {
      toast({
        title: `アイテム削除成功`,
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <Button
        size="md"
        color="white"
        bg="gray.500"
        border="1px"
        className="mt-2 bg-gray-400"
        onClick={handleClick}
      >
        削除
      </Button>
    </>
  );
};

export default DeliteItemButton;