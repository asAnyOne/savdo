import ModalAddForm from "../../../modals/modal-add-form/modal-add-form";
import ModalDeleteBtn from "../../../modals/modal-delete-btn/modal-delete-btn";

import ModalEditForm from "../../../modals/modal-edit-form/modal-edit-form";

export default function EditClientData({ onAddClientData }) {
  return (
    <div>
      <ModalAddForm onAddClientData={onAddClientData} />
      <ModalEditForm />
      <ModalDeleteBtn />
    </div>
  );
}
