import React from "react";
import TableRow from "../fragments/TableRow";
import { tablerowDetails, tableheadDetails } from "../store/DefaultValues";

const TableContent = () => {
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr>
            {tableheadDetails.map((child, index) => {
              return <th key={index}>{child}</th>;
            })}
          </tr>
        </thead>
        {/* table head end */}
        <tbody className="table-body">
          {tablerowDetails.map((child, index) => {
            const { image, change, market, last_price, low, volume, high } =
              child;
            return (
              <TableRow
                key={index}
                img={image}
                one={market}
                two={last_price}
                three={change}
                four={volume}
                five={high}
                six={low}
              />
            );
          })}
        </tbody>
        {/* table body */}
      </table>
    </>
  );
};

export default TableContent;
