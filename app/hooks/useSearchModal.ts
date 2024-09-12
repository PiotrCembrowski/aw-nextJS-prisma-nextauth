import { create } from "zustand";

export type SearchQuery = {
  country: string;
  city: string;
  costs: number;
};

interface SearchModalStore {
  isOpen: boolean;
  step: string;
  open: () => void;
  close: () => void;
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setQuery: (query: SearchQuery) => set({ query: query }),
  query: {
    country: "",
    city: "",
    costs: 100,
  },
}));

export default useSearchModal;
