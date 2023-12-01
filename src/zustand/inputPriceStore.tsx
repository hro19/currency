import { create } from "zustand";

type inputPriceStoreType = {
  inputPrice: number;
  setInputPrice: (price: number) => void;
};

export const inputPriceStore = create<inputPriceStoreType>((set) => ({
  inputPrice: 0,
  setInputPrice: (price) => set({ inputPrice: price }),
}));
