import { create } from "zustand";

type ContinentStore = {
  name: string;
  changeName: (name: string) => void;
};

export const useContinent = create<ContinentStore>((set) => ({
  name: "",
  changeName: (newName: string) => set({ name: newName }),
}));
