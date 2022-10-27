import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API = "http://localhost:8000/table";

export const tableContext = createContext();

const INIT_STATE = {
  product: [],
  // pageTotalCount: 1,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

let page = 1;
let totalPage = [];
let limit = 5;

const TableContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const [searchVal, setSearchVal] = useState("");
  const [value, setValue] = useState("q");

  const addProduct = async (product) => {
    await axios.post(API, product);
  };

  const getProduct = async (type,operator) => {
    totalPageFunc();
    // getTypeOperator(type,operat)
    console.log(type)

    if(type === "quantity" && operator === "less"){
      setValue('quantity_gte')
    }else if(type === "quantity" && operator === "more"){
      setValue('quantity_lte')
    }else if(type === "distance" && operator === "less"){
      setValue('distance_gte')
    }else if(type === "distance" && operator === "more"){
      setValue('distance_lte')
    }else{
      setValue('q')
    }
    const { data } = await axios.get(
        `${API}?_page=${page}&_limit=${limit}&${value}=${searchVal}`
    );
    console.log(data)
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });


  };

  const totalPageFunc = async () => {
    let { data } = await axios(API);
    totalPage = Math.ceil(data.length / limit);
  };

  // const getTypeOperator = (type,operat) => {
  //   console.log(searchVal)
  //   if(type === "name"){
  //     setValue(`&name=${searchVal}`)
  //   }
  // };

  const prevPage = () => {
    if (page <= 1) return;
    page--;
    getProduct();
  };

  const nextPage = () => {
    if (totalPage <= page) return;
    page++;
    getProduct();
  };

  let cloud = {
    nextPage,
    prevPage,
    addProduct,
    getProduct,
    setSearchVal,
    searchVal,
    productsArr: state.product,
  };

  return (
    <tableContext.Provider value={cloud}>{children}</tableContext.Provider>
  );
};

export default TableContextProvider;
