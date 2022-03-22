import { Table } from "react-bootstrap";

import ModalDeleteBtn from "../../../../modals/modal-delete-btn/modal-delete-btn";
import ModalEditForm from "../../../../modals/modal-edit-form/modal-edit-form";

import "./table.css";
export default function ClientTable({
  clientData,
  onDeleteClientData,
  onChangeClientData,
}) {
  const makeList = () =>
    clientData.map((data, i) => {
      const { name, id, phone, address, active, region, zipCode, type } = data;

      return (
        <tr key={id}>
          <td className="id">{id}</td>
          <td>{active ? <input type="checkbox" defaultChecked /> : "+++"} </td>
          <td>{region || "Tashkent"}</td>
          <td>{type || "Mijoz"}</td>
          <td>{"" || name}</td>
          <td>{"" || address}</td>
          <td>{"" || phone}</td>
          <td>{zipCode || "0"}</td>
          <td className="pad0px">
            <ModalEditForm
              onChangeClientData={(data) => onChangeClientData(id, data)}
              getOnClient={(func) => func(data)}
            />
            <ModalDeleteBtn onDeleteClientData={() => onDeleteClientData(id)} />
          </td>
        </tr>
      );
    });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Faol</th>
          <th>Region</th>
          <th>Mijoz turi</th>
          <th>Ismi</th>
          <th>Manzil</th>
          <th>Telefon</th>
          <th>Index</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{makeList()}</tbody>
    </Table>
  );
}
