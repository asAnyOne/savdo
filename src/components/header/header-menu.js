import Nav from "react-bootstrap/Nav";
import { useState } from "react";

import "./header-menu.css";

export default function HeaderMenu(props) {
  const [menuItems, setMenuItems] = useState();
  const headerMenuItems = [
    { savdo: "bi bi-coin", id: 0 },
    { hujjat: "bi bi-file-text", id: 1 },
    { kassa: "bi bi-bank", id: 2 },
    { karzlar: "bi bi-people", id: 3 },
    { sverka: "bi bi-pencil-square", id: 4 },
    { sklad: "bi bi-people", id: 5 },
    { oborot: "bi bi-people", id: 6 },
    { hisobot: "bi bi-calculator", id: 7 },
    { tovar: "bi bi-boxes", id: 8 },
    { client: "bi bi-people", id: 9 },
    { baho: "bi bi-tags", id: 10 },
    { chop: "bi bi-printer", id: 11 },
    { yordam: "bi bi-question-circle", id: 12 },
    { sozlash: "bi bi-gear", id: "komil" },
  ];
  const items = headerMenuItems.map((item, i) => {
    if (i === 0) {
      return (
        <Nav.Item key={i}>
          <Nav.Link href="/home">
            <i className={Object.values(item)[0]}></i> {Object.keys(item)[0]}
          </Nav.Link>
        </Nav.Item>
      );
    }
    return (
      <Nav.Item
        onClick={(e) => props.onCompile(Object.values(item)[1])}
        key={Object.values(item)[1]}
      >
        <Nav.Link eventKey={`link-${i}`}>
          <i className={Object.values(item)[0]}></i>
          {Object.keys(item)[0]}
        </Nav.Link>
      </Nav.Item>
    );
  });
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      {items}
    </Nav>
  );
}
