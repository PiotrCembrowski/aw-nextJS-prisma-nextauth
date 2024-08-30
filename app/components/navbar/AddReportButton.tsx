"use client";

import useAddReportModal from "@/app/hooks/UseAddReportModal";

const AddPropertyButton = () => {
  const addReportModal = useAddReportModal();
  const arountTheWorldHome = () => {
    addReportModal.open();
  };
  return (
    <div
      onClick={arountTheWorldHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
    >
      Around The World Home
    </div>
  );
};

export default AddPropertyButton;
