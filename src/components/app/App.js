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
    fetch(" http://62.109.18.228:3005/dics/contra")
      .then((response) => response.json())
      .then((data) => {
        setClientData(data);
      })
      .finally(() => console.log("done"));
  }, []);
  const onAddClientData = (data) => {
    setClientData([...clientData, data]);
  };
  const onDeleteClientData = (id) =>
    fetch(`http://62.109.18.228:3005/dics/contra/${id}`, {
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
  if (compile === 9) {
    return (
      <div className="App">
        <HeaderMenu onCompile={onCompile} />
        <EditClientData onAddClientData={onAddClientData} />
        <ClientTable
          clientData={clientData}
          onDeleteClientData={onDeleteClientData}
          onChangeClientData={onChangeClientData}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <HeaderMenu onCompile={onCompile} />
      </div>
    );
  }
}

export default App;
