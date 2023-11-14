"use client";

import React from "react";
import { chakra,Button,Input,FormControl, FormLabel,Stack,Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { fetchItems } from "@/api/item/fetchItem";

const Page = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: any = (data: {
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
    fetchItems.addHistory(formData);
  };

  return (
    <Box mt={8} mx={6}>
      <chakra.form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <Stack spacing={8}>
          <FormControl display="block">
            <FormLabel>Price:</FormLabel>
            <Input {...register("price", { required: true })} />
          </FormControl>

          <FormControl display="block">
            <FormLabel>Item ID:</FormLabel>
            <Input {...register("itemId", { required: true })} />
          </FormControl>
        </Stack>
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
      </chakra.form>
    </Box>
  );
};

export default Page;
