import React from "react";
import ControlMonth from "./ControlMonth";
import Cell from "./Cell";
import Table from "./Table";

const Main = () => {
  return (
    <main className='main page__section'>
      <div class='main__section'>
        <ControlMonth />
        <Table />
      </div>
    </main>
  );
};

export default Main;
