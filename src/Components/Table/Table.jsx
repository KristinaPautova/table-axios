import React, { useContext, useEffect } from "react";
import "./Table.css";
import { tableContext } from "../../context/TableContextProvider";

const Table = () => {
  const { getProduct, productsArr, prevPage, nextPage } =
    useContext(tableContext);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {productsArr.length ? (
        <div className="table">
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Название</th>
                  <th className="pers">Количество</th>
                  <th className="pers">Расстояние</th>
                </tr>
              </thead>
              <tbody className="task-list">
                {productsArr.map((elem) => (
                  <tr key={elem.id}>
                    <td>{elem.date}</td>
                    <td>{elem.name}</td>
                    <td>{elem.quantity}</td>
                    <td>{elem.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="block-button">
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Table;
