import Modal from "./Modal";
import useSearchModal from "@/app/hooks/useSearchModal";

const SearchModa = () => {
  let content = <></>;
  const searchModal = useSearchModal();

  return (
    <Modal
      label="Search"
      content={content}
      close={searchModal.close}
      isOpen={searchModal.isOpen}
    />
  );
};

export default SearchModa;
