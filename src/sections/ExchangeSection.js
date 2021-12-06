import React, {useContext} from "react";
import { FaArrowRight } from "react-icons/fa";
import SidebarContext from "../store/SidebarContext";
import TableContent from "../components/TableContent";
import TextTitle from "../fragments/TextTitle";
import "../styles/TableSection.css";

const ExchangeSection = () => {
  const sidebarCtx = useContext(SidebarContext)
  return (
    <div className="table-section" onClick={() => sidebarCtx.showsidebarFunc("close")}>
      <div className="content-box">
        <TextTitle
          text="PAIR TRADING"
          heading="Trade popular pairs across the market"
        />
        <div className="table-box">
          <TableContent />
          <button className=" btn">
            <span>View All On The Exchange</span>
            <FaArrowRight className="icon" />
          </button>
        </div>
        {/* end of table */}
      </div>
    </div>
  );
};

export default ExchangeSection;
