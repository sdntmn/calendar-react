import React from "react";
import TableBody from "./TableBody";

const Table = ({ props }) => {
  const arrayRows = [0, 1, 2, 3, 4, 5];
  const table = arrayRows.map((item, index) => (
    <TableBody key={item} index={index} props={props}></TableBody>
  ));
  return (
    <>
      <section className='div'>
        <table className='table'>
          <tbody className='tbody'>{table}</tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
