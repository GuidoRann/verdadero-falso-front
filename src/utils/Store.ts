import { create } from "zustand";

type store = {
  selectedCategory: string;
  selectedAmount: number;
  setSelectedCategory: (category: string) => void;
  setSelectedAmount: (amount: number) => void;
};

const useStore = create<store>((set) => ({
  selectedCategory: "",
  selectedAmount: 5,
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
  setSelectedAmount: (amount: number) => set({ selectedAmount: amount }),
}));

export default useStore;
