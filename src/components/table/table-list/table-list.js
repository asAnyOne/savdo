import { Component } from "react";
import "./table-list.css";

export default class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  // https://jsonplaceholder.typicode.com/users
  // http://62.109.18.228:3005/dics/contra
  // http://localhost:3000/client

  componentDidMount() {
    fetch("http://62.109.18.228:3005/dics/contra")
      .then((response) => response.json())
      .then(
        (items) => {
          this.setState({
            isLoaded: true,
            items,
          });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return (
        <tr>
          <td>Xatolik:{error.message}</td>
        </tr>
      );
    } else if (!isLoaded) {
      return (
        <tr>
          <td>Yuklanayapti...</td>
        </tr>
      );
    } else {
      return (
        <>
          {items.map((item) => {
            const { name, id, phone, address } = item;
            return (
              <tr key={id} className="border">
                <td className="center">
                  {/* <input
                    className="id"
                    type="number"
                    name=""
                    id=""
                    placeholder={id}
                  /> */}
                  {id}
                </td>
                <td className="center">
                  {/* <input type="checkbox" name="faol" id="" /> */}_/
                </td>
                <td>
                  {/* <input
                    type=" text"
                    name="region"
                    id=""
                    placeholder="Region"
                  /> */}
                  Tashkent
                </td>
                <td>
                  {/* <select name="pets" id="client-type">
                    <option value="">--Mijoz turi--</option>
                    <option value="dog">Postavshik</option>
                    <option value="cat">Mijoz</option>
                    <option value="cat">Bank-terminal</option>
                  </select> */}
                  Client
                </td>
                <td>
                  {/* <input
                    type=" text"
                    className="name"
                    name="name"
                    id=""
                    placeholder={name}
                  /> */}
                  {name}
                </td>
                <td>
                  {/* <input
                    type="text "
                    className="adress"
                    name="adress"
                    id=""
                    placeholder={address}
                  /> */}
                  {address}
                </td>
                <td>
                  {/* <input type=" tel" name="tel" id="" placeholder={phone} /> */}
                  {phone}
                </td>
                <td>
                  {/* <input
                    type="number "
                    name="number"
                    id=""
                    placeholder="Index"
                  /> */}
                  {0}
                </td>
                <td>
                  <span className="edit">O'zgartirish</span>
                  <span className="delete">X</span>
                </td>
              </tr>
            );
          })}
        </>
      );
    }
  }
}
