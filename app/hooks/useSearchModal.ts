import { create } from "zustand";

export type SearchQuery = {
  country: string;
  city: string;
  costs: number;
};

interface SearchModalStore {
  isOpen: boolean;
  step: string;
  open: (step: string) => void;
  close: () => void;
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  step: "",
  open: (step) => set({ isOpen: true, step: step }),
  close: () => set({ isOpen: false }),
  setQuery: (query: SearchQuery) => set({ query: query }),
  query: {
    country: "",
    city: "",
    costs: 100,
  },
}));

export default useSearchModal;
