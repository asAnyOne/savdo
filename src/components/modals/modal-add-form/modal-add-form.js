import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

import "./modal-add-form.css";

export default function ModalAddForm({ onAddClientData }) {
  const [show, setShow] = useState(false);
  const [clientData, setClientData] = useState({ id: Math.random() });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  // http://localhost:3000/client
  // http://62.109.18.228:3005/dics/contra

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://62.109.18.228:3005/dics/contra", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientData),
    })
      .then((response) => response.json())
      .then(() => {
        handleClose();
        onAddClientData(clientData);
      })
      .finally(() => setClientData(""));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Qo'shish
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MA'LUMOTLARNI KIRITING</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>ID :</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="id"
                type="number"
                placeholder="ID"
              />
            </Form.Group>
            <Form.Group className="mb-3 flex">
              <Form.Label>Aktiv :</Form.Label>
              <Form.Check
                onChange={handleChange}
                name="active"
                aria-label="option 1"
              />{" "}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Region:</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Region"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mijoz turi :</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="filter"
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ismi :</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Ismi"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address :</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="region"
                type="text"
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefon :</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="phone"
                type="tel"
                placeholder="Telefon"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Index :</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="zipCode"
                type="number"
                placeholder="Index"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                BEKOR
              </Button>
              <Button type="submit" variant="primary">
                TASDIQ
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
