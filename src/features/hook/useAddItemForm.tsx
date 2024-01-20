import { useForm } from "react-hook-form";
import { fetchItems } from "@/api/item/fetchItem";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { ItemFormData } from "@/ts/Item";
import { useNational } from "@/zustand/national";
import { usePathname } from "next/navigation";
import { userEmailStore } from "@/zustand/userEmailStore";

export const useAddItemForm = () => {
  const { userEmail } = userEmailStore();

  const { register, handleSubmit, watch, setValue, reset } = useForm<ItemFormData>();

  const queryClient = useQueryClient();

  const { currentNational } = useNational();

  const slug = usePathname().split("/").pop();
  const { refetch } = useQuery({
    queryKey:
      slug === "jpy"
        ? ["items", userEmail]
        : ["items_CurrentNational", currentNational, userEmail],
    queryFn: () =>
      slug === "jpy"
        ? () => fetchItems.getAll(userEmail)
        : () => fetchItems.getCurrentNationalAll(currentNational, userEmail),
  });

  const Addmutation = useMutation({
    mutationFn: (data: ItemFormData) => {
      return fetchItems.addItem(data);
    },
  });

  return {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    queryClient,
    refetch,
    Addmutation,
  };
};