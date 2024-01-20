import { create } from "zustand";

type UserEmailStoreType = {
  userEmail: string;
  setUserEmail: (userName: string) => void;
};

export const userEmailStore = create<UserEmailStoreType>((set) => ({
  userEmail: "",
  setUserEmail: (email) => set({ userEmail: email }),
}));
