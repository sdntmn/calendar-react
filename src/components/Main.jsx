import React from "react";
import ControlMonth from "./ControlMonth";
import Table from "./Table";

const Main = ({ day, year, month, setDate, ...props }) => {
  return (
    <main className='main'>
      <ControlMonth month={month} year={year} setDate={setDate} day={day} />
      <Table props={props} />
    </main>
  );
};

export default Main;
