import ModalDeleteBtn from "../../../../modals/modal-delete-btn/modal-delete-btn";
import ModalEditForm from "../../../../modals/modal-edit-form/modal-edit-form";

import "./table-items.css";

export default function DataDisplayer({
  clientData,
  onDeleteClientData,
  onChangeClientData,
}) {
  const makeList = () =>
    clientData.map((item, i) => {
      const { name, id, phone, address, active, region, zipCode } = item;

      return (
        <tr key={Math.random() * id}>
          <td className="id">{id}</td>
          <td>++</td>
          <td>Tashkent</td>
          <td>Client</td>
          <td>{name}</td>
          <td>{address}</td>
          <td>{phone}</td>
          <td>{zipCode}</td>
          <td className="pad0px">
            <ModalEditForm
              onChangeClientData={(data) => onChangeClientData(id, data)}
              getOnClient={(func) => func(item)}
            />
            <ModalDeleteBtn onDeleteClientData={() => onDeleteClientData(id)} />
          </td>
        </tr>
      );
    });

  return <tbody>{makeList()}</tbody>;
}
