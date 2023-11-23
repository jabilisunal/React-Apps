import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [info, setInfo] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setInfo(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    setFiltered(
      info.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <div className="input-area">
        <input
          type="text"
          className="input"
          placeholder="search names ..."
          onChange={handleChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
