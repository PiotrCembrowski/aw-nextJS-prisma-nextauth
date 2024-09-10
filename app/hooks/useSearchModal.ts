import { create } from "zustand";

export type SearchQuery = {
  country: string;
  city: string;
  costs: number;
};

interface SearchModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useSearchModal;
