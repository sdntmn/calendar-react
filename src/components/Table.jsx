import React from "react";
import Cell from "./Cell";

const Table = ({ arrayCell }) => {
  const table = arrayCell.map((item, index) => (
    <Cell key={index} dataRow={item} index={index + 1}></Cell>
  ));

  return (
    <>
      <section className='table page__section'>{table}</section>
    </>
  );
};

export default Table;
