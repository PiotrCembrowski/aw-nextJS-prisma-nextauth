import { create } from "zustand";

interface ContinentStore {
  name: string;
  changeName: (name: string) => void;
}

export const useContinent = create<ContinentStore>((set) => ({
  name: "Asia",
  changeName: (name) => set({ name: name }),
}));
