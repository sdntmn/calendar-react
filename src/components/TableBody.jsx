import React from "react";
import Cell from "./Cell";

const TableBody = ({ index, props }) => {
  let ndxCellInRow = index * 6;
  const { arrayCell } = props;

  return (
    <>
      {arrayCell?.length === 42 && (
        <tr className='tr'>
          <td className='td'>
            <Cell dataRow={arrayCell[ndxCellInRow + 0 + index]} props={props} />
          </td>
          <td className='td'>
            <Cell dataRow={arrayCell[ndxCellInRow + 1 + index]} props={props} />
          </td>
          <td className='td'>
            <Cell dataRow={arrayCell[ndxCellInRow + 2 + index]} props={props} />
          </td>
          <td className='td'>
            <Cell dataRow={arrayCell[ndxCellInRow + 3 + index]} props={props} />
          </td>
          <td className='td'>
            <Cell dataRow={arrayCell[ndxCellInRow + 4 + index]} props={props} />
          </td>
          <td className='td'>
            <Cell dataRow={arrayCell[ndxCellInRow + 5 + index]} props={props} />
          </td>
          <td className='td'>
            <Cell dataRow={arrayCell[ndxCellInRow + 6 + index]} props={props} />
          </td>
        </tr>
      )}
    </>
  );
};

export default TableBody;
