import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [button, setButton] = useState("Add");

  const addTodo = () => {
    const updatedData = [...data, value];
    setData(updatedData);
    setValue("");
  };
  const deleteTodo = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  const edit = (todo, index) => {
    const updateData = [...data];
    updateData[index] = value;
    setData(updateData);
    setValue(todo);
  };

  return (
    <>
      <div className="App">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>{button}</button>
        <div className="data">
          <ul>
            {/* Map over the data array to display each todo */}
            {data.map((todo, index) => (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <li key={index}>{todo}</li>
                <button
                  style={{ margin: "10px" }}
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
                <button
                  style={{ margin: "10px" }}
                  onClick={() => edit(todo, index)}
                >
                  edit
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
