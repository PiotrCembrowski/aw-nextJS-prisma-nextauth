import Modal from "./Modal";
import useAddReportModal from "@/app/hooks/UseReportModal";

const AddReportModal = () => {
  const addReportModal = useAddReportModal();

  const content = <p>Yo</p>;

  return (
    <>
      <Modal
        isOpen={addReportModal.isOpen}
        close={addReportModal.close}
        label="Add report."
        content={content}
      />
    </>
  );
};

export default AddReportModal;
