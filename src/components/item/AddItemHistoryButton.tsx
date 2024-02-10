"use client";

import React, { useState } from "react";
import {
  chakra,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  InputGroup,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { fetchItems } from "@/api/item/fetchItem";
import { ItemHistory } from "@/ts/Item";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Currency } from "@/ts/Currency";
import { SubmitHandler } from "react-hook-form";
import { useNational } from "@/zustand/national";
import { userEmailStore } from "@/zustand/userEmailStore";

const Modalpage = ({ itemId, currencyData }: { itemId: number, currencyData: Currency }) => {
  const { userEmail } = userEmailStore();
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } =
    useForm<Omit<ItemHistory, "updated_at" | "created_at" | "id">>();
  const toast = useToast();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<
    Omit<ItemHistory, "updated_at" | "created_at" | "id">
  > = async (data: Omit<ItemHistory, "updated_at" | "created_at" | "id">) => {
    mutation.mutate(data);

    if (isSuccess) {
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

  const queryClient = useQueryClient();

  const { currentNational } = useNational();
  const { isSuccess, refetch } = useQuery({
    queryKey: ["items_CurrentNational", currentNational, userEmail],
    queryFn: () => fetchItems.getCurrentNationalAll(currentNational, userEmail),
  });

  const mutation = useMutation({
    mutationFn: fetchItems.addHistory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      refetch();
    },
  });

  return (
    <Box>
      <Button
        onClick={handleOpen}
        color={"blue.500"}
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
                  <FormLabel>現在の価格</FormLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      id="price"
                      {...register("price", { required: true, valueAsNumber: true })}
                      step="0.0001"
                    />
                    <InputRightAddon>{currencyData.code}</InputRightAddon>
                  </InputGroup>
                </FormControl>

                <FormControl hidden>
                  <FormLabel>Item ID:</FormLabel>
                  <Input
                    type="number"
                    id="itemId"
                    {...register("itemId", { required: true, valueAsNumber: true })}
                    value={itemId}
                  />
                </FormControl>

                <FormControl hidden>
                  <FormLabel>Rate（小数点第二まで）:</FormLabel>
                  <Input
                    type="number"
                    id="rate"
                    step="0.01"
                    {...register("rate", { required: true, valueAsNumber: true })}
                    value={currencyData.rate}
                  />
                </FormControl>

                <FormControl hidden>
                  <FormLabel>Inverse Rate（小数点第二まで）:</FormLabel>
                  <Input
                    type="number"
                    id="inverseRate"
                    step="0.01"
                    {...register("inverseRate", { required: true, valueAsNumber: true })}
                    value={currencyData.inverseRate}
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
};

export default Modalpage;