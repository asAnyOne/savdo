import TableAdd from "../table-add/table-add";
import TableIndex from "../table-index/table-index";
import TableList from "../table-list/table-list";

import "./table.css";

export default function Table() {
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <ul className="table-filter">
        <li>Postavshiki</li>
        <li>Potrebiteli</li>
        <li>Bank-terminal</li>
      </ul>
      <table>
        <TableIndex />
        <tbody>
          <TableAdd />
          <TableList />
        </tbody>
      </table>
    </form>
  );
}
