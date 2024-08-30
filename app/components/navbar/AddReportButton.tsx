import useAddReportModal from "@/app/hooks/UseReportModal";
import AddReportModal from "../modals/AddReportModal";

const AddPropertyButton = () => {
  const addReportModal = useAddReportModal();
  const ArountTheWorldHome = () => {
    addReportModal.open();
  };
  return (
    <div className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200">
      Around The World Home
    </div>
  );
};

export default AddPropertyButton;
