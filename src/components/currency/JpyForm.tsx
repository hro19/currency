import React, { useEffect } from "react";
import { CurrencyObj } from "@/ts/Currency";
import { useNational } from "@/zustand/national";
import { inputPriceStore } from "@/zustand/inputPriceStore";
import {
  useToast,
  FormControl,
  FormLabel,
  Input,
  Button,
  chakra,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";
import { useAddItemForm } from "@/features/hook/useAddItemForm";
import { ItemFormData } from "@/ts/Item";
import { NATIONAL_i18n } from "@/zustand/national";
import { SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";

const JpyForm = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    queryClient,
    refetch,
    Addmutation,
  } = useAddItemForm();

  const { currentNational } = useNational();
  const { setInputPrice } = inputPriceStore();
  const toast = useToast();
  const price = watch("price");
  const { data: session, status } = useSession();
  // console.log(session?.user?.email);

  useEffect(() => {
    if (currentNational) {
      const computedRate = currencyObjData[currentNational].rate;
      const computedInverseRate = currencyObjData[currentNational].inverseRate;
      const computedEmail = session?.user?.email || "";

      setValue("currencyCode", currentNational);
      setValue("rate", computedRate);
      setValue("inverseRate", computedInverseRate);
      setValue("userEmail", computedEmail);
    }
  }, [currentNational, currencyObjData, setValue, session]);

  useEffect(() => {
    setInputPrice(price);
  }, [price, setInputPrice]);

  const onSubmit: SubmitHandler<ItemFormData> = async (data: ItemFormData) => {
    Addmutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["items"] });
        refetch();
        reset();
        toast({
          title: "アイテム新規追加成功!!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
        console.log(data);
      },
    });
  };

  return (
    <chakra.form>
      {status === "authenticated" && (
        <FormControl id="name" mt={4}>
          <Input
            type="text"
            id="name"
            {...register("name", { required: true })}
            placeholder="商品名"
            className="my-4 rounded-lg border border-gray-300 bg-white px-3 py-2 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormControl>
      )}

      <FormControl id="price">
        <InputGroup>
          <Input
            type="text"
            id="price"
            {...register("price", { required: true, valueAsNumber: true })}
            placeholder="商品現地価格"
            className="my-4 rounded-l-lg border border-gray-300 bg-white px-3 py-2 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <InputRightAddon className="my-4">
            {NATIONAL_i18n[currentNational].currencyName.ja}
          </InputRightAddon>
        </InputGroup>
      </FormControl>

      <FormControl id="currencyCode" hidden>
        <Input
          type="text"
          id="currencyCode"
          {...register("currencyCode", { required: true })}
          defaultValue={currentNational}
        />
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

      {status === "unauthenticated" ? (
        <div className="mt-2">
          <a
            className={
              " rounded-md bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-400"
            }
            href="/currency/jpy"
          >
            ログインする
          </a>
        </div>
      ) : (
        <Button
          type="submit"
          className={"bg-indigo-600 hover:bg-indigo-400"}
          color={"white"}
          fontSize="lg"
          onClick={handleSubmit(onSubmit)}
        >
          新規作成
        </Button>
      )}
    </chakra.form>
  );
};

export default JpyForm;