"use client";

import React, { useState } from 'react'
import { chakra,Input,FormControl, FormLabel,Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { fetchItems } from "@/api/item/fetchItem";
import { ItemHistory } from "@/ts/Item";

const Modalpage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, reset } =
    useForm<Omit<ItemHistory, "updated_at" | "created_at" | "id">>();
  const toast = useToast();

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const onSubmit: any = async (data: {
    price: number;
    itemId: number;
    rate: number;
    inverseRate: number;
  }) => {
    const formData = {
      price: Number(data.price),
      itemId: Number(data.itemId),
      rate: Number(data.rate),
      inverseRate: Number(data.inverseRate),
    };
    const response = await fetchItems.addHistory(formData);
    if (response.httpStatus === 201) {
      handleClose();
      reset();
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
    <Box>
      <Button
        onClick={handleOpen}
        bg="white"
        border="2px"
        borderColor="blue.500"
        _hover={{ bg: "blue.100" }}
        fontSize="lg"
      >
        価格新規追加
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent py={6}>
          <ModalHeader>価格新規追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <chakra.form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <Stack spacing={6}>
                <FormControl display="block">
                  <FormLabel>Price:</FormLabel>
                  <Input
                    type="number"
                    id="price"
                    {...register("price", { required: true })}
                  />
                </FormControl>

                <FormControl display="block">
                  <FormLabel>Item ID:</FormLabel>
                  <Input
                    type="number"
                    id="itemId"
                    {...register("itemId", { required: true })}
                  />
                </FormControl>

                <FormControl display="block">
                  <FormLabel>Rate（小数点第二まで）:</FormLabel>
                  <Input
                    type="number"
                    id="rate"
                    step="0.01"
                    {...register("rate", { required: true })}
                  />
                </FormControl>

                <FormControl display="block">
                  <FormLabel>Inverse Rate（小数点第二まで）:</FormLabel>
                  <Input
                    type="number"
                    id="inverseRate"
                    step="0.01"
                    {...register("inverseRate", { required: true })}
                  />
                </FormControl>

                <Button
                  bg="white"
                  border="1px"
                  borderColor="blue.500"
                  _hover={{ bg: "blue.100" }}
                  fontSize="lg"
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </chakra.form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Modalpage;
