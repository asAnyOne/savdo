import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalDeleteBtn({ onDeleteClientData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteClientData();
    handleClose();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        O'chirish
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>O'chirishni tasdiqlaysizmi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yo'q
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
