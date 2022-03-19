import { Component } from "react";
import "./table-add.css";
export default class TableAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      active: false,
      address: "",
      filter: "",
      name: "",
      region: "",
      phone: "",
      zipCode: "",
    };
  }

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((res) => console.log(res))
      .then(() =>
        this.setState({
          id: "",
          active: false,
          address: "",
          filter: "",
          name: "",
          region: "",
          phone: "",
          zipCode: "",
        })
      );
  };

  render() {
    const { id, active, address, filter, name, region, phone, zipCode } =
      this.state;
    return (
      <tr className="table-add">
        <td className="center">
          <input
            type="number"
            className="id"
            name="id"
            value={id}
            placeholder="ID"
            onChange={this.handleChange}
          />
        </td>
        <td className="center">
          <input
            type="checkbox"
            name="active"
            defaultChecked={active}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type=" text"
            name="region"
            value={region}
            placeholder="Region"
            onChange={this.handleChange}
          />
        </td>
        <td>
          <select
            name="filter"
            id="client-type"
            value={filter}
            onChange={this.handleChange}
          >
            <option value="">--Mijoz turi--</option>
            <option value="provider">Postavshik</option>
            <option value="customer">Potrebitel</option>
            <option value="terminal">Bank-terminal</option>
          </select>
        </td>
        <td>
          <input
            type=" text"
            className="name"
            name="name"
            value={name}
            placeholder="Ismi"
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="text "
            className="adress"
            name="address"
            value={address}
            placeholder=" Manzil"
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type=" tel"
            name="phone"
            value={phone}
            placeholder="Telefon"
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="number "
            name="zipCode"
            value={zipCode}
            placeholder="Index"
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            className="button"
            type="submit"
            value="Qo'shish"
            onClick={this.handleSubmit}
          ></input>
        </td>
      </tr>
    );
  }
}
