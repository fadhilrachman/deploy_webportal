import { usePPDB } from "@/context/ppdb.context";
import { useCreatePPPDB } from "@/hooks/ppdb.hooks";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ModalSubmit = ({ isOpen, onClose }) => {
  const { create, status } = useCreatePPPDB();
  const { payload } = usePPDB();
  const handleSubmit = async () => {
    await create(payload);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Apakah anda yakin ingin daftar di sekolah ini?</ModalBody>
        <ModalFooter>
          <Button
            isLoading={status == "fetching"}
            loadingText="Loading"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSubmit;
