import { useState, useEffect } from "react";

import EditClientData from "../body/body-header/client-body-header/client-body-header";
import ClientTable from "../body/body-items/client-body-items/client-table/table";
import HeaderMenu from "../header/header-menu";

import "./App.css";

function App() {
  const [clientData, setClientData] = useState("");
  const [compile, setCompile] = useState(0);

  // http://localhost:3000/client
  // http://62.109.18.228:3005/dics/contra

  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setClientData(data);
      });
  }, []);
  const onAddClientData = (data) => {
    setClientData([...clientData, data]);
  };
  const onDeleteClientData = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "DELETE",
    }).finally(() =>
      setClientData(clientData.filter((item) => item.id !== id))
    );

  const onChangeClientData = (id, data) => {
    setClientData(
      clientData.map((item) => {
        if (item.id === id) {
          return data;
        }
        return item;
      })
    );
  };

  const onCompile = (id) => {
    setCompile(id);
  };

  return (
    <div className="App">
      <HeaderMenu onCompile={onCompile} />
      {compile === 9 && <EditClientData onAddClientData={onAddClientData} />}
      {compile === 9 && (
        <ClientTable
          clientData={clientData}
          onDeleteClientData={onDeleteClientData}
          onChangeClientData={onChangeClientData}
        />
      )}
    </div>
  );
}

export default App;
