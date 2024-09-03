"use client";

import useLoginModal from "@/app/hooks/UseLoginModa";
import useAddReportModal from "@/app/hooks/UseAddReportModal";

const AddReportButton = ({
  userId,
}: {
  userId:
    | {
        role: string | undefined | null | {};
      }
    | undefined;
}) => {
  const loginModal = useLoginModal();
  const addReportModal = useAddReportModal();

  const arountTheWorldHome = () => {
    if (userId) {
      addReportModal.open();
    } else {
      loginModal.open();
    }
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

export default AddReportButton;
