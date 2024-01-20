"use client";

import React, { useEffect } from "react";
import {
  useToast,
  Stack,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  chakra,
} from "@chakra-ui/react";
import { NATIONAL, useNational } from "@/zustand/national";
import { ItemFormData } from "@/ts/Item";
import { useAddItemForm } from "@/features/hook/useAddItemForm";
import { addItemDrawerStore } from "@/zustand/addItemDrawerStore";
import { SubmitHandler } from "react-hook-form";
import { CurrencyObj } from "@/ts/Currency";
import { userEmailStore } from "@/zustand/userEmailStore";

const AddItem = ({
  currencyObjData,
}: {
  currencyObjData: CurrencyObj;
  }) => {
  const { currentNational } = useNational();
  const { userEmail } = userEmailStore();
  const { onItemDrawerClose } = addItemDrawerStore();
  const {
    register,
    handleSubmit,
    // watch,
    setValue,
    reset,
    queryClient,
    refetch,
    Addmutation,
  } = useAddItemForm();
  const toast = useToast();
  // const currencyCode = watch("currencyCode");

  useEffect(() => {
    if (currencyObjData[currentNational]) {
      const computedRate = currencyObjData[currentNational].rate;
      const computedInverseRate = currencyObjData[currentNational].inverseRate;

      setValue("rate", Number(computedRate.toFixed(2)));
      setValue("inverseRate", Number(computedInverseRate.toFixed(2)));
      setValue("userEmail", userEmail);
    }
  }, [currentNational, currencyObjData, userEmail, setValue]);

  const onSubmit: SubmitHandler<ItemFormData> = async (data: ItemFormData) => {
    Addmutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["items"] });
        refetch();
        reset();
        onItemDrawerClose();
        toast({
          title: "アイテム新規追加成功!!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      },
    });
  };

  return (
    <Container>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>商品名</FormLabel>
            <Input type="text" id="name" {...register("name", { required: true })} />
          </FormControl>

          <FormControl>
            <FormLabel>現地価格</FormLabel>
            <Input
              type="number"
              id="price"
              {...register("price", { required: true, valueAsNumber: true })}
            />
          </FormControl>

          <FormControl hidden>
            <FormLabel>国</FormLabel>
            <Input
              type="hidden"
              id="currencyCode"
              {...register("currencyCode", { required: true })}
              value={currentNational}
            />
            {/* <Select {...register("currencyCode", { required: true })}>
              <option key="firstoption" value={""}>
                ナショナルを下記より選択してください
              </option>
              {NATIONAL.filter((code) => code !== "jpy").map((code) => (
                <option key={code} value={code}>
                  {code.toUpperCase()}
                </option>
              ))}
            </Select> */}
          </FormControl>

          <FormControl hidden>
            <FormLabel>レート</FormLabel>
            <Input
              type="number"
              id="rate"
              {...register("rate", { required: true, valueAsNumber: true })}
              step="0.01"
            />
          </FormControl>

          <FormControl hidden>
            <FormLabel>逆レート</FormLabel>
            <Input
              type="number"
              id="inverseRate"
              {...register("inverseRate", { required: true, valueAsNumber: true })}
              step="0.01"
            />
          </FormControl>

          <FormControl hidden>
            <Input
              type="text"
              id="userEmail"
              {...register("userEmail", { required: true })}
            />
          </FormControl>
        </Stack>

        <Button
          mt={4}
          bg="white"
          border="1px"
          color={"blue.500"}
          borderColor="blue.500"
          _hover={{ bg: "blue.100" }}
          fontSize="lg"
          type="submit"
        >
          新規作成
        </Button>
      </chakra.form>
    </Container>
  );
};
export default AddItem