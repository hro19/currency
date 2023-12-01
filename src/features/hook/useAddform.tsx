"use client";

import { useForm } from "react-hook-form";
import { historySchema, TypehistorySchema } from "@/zod/historySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@chakra-ui/react";
import { fetchItems } from "@/api/item/fetchItem";

export const useAddForm = ({
  successMessage,
  setIsModalOpen,
}: {
  successMessage: string;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypehistorySchema>({
    resolver: zodResolver(historySchema),
  });

  const onSubmit = async (data: TypehistorySchema) => {
    try {
      await fetchItems.addHistory(data);
      setIsModalOpen && setIsModalOpen(false);
      reset();
      toast({
        title: successMessage,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error: unknown) {
      const e = error as Error; 
      toast({
        title: "エラーが発生しました",
        description: e.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
};