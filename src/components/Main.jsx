import React from "react";
import ControlMonth from "./ControlMonth";

import Table from "./Table";
import Popup from "./Popup";
import PopupEventAdd from "./PopupEventAdd";

const Main = () => {
  return (
    <main className='main page__section'>
      <div className='main__section'>
        <ControlMonth />
        <Table />
        <Popup>
          <PopupEventAdd />
        </Popup>
      </div>
    </main>
  );
};

export default Main;
