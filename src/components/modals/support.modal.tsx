import { SupportForm } from "../forms";
import { Modal } from "./modal";

export const SupportModal = ({
  open,
  closeAction,
}: {
  open: boolean;
  closeAction: () => void;
}) => {
  return (
    <Modal open={open} closeAction={closeAction}>
      <SupportForm closeAction={closeAction} />
    </Modal>
  );
};
