import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search__list">
        <label htmlFor="name">Столбцы</label>
        <select className="form-control" id="example">
          <option value="Название" selected>
            Название
          </option>
          <option value="Количество">Количество</option>
          <option value="Расстояние">Расстояние</option>
        </select>
      </div>
      <div className="search__list">
        <label htmlFor="name">Оператор</label>
        <select className="form-control" id="example">
          <option value="содержит" selected>
            содержит
          </option>
          <option value="равно">равно</option>
          <option value="больше">больше</option>
          <option value="меньше">меньше</option>
        </select>
      </div>
      <div className="search__list">
        <label htmlFor="name">Ценность</label>
        <input type="text" placeholder="Значение фильтра" />
      </div>
    </div>
  );
};

export default Search;
