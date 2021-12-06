import React from "react";
import ImgTextData from "./ImgTextData";

const TableRow = ({ img, one, two, three, four, five, six }) => {
  return (
    <>
      <tr>
        <td>
          <>
            <ImgTextData img={img} one={one} />
          </>
        </td>
        <td>{two}</td>
        <td>{three}</td>
        <td>{four}</td>
        <td>{five}</td>
        <td>{six}</td>
      </tr>
    </>
  );
};

export default TableRow;
