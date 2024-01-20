"use client";

import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { fetchItems } from "@/api/item/fetchItem";
import { Item } from "@/ts/Item";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNational } from "@/zustand/national";
import { userEmailStore } from "@/zustand/userEmailStore";

const EditItemButton = ({ item }: { item: Item }) => {
  const { userEmail } = userEmailStore();
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm<
    Omit<Item, "updated_at" | "created_at" | "id">
  >({
    defaultValues: {
      name: item.name,
    } as unknown as Pick<Item, "name">,
  });
  const toast = useToast();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const { currentNational } = useNational();
  const { isSuccess, refetch } = useQuery({
    queryKey: ["items_CurrentNational", currentNational, userEmail],
    queryFn: () => fetchItems.getCurrentNationalAll(currentNational, userEmail),
  });

  const editMutation = useMutation({
    mutationFn: (formData: { name: string }) => {
      return fetchItems.editItem(item.id, formData);
    },
    onSuccess: () => {
      refetch();
    },
  });

  const onSubmit = async (formData: { name: string }) => {
    editMutation.mutate(formData);

    if (isSuccess) {
      handleClose();
      toast({
        title: "作成成功",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        color={"green.500"}
        bg="white"
        border="2px"
        borderColor="green.500"
        _hover={{ bg: "green.100" }}
        fontSize="lg"
      >
        編集
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>アイテム編集</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>商品名</FormLabel>
                  <Input type="text" {...register("name")} />
                </FormControl>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="white"
              border="1px"
              borderColor="green.500"
              _hover={{ bg: "green.100" }}
              fontSize="lg"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              送信
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditItemButton;