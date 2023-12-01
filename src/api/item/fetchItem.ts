import { TypehistorySchema } from "@/zod/historySchema";
import {National} from "@/ts/Currency";

export const fetchItems = {
  getAll: async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/items`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error(error);
    }
  },
  addHistory: async (formData: TypehistorySchema) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/itemhistory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  },
  editItem: async (itemId: number, formData: unknown) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASIC_URL}/items/${itemId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  },
  deliteItemHistory: async (itemHistoryId: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASIC_URL}/itemhistory/${itemHistoryId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  },
  addItem: async (formData: {
    name: string;
    price: number;
    currencyCode: string;
    rate: number;
    inverseRate: number;
  }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/itemsadd`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  getCurrentNationalAll: async (currencyCode: National) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASIC_URL}/items/currency/${currencyCode}`,
        {
          cache: "no-store",
        }
      );
      if (!response.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error(error);
    }
  },
};