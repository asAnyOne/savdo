import "./header-menu.css";
const menuItems = [
  "savdo",
  "hujjat",
  "kassa",
  "karzlar",
  "sverka",
  "sklad",
  "oborot",
  "hisobot",
  "tovar",
  "klient",
  "baho",
  "chop",
  "yordam",
  "sozlash",
];

export default function HeaderMenu() {
  const items = menuItems.map((item, i) => {
    return <li key={menuItems[i]}>{item}</li>;
  });
  return (
    <div className="header-menu">
      <ul>{items}</ul>
    </div>
  );
}
