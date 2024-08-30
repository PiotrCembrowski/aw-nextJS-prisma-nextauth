import { create } from "zustand";

interface AddReportModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const AddReportModal = create<AddReportModalStore>((set) => ({
  isOpen: false;
  open: () => set({ isOpen: true });
  close: () => set({ isOpen: false });  
}));

export default AddReportModal;
