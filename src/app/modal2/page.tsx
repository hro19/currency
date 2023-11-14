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

const EditItemButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<
    Omit<Item, "updated_at" | "created_at" | "id">
  >({
    defaultValues: {
      name: "item.name",
      currencyCode: "item.currencyCode",
    } as unknown as Omit<Item, "updated_at" | "created_at" | "id">,
  });
  const toast = useToast();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit = async (formData: Omit<Item, "updated_at" | "created_at" | "id">) => {
    try {
      const response = await fetchItems.editItem(1, formData);
      if (response.httpStatus === 200) {
        reset();
        toast({
          title: "Success!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        handleClose();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error!",
        description: "Failed to submit form",
        status: "error",
        duration: 3000,
        isClosable: true,
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
                <FormControl>
                  <FormLabel>通貨コード</FormLabel>
                  <Input type="text" {...register("currencyCode")} />
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
