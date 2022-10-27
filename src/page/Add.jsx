import React, { useContext } from "react";
import { useState } from "react";
import { tableContext } from "../context/TableContextProvider";

const Add = () => {
  let { addProduct } = useContext(tableContext);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [distance, setDistance] = useState("");

  function handleClick() {
    let date = new Date(Date.now());
    const str = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    let obj = {
      name,
      date: str,
      quantity: +quantity,
      distance: +distance,
    };

    addProduct(obj);
  }
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Название"
      />
      <input
        value={quantity}
        type="number"
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        placeholder="Количество"
      />
      <input
        value={distance}
        type="number"
        onChange={(e) => {
          setDistance(e.target.value);
        }}
        placeholder="Расстояние"
      />
      <button onClick={handleClick} className="add-btn">
        Добавить
      </button>
    </div>
  );
};

export default Add;
