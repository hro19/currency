import { create } from "zustand";

export interface ItemDrawerStore {
  isItemDrawerOpen: boolean;
  onItemDrawerOpen: () => void;
  onItemDrawerClose: () => void;
}

export const addItemDrawerStore = create<ItemDrawerStore>((set) => ({
  isItemDrawerOpen: false,
  onItemDrawerOpen: () => set({ isItemDrawerOpen: true }),
  onItemDrawerClose: () => set({ isItemDrawerOpen: false }),
}));
