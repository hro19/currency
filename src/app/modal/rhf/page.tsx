"use client";

import React from "react";
import {
  chakra,
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useAddForm } from "@/features/hook/useAddform";

const Page = () => {
  const { register, onSubmit, errors } = useAddForm({ successMessage: "成功しました" });

  return (
    <Box mt={8} mx={6}>
      <chakra.form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <Stack spacing={8}>
          <FormControl display="block" isInvalid={!!errors.price}>
            <FormLabel>Price:</FormLabel>
            <Input {...register("price", { required: true, valueAsNumber: true })} />
            <FormErrorMessage>
              {errors.price && (errors.price.message as string)}
            </FormErrorMessage>
          </FormControl>

          <FormControl display="block" isInvalid={!!errors.itemId}>
            <FormLabel>Item ID:</FormLabel>
            <Input {...register("itemId", { required: true, valueAsNumber: true })} />
            <FormErrorMessage>
              {errors.itemId && (errors.itemId.message as string)}
            </FormErrorMessage>
          </FormControl>

          <FormControl display="block" isInvalid={!!errors.rate}>
            <FormLabel>rate:</FormLabel>
            <Input {...register("rate", { required: true, valueAsNumber: true })} />
            <FormErrorMessage>
              {errors.rate && (errors.rate.message as string)}
            </FormErrorMessage>
          </FormControl>

          <FormControl display="block" isInvalid={!!errors.inverseRate}>
            <FormLabel>inverseRate:</FormLabel>
            <Input
              {...register("inverseRate", { required: true, valueAsNumber: true })}
            />
            <FormErrorMessage>
              {errors.inverseRate && (errors.inverseRate.message as string)}
            </FormErrorMessage>
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